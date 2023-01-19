import styled from "styled-components";


export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MenuItem = styled.span`
  color: ${({disabled = false}) => disabled ? "rgba(255, 255, 255, 0.6)" : "white"};
  margin-left: ${({disabled = false}) => disabled ? "0" : "25px"};
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: 400;
  font-stretch: expanded;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  width: fit-content;

  &:hover {
    color: #5a697c;
  }
`;

export const IconImg = styled.img`
  width: 15px;
  position: absolute;
  transform: translateY(20px);
`;