import React from 'react';
import musicquizImg from "../../resources/images/musicquiz.jpg";
import discordRpcImg from "../../resources/images/discordrpc.jpg";
import passaxImg from "../../resources/images/passax.jpg";

import {MusicQuizMD, RpcMD, PassaxMD} from "./ProjectsMarkdown";
import Project from "../../components/Project/Project";


const Projects = () => {
    const projects = [
        {
            title: "Music Quiz",
            caption: "Test your music knowledge with our interactive music quiz –challenge yourself and your friends to see who's the ultimate music mastermind!",
            description: MusicQuizMD,
            img: musicquizImg,
            repo: "https://github.com/Auax/auax-music-quiz"
        },
        {
            title: "Passax",
            caption: "Python3 library to retrieve Chrome-based browser's saved login info.",
            description: PassaxMD,
            img: passaxImg,
            repo: "https://github.com/auax/passax"
        },
        {
            title: "Discord RPC",
            caption: "Create your customized Discord status with this simple yet effective application.",
            description: RpcMD,
            img: discordRpcImg,
            repo: "https://github.com/Auax/DiscordRPC"
        },
    ]


    return (
        <div name="projects" id="projects">
            {projects.map(item =>
                <Project project={item} key={item.title}/>
            )}
        </div>
    );
};

export default Projects;