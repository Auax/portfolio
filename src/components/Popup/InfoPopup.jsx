import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {SubtitleBase, TitleBase} from "../UI/Texts";
import {MdOutlineClose} from 'react-icons/md';
import {motion, useAnimation} from "framer-motion";


const Container = motion(styled.div`
  position: fixed;
  width: 60vw;
  height: 100vh;
  left: -20px;
  z-index: 10;
  bottom: 0;
  background: rgb(0, 0, 0);
  padding: 100px 60px;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.2);
`);

const Title = styled.h1`
  ${TitleBase};
  font-weight: 800;
  font-size: 4em;
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

    // Animations
    const controls = useAnimation();

    useEffect(() => {
        controls.start(isOpen ? "visible" : "hidden");
        props.onUpdate(isOpen);
    }, [isOpen]);

    useEffect(() => setIsOpen(props.isOpen), [props.isOpen])

    const PopupVariants = {
        visible: {
            opacity: 1,
            x: 20,
            transition: {type: "spring", bounce: 0}
        },
        hidden: {
            opacity: 1,
            x: "-100%",
            transition: {type: "spring", bounce: 0}
        }
    };


    return (
        <Container
            animate={controls}
            initial="hidden"
            variants={PopupVariants}>
            <CloseIconContainer onClick={() => setIsOpen(false)}>
                <MdOutlineClose/>
            </CloseIconContainer>
            <Title>{props.title}</Title>
            <Description>
                {props.description}
            </Description>
        </Container>
    );
};

export default InfoPopup;