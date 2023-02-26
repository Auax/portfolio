import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {MdOutlineClose} from 'react-icons/md';
import {motion, useAnimation} from "framer-motion";
import {TitleBase} from "../UI/Texts";

const Background = motion(styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  display: none;
  z-index: 8;
  cursor: pointer;
`);

const Container = motion(styled.div`
  position: fixed;
  overflow-y: scroll;
  width: 60vw;
  height: 100vh;
  left: -20px;
  bottom: 0;
  background: rgb(0, 0, 0);
  padding: 100px 60px;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.2);
  z-index: 10;

  @media (max-width: 1024px) {
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
  }
`);

const Title = styled.h1`
  ${TitleBase};
  font-weight: 800;
  font-size: 4em;

  @media (max-width: 1024px) {
    font-size: 3em;
  }

  @media (max-width: 700px) {
    font-size: 3em;
  }
`;

const Description = styled.div`
  & p, ul, li, span {
    font-stretch: expanded;
  }
`;

const CloseIconContainer = styled.button`
  font-size: 2em;
  color: white;
  position: absolute;
  left: 10px;
  top: 10px;
`;

const InfoPopup = (props) => {
    const [isOpen, setIsOpen] = useState(props.isOpen);
    const closePopup = () => setIsOpen(false);

    // Animations
    const controls = useAnimation();

    // Animate opening animation for popup
    useEffect(() => {
        controls.start(isOpen ? "visible" : "hidden");
        props.onUpdate(isOpen);
    }, [isOpen]);

    // Update isOpen state when the prop is changed
    useEffect(() => setIsOpen(props.isOpen), [props.isOpen])

    const PopupVariants = {
        visible: {
            opacity: 1,
            x: 20,
            transition: {type: "spring", bounce: 0}
        },
        hidden: {
            opacity: 0,
            x: "-100%",
            transition: {type: "spring", bounce: 0},
        }
    };

    const BackgroundVariants = {
        visible: {
            display: "initial",
            opacity: 1,
        },
        hidden: {
            opacity: 0,
            transitionEnd: {
                display: "none"
            }
        }
    };


    return (
        <>
            <Container
                animate={controls}
                initial="hidden"
                variants={PopupVariants}>
                <CloseIconContainer onClick={closePopup}>
                    <MdOutlineClose/>
                </CloseIconContainer>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </Container>
            <Background
                onClick={closePopup}
                animate={controls}
                initial="hidden"
                variants={BackgroundVariants}/>
        </>
    );
};

export default InfoPopup;