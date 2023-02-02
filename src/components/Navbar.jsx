import React from 'react';
import styled from "styled-components";
import Logo from "./Logo/Logo";


const NavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  height: var(--navbar-height);
  //background: #000249;
  //background: #00011f;
  background: rgba(17, 17, 17, 1);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(141, 141, 141, 0.1);
  padding: 10px 20px;
`;

const NavbarText = styled.a`
  margin-top: 2px;
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