import React from 'react';
import Tilt from 'react-parallax-tilt';

import {DiJavascript1} from "react-icons/di";
import styled from "styled-components";
import background from "../../resources/images/background.jpg";

const IconContainer = styled.div`
  font-size: 4em;
  color: black;
  width: 80px;
  height: 80px;
  background: URL(${background}) center;
  background-size: 150%;
  border-radius: 10px;
  transition: all .12s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-size: 130%;
  }

  & * {
    transition: all .12s ease-in-out;
  }

  &:hover * {
    transform: scale(105%);
  }
`;

const Icon = () => {
    return (
        <Tilt className="w-fit" scale={1.1} perspective={1000} tiltMaxAngleX={12} tiltMaxAngleY={12}>
            <IconContainer>
                <DiJavascript1 className="absolute right-0 bottom-0"/>
            </IconContainer>
        </Tilt>

    );
};

export default Icon;