import styled from "styled-components";
import Projects from "./Projects/Projects";
import Introduction from "./Hero/Introduction";
import {GridContainer} from "../components/UI/GridContainer";




const Home = () => {


    return (
        <>
            <GridContainer>
                <Introduction/>
            </GridContainer>
        </>

    )
}

export default Home;