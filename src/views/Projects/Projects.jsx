import React, {useEffect} from 'react';
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import Card from "../../components/Card/Card";
import musicquizImg from "../../resources/images/musicquiz.jpg";
import {useInView} from "react-intersection-observer";
import ProjectInfo from "../../components/ProjectInfo/ProjectInfo";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 4em;
  grid-column: 2;
  padding: 4em;

  & {
    max-width: 50%;
  }
`;

const Projects = () => {

    const projects = [
        {
            title: "Music Quiz",
            description: "Test your music knowledge with our interactive music quiz –challenge yourself and your friends to see who's the ultimate music mastermind!",
            img: musicquizImg,
            repo: "https://github.com/Auax/auax-music-quiz"
        },

        {
            title: "Music Quiz",
            description: "Test your music knowledge with our interactive music quiz –challenge yourself and your friends to see who's the ultimate music mastermind!",
            img: musicquizImg,
            repo: "https://github.com/Auax/auax-music-quiz"
        },
    ]

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const ProjectVariants = {
        visible: {opacity: 1, scale: 1, transition: {duration: .5}},
        hidden: {opacity: 0, scale: .9}
    };

    return (

        <ProjectContainer name="projects" id="projects">
            {projects.map(item =>
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={ProjectVariants}
                >
                    <Card title={item.title} description={item.description} image={item.img} repository={item.repo}/>
                </motion.div>
            )}
            <ProjectInfo/>
        </ProjectContainer>

    );
};

export default Projects;