import React, {useEffect, useRef, useState} from 'react';
import SelectedIcon from "./SelectedIcon";
import styled from "styled-components";
import {Link as ScrollLink} from "react-scroll";
import {useNavigate} from 'react-router-dom';
import {motion} from "framer-motion";

export const MenuContainer = styled.div`
  display: flex;
  z-index: 10;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MenuLink = styled(ScrollLink)`
  color: ${({$active = true}) => $active ? "#fff" : "rgba(255, 255, 255, 0.6)"};
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: 500;
  font-stretch: expanded;
  cursor: pointer;
  transition: color 0.2s ease-in-out, margin-left 0.3s ease-in-out;

  &:hover {
    color: #dadada;
  }
`;

const Menu = (props) => {
    const [sectionIndex, setSectionIndex] = useState(props.selected || 0);
    const [menuHeight, setMenuHeight] = useState(0);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    // Set container height
    useEffect(() =>
        setMenuHeight(containerRef.current.clientHeight), [props.items]
    );

    // Update selected value
    const updateSection = (section, idx) => {
        if (section === undefined) return;
        navigate(`#${section}`);
        setSectionIndex(idx);
    }

    // Render items
    const render = props.items.map((item, index) => {
            const isSelected = index === sectionIndex;
            return (
                <motion.div animate={
                    {
                        // x: isSelected ? 30 : -30,
                        rotate: isSelected ? -5 : 5,
                        color: isSelected ? "#fff" : "#b6b6b6",
                        textShadow: isSelected ? "0 0 10px rgba(255, 255, 255, 0.2)" : "0",
                        scale: isSelected ? 1 : .8,
                        transition: {duration: .3}
                    }
                }>
                    <MenuLink
                        $active={index === sectionIndex}
                        onSetActive={() => updateSection(item.section, index)}
                        onClick={() => updateSection(item.section, index)}
                        key={index}
                        to={item.section}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        {item.label}
                    </MenuLink>
                </motion.div>
            )
        }
    );

    return (
        <MenuContainer className={props.className} ref={containerRef}>
            {/*<SelectedIcon*/}
            {/*    selected={sectionIndex}*/}
            {/*    menuHeight={menuHeight}*/}
            {/*    itemsCount={props.items.length}*/}
            {/*/>*/}
            {render}
        </MenuContainer>
    );
};

export default Menu;