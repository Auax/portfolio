import React from 'react';
import styled from "styled-components";
import {
    DiJavascript1,
    DiNetmagazine, DiNodejs, DiNodejsSmall,
    DiPython,
    DiReact,
    DiSwift,
} from "react-icons/di";
import {Icon, SmallIcon} from "./Icon";


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    position: absolute;
  }

  & .center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
`;

const SkillWrapper = () => {
    return (
        <Wrapper>
            <Container>
                <Icon left={40} top={5}><DiJavascript1 className="right-0 bottom-0"/></Icon>
                <Icon left={10} top={40}><DiPython className="center"/></Icon>
                <Icon left={64} top={60}><DiReact className="center"/></Icon>
                <SmallIcon left={55} top={40}><DiNodejsSmall className="center"/></SmallIcon>
                <SmallIcon left={28} top={75}><DiSwift className="center"/></SmallIcon>
                <SmallIcon left={10} top={15}><DiNetmagazine className="center"/></SmallIcon>
            </Container>
        </Wrapper>
    );
};

export default SkillWrapper;