import React from 'react';
import styled from "styled-components";


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: var(--navbar-height);
  background: #dbe0ff;
  padding: 10px 20px;
`;

const NavbarText = styled.a`
  color: #000249;
  margin-top: 2px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarText href="#">Project 1</NavbarText>
            <NavbarText href="#">Project 1</NavbarText>
            <NavbarText href="#">Project 1</NavbarText>
            <NavbarText href="#">Project 1</NavbarText>
            <NavbarText href="#">Project 1</NavbarText>
            {/*<Logo/>*/}
        </NavbarContainer>
    );
};

export default Navbar;