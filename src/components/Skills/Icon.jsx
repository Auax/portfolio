import React from 'react';
import Tilt from 'react-parallax-tilt';
import styled from "styled-components";
import background from "../../resources/images/background.jpg";

const IconPosition = styled.div`
  position: absolute;
  left: ${({left}) => left}%;
  top: ${({top}) => top}%;
`;

const IconContainer = styled.div`
  font-size: 5.1em;
  color: black;
  width: 110px;
  height: 110px;
  background: URL(${background}) center;
  background-size: 150%;
  border-radius: 10px;
  transition: all .12s ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-size: 130%;
  }

  & * {
    transition: all .12s ease-in-out;
  }

  &:hover * {
    scale: 105%;
  }
`;

const SmallIconContainer = styled.div`
  font-size: 3em;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  transition: all .12s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    scale: 120%;
  }

  &:hover .description {
    opacity: 1;
  }

  & * {
    transition: all .12s ease-in-out;
  }

  &:hover * {
    scale: 80%;
  }
`;

const SmallIconDescription = styled.span`
  font-size: .2em;
  opacity: 0;
  transition: all .12s ease-in-out;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;

export const Icon = (props) => {
    return (
        <IconPosition left={props.left} top={props.top}>
            <Tilt scale={1.1} perspective={1000} tiltMaxAngleX={12} tiltMaxAngleY={12}>
                <IconContainer>
                    {props.children}
                </IconContainer>
            </Tilt>
        </IconPosition>

    );
};

export const SmallIcon = (props) => {
    return (
        <IconPosition left={props.left} top={props.top}>
            <Tilt scale={1.1} perspective={1000} tiltMaxAngleX={12} tiltMaxAngleY={12}>
                <SmallIconContainer>
                    {props.children}
                    <SmallIconDescription className="description">
                        Hello!
                    </SmallIconDescription>
                </SmallIconContainer>
            </Tilt>
        </IconPosition>
    );
};