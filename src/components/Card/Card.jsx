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

    const ItemVariants = {
        visible: {y: 0, transition: {duration: 1.3}},
        hidden: {y: -30, fontStretch: 30}
    }

    return (
        <motion.div
            className={props.className}
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={ProjectVariants}>
            <motion.div variants={ItemVariants}>
                <CardTitle>{props.title}</CardTitle>
            </motion.div>
            <CardDescription>{props.description}</CardDescription>
            <CardImage src={props.image} alt={props.imageAlt}/>
            <motion.div variants={ItemVariants}>
                <button className="rounded-lg mt-2 float-right flex opacity-80 hover:opacity-100"
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