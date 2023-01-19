import React, {useEffect, useRef, useState} from 'react';
import {MenuContainer, MenuItem} from "./MenuStyles";
import SelectedIcon from "./SelectedIcon";

const Menu = (props) => {
    const options = ["Projects", "About me", "Contact"]
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [height, setHeight] = useState(0)
    const containerRef = useRef(null);

    useEffect(() => {
        setHeight(containerRef.current.clientHeight);
    });

    const render = options.map((option, idx) =>
        <MenuItem disabled={idx !== selectedIdx}>{option}</MenuItem>
    );

    return (
        <MenuContainer className={props.className} ref={containerRef}>
            <SelectedIcon selected={selectedIdx} menuHeight={height} itemsCount={options.length}/>
            {render}
        </MenuContainer>
    );
};

export default Menu;