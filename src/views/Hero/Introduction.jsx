import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import {Subtitle, TitleBase} from "../../components/UI/Texts";
import {Canvas, useLoader} from "@react-three/fiber";
import {Suspense} from 'react'
import {Model} from "../../components/Laptop";
import {Sphere} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";


const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #000249;
  text-align: center;
  margin: 0;
  padding: 68px 100px 20px 100px;

  @media (max-width: 1536px) {
    padding: 68px 80px 20px 80px;
  }

  @media (max-width: 1024px) {
    padding: 68px 30px 20px 30px;
  }
`;

const IntroTitle = styled.h1`
  ${TitleBase};
  margin-top: 100px;
  font-size: 3em;

  @media (max-width: 1536px) {
    font-size: 5em;
  }

  @media (max-width: 1024px) {
    font-size: 4em;
  }
`;

const IntroSubtitle = styled(Subtitle)`
  font-size: .8em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  @media (max-width: 1536px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }`;


const CanvasContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Introduction = () => {
    const {scene} = useLoader(GLTFLoader, "models/laptop.glb");

    return (
        <IntroContainer>
            <div className="mx-auto w-fit ">
                <Logo/>
            </div>
            <CanvasContainer>
                <Canvas shadows camera={{position: [1, 0, 0]}}>
                    {/*<ambientLight intensity={0.25}/>*/}
                    <pointLight position={[0, 0, 0]} intensity={100}/>
                    <Sphere position={[1, 0, 0]} scale={0.5}/>
                    {/*<Model/>*/}
                    <primitive object={scene} dispose={null}/>
                    {/*<OrbitControls />*/}

                </Canvas>
            </CanvasContainer>
            {/*<IntroTitle>Hi! I'm a React dev.</IntroTitle>*/}
            {/*<IntroSubtitle>Welcome to this personal portfolio project, where I showcase some of my*/}
            {/*    projects.</IntroSubtitle>*/}
        </IntroContainer>
    );
};

export default Introduction;