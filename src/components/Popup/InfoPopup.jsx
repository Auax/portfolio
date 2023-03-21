import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {MdOutlineClose} from 'react-icons/md';
import {motion, useAnimation} from "framer-motion";
import {TitleBase} from "../UI/Texts";
import ReactMarkdown from 'react-markdown';

const Background = motion(styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  display: none;
  z-index: 20;
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
  z-index: 30;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: justify;
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


const CloseIconContainer = styled.button`
  font-size: 2em;
  color: white;
  position: absolute;
  left: 10px;
  top: 10px;
`;

const MarkdownStyler = styled.div`
  h1, h2, h3, h4 {
    margin-bottom: 5px;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
    margin-bottom: 10px;
    font-stretch: semi-expanded;
  }

  em, b {
    font-weight: bold;
  }

  ul {
    margin-top: -12px;
    margin-bottom: 10px;
    margin-left: 25px;
    color: rgba(255, 255, 255, 0.8);
    list-style-type: initial;
  }

  a {
    color: #4470ff;
  }

  img {
    border-radius: 5px;
  }

  code {
    background: black;
    padding: 2px 5px;
    border-radius: 5px;
  }
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

                <MarkdownStyler>
                    <ReactMarkdown linkTarget="_blank">
                        {props.description}
                    </ReactMarkdown>
                </MarkdownStyler>
                <a href={props.repo} target="_blank"
                   className="btn inline-block">GitHub</a>
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