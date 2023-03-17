import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import {Subtitle, TitleBase} from "../components/UI/Texts";
import Navbar from "../components/Navbar";
import SkillWrapper from "../components/Skills/SkillWrapper";


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: rgba(0, 2, 73, 0.8);
  text-align: left;
  margin: 0;
  padding: 68px 200px 20px 200px;

  @media (max-width: 1536px) {
    padding: 68px 80px 20px 80px;
  }

  @media (max-width: 1024px) {
    padding: 68px 30px 20px 30px;
  }
`;

const Background = styled.div`
  filter: blur(1px);
  width: 100%;
  height: 100vh;
  background-size: cover;
  z-index: -5;
  position: absolute;
  overflow: hidden;
`


const HeroTitle = styled.h1`
  font-stretch: expanded;
  font-weight: 500;
  margin-top: 100px;
  font-size: 7em;
  height: fit-content;
  line-height: 100%;

  @media (max-width: 1536px) {
    font-size: 5em;
  }

  @media (max-width: 1024px) {
    font-size: 4em;
  }
`;

const HeroSubtitle = styled.h2`
  font-weight: bold;
  margin-top: -15px;
`

const HeroDescription = styled.p`
  font-size: 1em;
  margin-top: 20px;
  color: #cee8ff;
  font-weight: 500;
  width: 40%;
  text-align: justify;
  text-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);
`;


const Home = () => {
    return (
        <div id="home" name="home">
            <Navbar/>
            <Background/>
            <HeroContainer>
                <HeroTitle>Ibai Farina</HeroTitle>
                <HeroDescription>
                    Hi! I'm Ibai Farina. I'm a full stack web developer from Barcelona, Spain. I have years of
                    experience working with Python and I've also completed several web projects.
                </HeroDescription>
                <button className="btn w-fit mt-10" onClick={() => {
                }}>My work
                </button>

                <SkillWrapper></SkillWrapper>
            </HeroContainer>
        </div>

    );
};

export default Home;