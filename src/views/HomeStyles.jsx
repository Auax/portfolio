import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - var(--navbar-height));
  text-align: center;
  width: 100%;
  background: #000000;
`;

export const Subtitle = styled.h2`
  font-weight: 300;
  font-stretch: expanded;
  font-size: .9em;
  margin-top: -20px;
  transition: all .5s ease-in-out;
`

export const SpinLogoImg = styled.img`
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  user-select: none;
  opacity: 0.2;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

export const EnterButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
  text-align: center;
  mix-blend-mode: difference;
  z-index: 2;
  width: 100%;
`;

export const EnterButton = styled.button`
  //text-decoration: 4px solid underline;
  color: white;
  font-weight: 900;
  font-stretch: expanded;
  font-size: 3em;
  font-style: oblique 0deg;
  text-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  transition: all .5s ease-in-out;

  
  &:hover {
    transform: scale(120%);
    font-stretch: ultra-expanded;
    font-weight: 800;
    font-style: oblique 10deg;
  }

  &:hover + h2 {
    transform: translateY(10px) scale(95%) skewX(50deg);
    filter: blur(5px);
    opacity: 0;
  }
`;