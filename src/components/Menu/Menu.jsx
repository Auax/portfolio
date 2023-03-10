import React, {useEffect, useRef, useState} from 'react';
import SelectedIcon from "./SelectedIcon";
import styled from "styled-components";
import {Link as ScrollLink} from "react-scroll";
import {useNavigate} from 'react-router-dom';
import {motion, useAnimation} from "framer-motion";
import {AiOutlinePlus} from "react-icons/ai";

export const MenuIcon = styled(AiOutlinePlus)`
  font-size: 3em;
  background: #000309;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background .1s ease-in-out;

  &:hover {
    background: #00135e;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
`;

const MenuLink = styled(ScrollLink)`
  color: ${({$active = true}) => $active ? "#fff" : "rgba(255, 255, 255, 0.6)"};
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  font-stretch: expanded;
  transition: color 0.2s ease-in-out, margin-left 0.3s ease-in-out;

  &:hover {
    color: #dadada;
  }
`;

const MenuMobileOverlay = motion(styled.div`
  display: none;

  @media (max-width: 1024px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    bottom: 0;
    z-index: -1;
    cursor: pointer;
    backdrop-filter: blur(4px);
    background: linear-gradient(to top, #000307, rgba(0, 0, 0, 80%) 60%, rgba(0, 0, 0, 0));
  }
`);

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    // State for currently selected section index
    const [sectionIndex, setSectionIndex] = useState(props.selected || 0);
    // State for the height of the menu container
    const [menuHeight, setMenuHeight] = useState(0);
    // Reference to the menu container
    const containerRef = useRef(null);
    // React Router's navigate hook
    const navigate = useNavigate();

    // Animations
    const controls = useAnimation();

    // Toggle menu animation
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                setMenuHeight(containerRef.current.clientHeight)
            }, 10)
        }
        controls.start(isOpen ? "visible" : "hidden");
    }, [controls, isOpen]);

    const menuVariants = {
        visible: {
            opacity: 1,
            display: "block",
        },
        hidden: {
            opacity: 0,
            transitionEnd: {display: "none"}
        }
    };

    const menuLinkVariants = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: -50,
        }
    };

    const selectedIconVariants = {
        visible: {
            opacity: 1,
            transition: {delay: .25}
        },
        hidden: {
            opacity: 0,
            transition: {duration: .1}
        }
    };

    // Not actually hidden or visible, but I'm keeping the same names for convenience
    const toggleMenuVariants = {
        visible: {
            rotate: 45
        },
        hidden: {
            rotate: 0
        }
    };

    const mobileOverlayVariants = {
        visible: {
            display: "block",
            opacity: 1,
        },
        hidden: {
            opacity: 0,
            transitionEnd: {display: "none"},
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Update the selected section index and navigate to the corresponding section
    const updateSection = (section, idx) => {
        if (section === undefined) return;
        navigate(`#${section}`);
        setSectionIndex(idx);
    }

    // Render the menu items
    const render = props.items.map((item, index) => {
            const isSelected = index === sectionIndex;
            return (
                <motion.div
                    key={index}
                    animate={{
                        x: isSelected ? 30 : -30,
                        color: isSelected ? "#fff" : "#b6b6b6",
                        // textShadow: isSelected ? "0 0 10px rgba(255, 255, 255, 0.2)" : "0",
                        scale: isSelected ? 1 : .9,
                        transition: {duration: .3}
                    }}>
                    <motion.div
                        key={item.section}
                        variants={menuLinkVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{delay: index * 0.1}}>
                        <MenuLink
                            $active={index === sectionIndex}
                            onSetActive={() => updateSection(item.section, index)}
                            onClick={() => updateSection(item.section, index)}
                            to={item.section}
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            {item.label}
                        </MenuLink>
                    </motion.div>
                </motion.div>
            )
        }
    );

    return (
        <div className={props.className}>
            <MenuContainer ref={containerRef}>
                <motion.div
                    variants={selectedIconVariants}
                    initial="hidden"
                    animate={controls}>
                    <SelectedIcon
                        selected={sectionIndex}
                        menuHeight={menuHeight}
                        itemsCount={props.items.length}/>
                </motion.div>
                <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate={controls}>
                    {render}
                </motion.div>
            </MenuContainer>
            <motion.div
                style={{marginLeft: "-20px"}}
                className="w-fit"
                variants={toggleMenuVariants}
                initial="hidden"
                animate={controls}>
                <MenuIcon onClick={toggleMenu}/>
            </motion.div>
            <MenuMobileOverlay
                onClick={() => setIsOpen(false)}
                variants={mobileOverlayVariants}
                initial="hidden"
                animate={controls}/>
        </div>
    );
};

export default Menu;