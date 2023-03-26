import React, {useEffect, useRef, useState} from 'react';
import SelectedIcon from "./SelectedIcon";
import {useNavigate} from 'react-router-dom';
import {motion, useAnimation} from "framer-motion";
import {
    MenuIcon,
    MenuItemContainer,
    MenuLink,
    menuLinkVariants,
    MenuMobileOverlay,
    menuVariants, mobileOverlayVariants,
    selectedIconVariants, toggleMenuVariants
} from "./MenuStyling";
import {useSectionController} from "./useSectionController";


const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    // State for currently selected section index
    // State for the height of the menu container
    const [menuHeight, setMenuHeight] = useState(0);
    // Reference to the menu container
    const containerRef = useRef(null);

    const [sectionIndex, updateSection] = useSectionController(props.selected || 0);


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


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                            offset={-10}
                            duration={500}>
                            {item.label}
                        </MenuLink>
                    </motion.div>
                </motion.div>
            )
        }
    );

    return (
        <div className={`${props.className}`}>
            <MenuItemContainer ref={containerRef} className="Menu__ItemContainer">
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
            </MenuItemContainer>
            <motion.div
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
                animate={controls}
            />
        </div>
    );
};

export default Menu;