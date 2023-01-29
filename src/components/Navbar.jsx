import React from 'react';
import styled from "styled-components";
import Logo from "./Logo/Logo";


const NavbarContainer = styled.nav`
  width: 100%;
  height: var(--navbar-height);
  background: #00011f;
  padding: 15px;
`;


const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo/>
        </NavbarContainer>
    );
};

export default Navbar;