import React, {useEffect, useRef, useState} from 'react';
import SelectedIcon from "./SelectedIcon";
import styled from "styled-components";
import {Link as ScrollLink} from "react-scroll";
import {useNavigate} from 'react-router-dom';
import menu from "./Menu";

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

export const MenuItem = styled(ScrollLink)`
  color: ${({disabled = false}) => disabled ? "rgba(255, 255, 255, 0.6)" : "white"};
  margin-left: ${({disabled = false}) => disabled ? "0" : "25px"};
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: 400;
  font-stretch: expanded;
  cursor: pointer;
  transition: color 0.2s ease-in-out, margin-left 0.3s ease-in-out;

  &:hover {
    color: #dadada;
  }
`;

const DefaultMenu = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(props.selected || 0);
    const [menuHeight, setMenuHeight] = useState(0);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        let hash = window.location.hash;
        hash = hash.substring(1, hash.length);
        const menuObjectValues = Object.values(props.items);
        console.log(menuObjectValues.indexOf(hash));
        if (menuObjectValues.includes(hash)) {
            const index = menuObjectValues.indexOf(hash);
            setSelectedIndex(index);
        }
    }, []);

    // Set container height
    useEffect(() => setMenuHeight(containerRef.current.clientHeight), [props.items]);

    const updateSelectedIdx = (url, idx) => {
        navigate(`#${url}`);
        setSelectedIndex(idx);
        props?.onChangeSelection(idx);
    }

    // Render items
    const render = Object.entries(props.items).map(([name, url], idx) =>
        <MenuItem
            disabled={idx !== selectedIndex}
            onClick={() => updateSelectedIdx(url, idx)}
            key={idx}
            to={url}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
            {name}
        </MenuItem>
    );

    return (
        <MenuContainer className={props.className} ref={containerRef}>
            <SelectedIcon
                selected={selectedIndex}
                menuHeight={menuHeight}
                itemsCount={Object.entries(props.items).length}
            />
            {render}
        </MenuContainer>
    );
};

export default DefaultMenu;