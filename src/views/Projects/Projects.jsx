import React from 'react';
import styled from "styled-components";
import sampleImage1 from "../../resources/images/sample_img_1.png";
import Card from "../../components/Card/Card";

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
    return (
        <ProjectContainer>
            <Card
                title="Samurai"
                description="AI generated image from prompt using Midjoruney"
                image={sampleImage1}
            />
            <Card
                title="Samurai"
                description="AI generated image from prompt using Midjoruney"
                image={sampleImage1}/>
        </ProjectContainer>
    );
};

export default Projects;