import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import styled from "styled-components";
import {BsArrowsFullscreen} from "react-icons/bs";
import {useInView} from "react-intersection-observer";
import {SubtitleBase, TitleBase} from "../UI/Texts";

const CardTitle = styled.h3`
  ${TitleBase};
  font-size: 3em;

  @media (max-width: 700px) {
    font-size: 2em;
  }
`;

const CardDescription = styled.p`
  ${SubtitleBase};
  margin-top: 5px;
  font-size: 0.8em;
  width: 100%;
`;

const CardImage = styled.img`
  position: relative;
  margin-top: 5px;
  border-radius: 10px;
`;

const Card = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    // Make the card appear when it's visible
    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const ProjectVariants = {
        visible: {opacity: 1, scale: 1, transition: {duration: 1}},
        hidden: {opacity: 0, scale: .9}
    };

    const TitleVariants = {
        visible: {x: 0, transition: {duration: 1.3}},
        hidden: {x: -15, fontStretch: 30}
    }

    const BottomVariants = {
        visible: {y: 0, transition: {duration: 1.3}},
        hidden: {y: 15, fontStretch: 30}
    }

    return (
        <motion.div
            className={props.className}
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={ProjectVariants}>
            <motion.div variants={TitleVariants}>
                <a href={props.repo} target="_blank">
                    <CardTitle className="hover:text-neutral-400">{props.title}</CardTitle></a>
            </motion.div>
            <CardDescription>{props.description}</CardDescription>
            <motion.div variants={BottomVariants}>
                <button className="rounded-lg flex text-neutral-300 hover:opacity-100 mt-2"
                        onClick={props.onClick}>Expanded view <BsArrowsFullscreen className="mt-1 ml-2"/>
                </button>
            </motion.div>
        </motion.div>
    );
};

Card.defaultProps = {
    imageAlt: "project image"
}

export default Card;