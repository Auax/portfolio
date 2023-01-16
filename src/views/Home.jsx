import {Container, EnterButton, EnterButtonContainer, SpinLogoImg, Subtitle, Title} from "./HomeStyles";
import SpinLogo from "../resources/gifs/SpinLogoNoise.gif";
import "./Home.css";

const Home = () => {
    return (
        <Container className="">
            <SpinLogoImg src={SpinLogo} alt="spin logo" draggable={false}/>
            <EnterButtonContainer>
                <EnterButton>ENTER</EnterButton>
                <Subtitle className="text-2xl font-bold"> React and Python dev.</Subtitle>
            </EnterButtonContainer>

        </Container>
    )
}

export default Home;