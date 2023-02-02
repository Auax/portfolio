import styled from "styled-components";
import {Subtitle, TitleBase} from "../components/UI/Texts";
import Navbar from "../components/Navbar";


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  //height: calc(100vh - var(--navbar-height));
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
  margin-top: calc(var(--navbar-height) + 30px);
  font-size: 8em;

  
  @media (max-width: 1536px) {
    font-size: 5em;
  }

  @media (max-width: 1024px) {
    font-size: 4em;
  }
`;

const HeroSubtitle = styled(Subtitle)`
  font-size: 4em;
  //width: 50%;
  text-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);
  
  
  @media (max-width: 1536px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }`;

const CanvasContainer = styled.div`
  //width: 100%;
  //height: 100%;
  //top: 0;
  //left: 0;
  //z-index: 0;
`;

const Home = () => {

    return (
        <div id="home" name="home">
            <Navbar/>
            <HeroContainer>
                <div className="text-center">
                    {/*<HeroSubtitle>Web Developer</HeroSubtitle>*/}
                    <HeroTitle>Ibai Farina</HeroTitle>
                    <HeroSubtitle>イバイファリナ</HeroSubtitle>
                </div>
                <CanvasContainer>
                    <img
                        className="m-14 rounded shadow-2xl mx-auto"
                        alt="hero"
                        width="600px"
                        src="https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    {/*    <Scene/>*/}
                </CanvasContainer>
            </HeroContainer>
        </div>
    );
};

export default Home;