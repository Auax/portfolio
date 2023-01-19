import React, {useEffect, useState} from 'react';
import StarIcon from "../../resources/images/StarIcon.svg";
import styled from "styled-components";

export const IconImg = styled.img`
  width: 15px;
  position: absolute;
  transform: ${({offset = 0}) => `translateY(${offset}px)`};
  transition: all 1s ease-in-out;
`;

const SelectedIcon = (props) => {
    const [pos, setPos] = useState(0);

    useEffect(() => {

        // TODO : selected=2 breaks layout!

        const selected = 0;
        const gapValue = 10;
        const gapTotal = 10 * props.itemsCount;
        const itemHeight = (props.menuHeight - gapTotal) / props.itemsCount;
        const value = selected * itemHeight + itemHeight / 2 + selected * gapValue;
        setPos(value);
    }, [])


    return (
        <div>
            <IconImg src={StarIcon} alt="selected icon" offset={pos}/>
        </div>
    );
};

export default SelectedIcon;