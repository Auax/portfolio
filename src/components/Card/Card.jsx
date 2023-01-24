import React from 'react';
import styled from "styled-components";
import {Subtitle, SubtitleBase, TitleBase, TitleH2} from "../UI/Texts";

const CardTitle = styled.h3`
  font-size: 2em;
  ${TitleBase}
`;

const CardDescription = styled.p`
  ${SubtitleBase};
  margin-top: 5px;
  font-size: 0.8em;
  width: 100%;
`;

const CardImage = styled.img`
  margin-top: 5px;
  border-radius: 10px;
`;

const Card = (props) => {
    return (
        <div className={props.className}>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
            <CardImage src={props.image} alt={props.imageAlt}/>
        </div>
    );
};

Card.defaultProps = {
    imageAlt: "project image"
}

export default Card;