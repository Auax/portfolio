import styled from "styled-components";
import {Subtitle, TitleBase} from "../components/UI/Texts";
import Object3D from "../components/Object3D/Object3D";
import {Link, animateScroll as scroll} from "react-scroll";
import Navbar from "../components/Navbar";


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - var(--navbar-height));
  background: #000249;
  text-align: left;
  margin: 0;
  padding: 68px 100px 20px 100px;

  @media (max-width: 1536px) {
    padding: 68px 80px 20px 80px;
  }

  @media (max-width: 1024px) {
    padding: 68px 30px 20px 30px;
  }
`;

const HeroTitle = styled.h1`
  ${TitleBase};
  margin-top: 30px;
  font-size: 3em;

  @media (max-width: 1536px) {
    font-size: 5em;
  }

  @media (max-width: 1024px) {
    font-size: 4em;
  }
`;

const HeroSubtitle = styled(Subtitle)`
  font-size: .8em;
  width: 50%;

  @media (max-width: 1536px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Home = () => {

    return (
        <div id="home" name="home">
            <Navbar/>
            <HeroContainer>
                <div>
                    <HeroTitle>Hi! I'm a React dev.</HeroTitle>
                    <HeroSubtitle>Welcome to this personal portfolio project, where I showcase some of my
                        projects.
                    </HeroSubtitle>
                </div>
                <CanvasContainer>
                    <Object3D/>
                </CanvasContainer>
            </HeroContainer>
        </div>
    );
};

export default Home;