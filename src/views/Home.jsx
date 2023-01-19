import {
    HomeContainer,
    Subtitle,
    Title,
} from "./HomeStyles";
import "./Home.css";
import Logo from "../components/Logo/Logo";
import Menu from "../components/Menu/Menu";


const Home = () => {
    return (
        <HomeContainer>
            <Logo/>
            <Title>I’m a React developer</Title>
            <Subtitle>Welcome to this personal portfolio project, where I showcase some of my projects. I believe
                websites should be unique, so I decided to build this one with a modern aesthetic.</Subtitle>
            <Menu className="mt-20"/>
        </HomeContainer>
    )
}

export default Home;