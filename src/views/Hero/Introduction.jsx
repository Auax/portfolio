import React from 'react';
import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import {Subtitle, TitleBase} from "../../components/UI/Texts";
import Card from "../../components/Card/Card";
import img from "../../resources/images/sample_img_1.png";


const IntroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000249;
  text-align: center;
  margin: 0;
  padding: 68px 100px 20px 100px;

  @media (max-width: 1536px) {
    padding: 68px 80px 20px 80px;
  }

  @media (max-width: 1024px) {
    padding: 68px 30px 20px 30px;
  }
`;
const IntroTitle = styled.h1`
  ${TitleBase};
  margin-top: 100px;
  font-size: 6em;

  @media (max-width: 1536px) {
    font-size: 5em;
  }

  @media (max-width: 1024px) {
    font-size: 4em;
  }
`;

const IntroSubtitle = styled(Subtitle)`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  @media (max-width: 1536px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }`;

const Introduction = () => {
    return (
        <IntroContainer>
            <div className="mx-auto w-fit">
                <Logo/>
            </div>
            <IntroTitle>Hi! I'm a React dev.</IntroTitle>
            <IntroSubtitle>Welcome to this personal portfolio project, where I showcase some of my
                projects.</IntroSubtitle>
            <div className="mx-auto text-center">
                <div className="w-1/4 mx-auto text-left mt-10 bg-black/30 shadow-2xl p-10 rounded-xl">
                    <Card
                        title="Last"
                        description="Something"
                        image={img}
                    />
                    <small className="text-white/50">
                        Last Project
                    </small>
                </div>
            </div>
        </IntroContainer>
    );
};

export default Introduction;