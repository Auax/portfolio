import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 43% 1fr;

  @media (max-width: 1536px) {
    grid-template-columns: 50% 1fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;