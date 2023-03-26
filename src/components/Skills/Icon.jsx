import React from 'react';
import Tilt from 'react-parallax-tilt';
import "./skills.scss";


export const Icon = (props) => {
    return (
        <Tilt scale={1.1} perspective={1000} tiltMaxAngleX={12} tiltMaxAngleY={12}>
            <div className="skill-logo">{props.children}</div>
            <div className={props.small ? "skill__small" : "skill__large"}></div>
        </Tilt>
    );
};
