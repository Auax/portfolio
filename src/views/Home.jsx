import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import {Subtitle, TitleBase} from "../components/UI/Texts";
import Navbar from "../components/Navbar";


const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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

const Console = styled.p`
  font-size: 1.5em;
  text-align: left;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 15px;
  border-radius: 10px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);

  & .console__typewrite {
    color: rgba(245, 245, 245, 0.9);
    margin-left: 5px;
  }
`;


const Home = () => {
    return (
        <div id="home" name="home">
            {/*<Navbar/>*/}
            <HeroContainer>
                <div className="text-center b">
                    <HeroTitle>Ibai Farina</HeroTitle>
                    <Console>
                        <span className="text-green-400">></span>
                        <div className="console__typewrite">
                            <Typewriter
                                options={{
                                    strings: ["Python developer.", "Node.js developer."],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </Console>

                </div>
            </HeroContainer>
        </div>

    );
};

export default Home;