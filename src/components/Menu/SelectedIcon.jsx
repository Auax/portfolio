import React, {useEffect, useRef, useState} from 'react';
import StarIcon from "../../resources/images/StarIcon.svg";
import {motion} from "framer-motion";
import styled from "styled-components";

export const IconImg = styled.img`
  width: 15px;
  position: absolute;
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
            <motion.div animate={{
                y: topOffset,
                transition: {duration: .3}
            }}>
                <IconImg src={StarIcon} alt="selected icon" useTransition={useTransition}/>
            </motion.div>
        </div>
    );
};

export default SelectedIcon;