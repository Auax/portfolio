import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {BsArrowsFullscreen} from "react-icons/bs";


import "./project.scss";
import InfoPopup from "../Popup/InfoPopup";


const Project = (props) => {
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

    const ExpandedViewVariants = {
        visible: {y: 0, transition: {duration: 1.3}},
        hidden: {y: 15, fontStretch: 30}
    }


    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <>
            <motion.div
                className={`py-10 ${props.className || ""}`}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={ProjectVariants}>

                <div className={`project__container ${props.reverse ? "reverse-grid" : ""}`}>
                    <img className="project__image" src={props.project.img} alt="image"/>
                    <div className="project__info">
                        <div className="flex justify-between">
                            <a href={props.project.repo} target="_blank"
                               className="project__title">{props.project.title}</a>
                            <button className="project__expand-btn" onClick={() => setIsPopupOpen(true)}>
                                <BsArrowsFullscreen/>
                            </button>
                        </div>
                        <p className="project__description">{props.project.caption}</p>
                        <div className="project__tags-container">
                            {props.project.tags.map(tag => <span className="project__tag">{tag}</span>)}
                        </div>
                    </div>
                </div>


            </motion.div>

            <InfoPopup title={props.project.title}
                       description={props.project.description}
                       repo={props.project.repo}
                       isOpen={isPopupOpen}
                       onUpdate={(v) => setIsPopupOpen(v)}
            />
        </>
    );
};

Project.defaultProps = {
    imageAlt: "project image"
}

export default Project;