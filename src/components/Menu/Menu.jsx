import React from 'react';
import {IconImg, MenuContainer, MenuItem} from "./MenuStyles";
import StarIcon from "../../resources/images/StarIcon.svg";

const Menu = (props) => {
    return (
        <MenuContainer className={props.className}>
            <IconImg src={StarIcon} alt="selected icon"/>
            <MenuItem>Projects</MenuItem>
            <MenuItem disabled={true}>About me</MenuItem>
            <MenuItem disabled={true}>Contact</MenuItem>
        </MenuContainer>
    );
};

export default Menu;