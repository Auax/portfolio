import styled, {css} from "styled-components";

export const TitleBase = css`
  font-weight: bold;
  font-stretch: expanded;
  line-height: 96%;
`;

export const TitleH1 = styled.h1`
  ${TitleBase};
  font-size: 5em;

  @media (max-width: 1024px) {
    font-size: 4em;
  }

  @media (max-width: 700px) {
    font-size: 3em;
  }
`;

export const TitleH2 = styled.h2`
  ${TitleBase};
  font-size: 4em;

  @media (max-width: 1536px) {
    font-size: 3em;
  }
`;

export const SubtitleBase = css`
  font-weight: 400;
  font-stretch: expanded;
  letter-spacing: 3px;
  line-height: 140%;
`;

export const Subtitle = styled.p`
  ${SubtitleBase};
  ${props => props.align ? `text-align: ${props.align}` : ""};
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.25em;

  @media (max-width: 1536px) {
    font-size: 1em;
  }
`;