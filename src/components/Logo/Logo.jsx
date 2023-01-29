import styled from "styled-components";
import LogoImg from "../../resources/images/logo.png";

const LogoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  height: 100%;
  pointer-events: none;
`;

const LogoImage = styled.img`
  height: 100%;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={LogoImg}/>
        </LogoContainer>
    );
}

export default Logo;
