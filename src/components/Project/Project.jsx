import React, {useState} from 'react';
import Card from "../Card/Card";
import InfoPopup from "../Popup/InfoPopup";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  gap: 4em;
  grid-column: 2;
`;

const Project = (props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div>
            <ProjectContainer className="py-5">
                <Card title={props.project.title}
                      description={props.project.caption}
                      image={props.project.img}
                      repo={props.project.repo}
                      onClick={() => setIsPopupOpen(!isPopupOpen)}
                />
                <InfoPopup title={props.project.title}
                           description={props.project.description}
                           repo={props.project.repo}
                           isOpen={isPopupOpen}
                           onUpdate={(v) => setIsPopupOpen(v)}
                />
            </ProjectContainer>
        </div>
    );
};

export default Project;