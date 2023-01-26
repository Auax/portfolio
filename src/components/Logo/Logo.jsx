import {Link} from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled(Link)`
  position: relative;
  width: fit-content;
  font-family: "Maragsa", sans-serif;
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-top: -100px;
  z-index: 10;
`;

const LogoTitle = styled.span`
  font-size: 10em;
`;

const LogoSubtitle = styled.span`
  color: #8496ff;
  font-size: 5em;
  font-weight: 900;
  margin-top: -0.5em;`;

function Logo() {
    return (
        <LogoContainer to="/">
            <LogoTitle>Ibai Farina</LogoTitle>
            <LogoSubtitle>イバイファリナ</LogoSubtitle>
        </LogoContainer>
    );
}

export default Logo;
