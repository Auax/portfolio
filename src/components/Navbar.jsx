import React from 'react';
import styled from "styled-components";
import Logo from "./Logo/Logo";


const NavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  height: var(--navbar-height);
  background: #000249;
  //background: rgba(255, 255, 255, 1);
  //border-bottom: 1px solid rgba(141, 141, 141, 0.1);
  //box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  padding: 10px 20px;
`;

const NavbarText = styled.a`
  margin-top: 2px;
  //color: #000249;
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