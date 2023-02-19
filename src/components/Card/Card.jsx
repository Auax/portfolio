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
  z-index: 2;
  position: relative;
  margin-top: 5px;
  border-radius: 10px;

`;

const Overlay = styled.div`
  position: relative;
  cursor: pointer;

  & * {
    transition: all 0.2s ease-in-out;
  }

  &:hover img {
    filter: brightness(.6);
  }

  & .overlayText {
    position: absolute;
    z-index: 3;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 800;
    font-size: 2em;
    opacity: 0;
  }

  &:hover > .overlayText {
    opacity: 1;
  }
`;

const Card = (props) => {

    return (
        <div className={props.className}>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
            {/*<a href={props.repository}>More</a>*/}
            <Overlay>
                <span className="overlayText">More!</span>
                <CardImage src={props.image} alt={props.imageAlt}/>
            </Overlay>
        </div>
    );
};

Card.defaultProps = {
    imageAlt: "project image"
}

export default Card;