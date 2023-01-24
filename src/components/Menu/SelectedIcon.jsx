import React, {useEffect, useRef, useState} from 'react';
import StarIcon from "../../resources/images/StarIcon.svg";
import styled from "styled-components";

export const IconImg = styled.img`
  width: 15px;
  position: absolute;
  transform: ${({offset}) => `translateY(${offset || 30}px)`};
  transition: ${({useTransition = false}) => useTransition ? "transform" : "none"} 0.3s ease-in-out;
`;

const SelectedIcon = (props) => {
    const [topOffset, setTopOffset] = useState(0);
    const [useTransition, setUseTransition] = useState(false);
    const gapValue = 10;


    useEffect(() => {
        setTimeout(() => setUseTransition(true), 20);
    }, []);


    useEffect(() => {
        const gapTotal = gapValue * props.itemsCount; // Calculate the total gap of elements
        const itemHeight = (props.menuHeight - gapTotal) / props.itemsCount;
        const offset = props.selected * (itemHeight + gapValue) + itemHeight / 2
        setTopOffset(offset);
    }, [props.selected, props.itemsCount, props.menuHeight]);


    return (
        <div>
            <IconImg src={StarIcon} alt="selected icon" offset={topOffset} useTransition={useTransition}/>
        </div>
    );
};

export default SelectedIcon;