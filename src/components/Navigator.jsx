import React, {useEffect, useRef, useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Menu from "./Menu/Menu";
import Navbar from "./Navbar";
import Home from "../views/Home";
import Projects from "../views/Projects/Projects";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  position: fixed;
  left: 50px;
  bottom: 30px;
`;

const Navigator = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const items = [
        {id: "home", name: "Home", el: <Home/>},
        {id: "projects", name: "Projects", el: <Projects/>},
    ];

    const onChangeVisibleSection = (isVisible, identifier) => {
        console.log(isVisible, identifier);
        if (isVisible) {
            const item = items.find(item => {
                return (item.id === identifier)
            });
            const idx = items.indexOf(item);
            setSelectedItem(idx);
        }
    };

    return (
        <div>
            <StyledMenu
                selected={selectedItem}
                onChangeSelection={(i) => setSelectedItem(i)}
                items={items}/>
            <Navbar/>
            {items.map(item =>
                <VisibilitySensor
                    key={item.id}
                    onChange={(e) => onChangeVisibleSection(e, item.id)}
                    partialVisibility={true}
                    offset={{top: 50}}
                >
                    {item.el}
                </VisibilitySensor>
            )}

        </div>
    );
};

export default Navigator;