import styled from "styled-components";
import {Subtitle, TitleBase} from "../components/UI/Texts";


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(60vh);
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
`;


const Home = () => {
    return (
        <div id="home" name="home">
            <HeroContainer>
                <div className="text-center b">
                    <HeroTitle>Ibai Farina</HeroTitle>
                    <HeroSubtitle>イバイファリナ</HeroSubtitle>
                </div>
            </HeroContainer>
        </div>

    );
};

export default Home;