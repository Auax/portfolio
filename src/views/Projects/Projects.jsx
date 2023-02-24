import React from 'react';
import musicquizImg from "../../resources/images/musicquiz.jpg";
import discordrpcImg from "../../resources/images/discordrpc.jpg";

import {MusicQuizDescription} from "./ProjectItems";
import Project from "../../components/Project/Project";


const Projects = () => {
    const projects = [
        {
            title: "Music Quiz",
            caption: "Test your music knowledge with our interactive music quiz –challenge yourself and your friends to see who's the ultimate music mastermind!",
            description: MusicQuizDescription,
            img: musicquizImg,
            repo: "https://github.com/Auax/auax-music-quiz"
        },

        {
            title: "Discord RPC",
            caption: "Create your customized Discord status with this simple yet effective application.",
            description: MusicQuizDescription,
            img: discordrpcImg,
            repo: "https://github.com/Auax/auax-music-quiz"
        },
    ]


    return (
        <div>
            {projects.map(item =>
                <Project project={item} key={item.title}/>
            )}
        </div>
    );
};

export default Projects;