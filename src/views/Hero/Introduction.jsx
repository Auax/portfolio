import React from 'react';
import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import {Subtitle, TitleH1} from "../../components/UI/Texts";

const IntroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000249;
  margin: 0;
  padding: 68px 100px 20px 100px;

  @media (max-width: 1536px) {
    padding: 68px 80px 20px 80px;
  }

  @media (max-width: 1024px) {
    text-align: center;
    padding: 20px;
  }
`;

const IntroSubtitle = styled(Subtitle)`
  max-width: 80%;

  @media (max-width: 1536px) {
    max-width: 90%;
  }

  @media (max-width: 1024px) {
    max-width: 60%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 700px) {
    max-width: 90%;
  }`;

const Introduction = () => {
    return (
        <IntroContainer>
            <div className="lg:mx-0 mx-auto w-fit">
                <Logo/>
            </div>
            <TitleH1>I’m a React developer</TitleH1>
            <IntroSubtitle>Welcome to this personal portfolio project, where I showcase some of my projects.
            </IntroSubtitle>
        </IntroContainer>
    );
};

export default Introduction;