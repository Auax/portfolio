import React, {useState} from 'react';
import styled from "styled-components";
import DefaultMenu from "./DefaultMenu";

const StyledMenu = styled(DefaultMenu)`
  position: fixed;
  left: 50px;
  bottom: 30px;
`;

const Menu = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const items = {
        "Home": "home",
        "Projects": "projects",
        "Contact": "contact",
    };

    return (
        <StyledMenu
            selected={selectedItem}
            onChangeSelection={(i) => setSelectedItem(i)}
            items={items}/>
    );
};

export default Menu;