import React from 'react';
import musicquizImg from "../../resources/images/musicquiz.jpg";
import discordRpcImg from "../../resources/images/discordrpc.jpg";
import passaxImg from "../../resources/images/passax.jpg";

import "./Projects.scss";
import {MusicQuizMD, RpcMD, PassaxMD} from "./ProjectsMarkdown";
import Project from "../../components/Project/Project";
import {TitleH1} from "../../components/UI/Texts";


const Projects = () => {
    const projects = [
        {
            title: "Music Quiz",
            caption: "Test your music knowledge with our interactive music quiz –challenge yourself and your friends to see who's the ultimate music mastermind!",
            description: MusicQuizMD,
            img: musicquizImg,
            repo: "https://github.com/Auax/auax-music-quiz",
            tags: ["create-react-app", "Spotify API"]
        },
        {
            title: "Passax",
            caption: "Python3 library to retrieve Chrome-based browser's saved login info.",
            description: PassaxMD,
            img: passaxImg,
            repo: "https://github.com/auax/passax",
            tags: ["Python 3", "Cryptography", "Chrome DEV"]
        },
        {
            title: "Discord RPC",
            caption: "Create your customized Discord status with this simple yet effective application.",
            description: RpcMD,
            img: discordRpcImg,
            repo: "https://github.com/Auax/DiscordRPC",
            tags: ["Python 3", "Discord API"]
        },
    ]


    return (
        <div className="projects__container">
            <div name="projects" id="projects"
                 className="md:w-3/4 lg:w-2/3 2xl:w-1/2 w-full mx-auto px-10 md:px-20"
            >
                <TitleH1 className="mt-20 mb-10 text-center text-black">Projects</TitleH1>
                {projects.map((item, idx) =>
                    <Project project={item} key={item.title} reverse={idx % 2 !== 0}/>
                )}
            </div>
        </div>
    );
};

export default Projects;