import React from 'react';
import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--navbar-height);
  position: absolute;
  z-index: 20;
  padding: 0 300px;
  margin-top: 30px;
  
  @media (max-width: 1536px) {
    padding: 0 110px 0 110px;
  }

  @media (max-width: 1024px) {
    padding: 0 60px 0 60px;
  }
`;

const NavbarText = styled.span`
  font-weight: 500;
`;

const NavbarLinks = styled.a`
  font-size: .8em;
  margin: 0 10px;

  svg {
    color: rgba(255, 255, 255, 0.5);
  }

  svg:hover {
    color: white;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 20px;
  background: rgba(255, 255, 255, .3);
  margin: 0 10px;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarText>Auax</NavbarText>
            <div className="flex h-full items-center">
                <NavbarLinks href="#">Work</NavbarLinks>
                <NavbarLinks href="#">Contact</NavbarLinks>
                <Separator/>
                <NavbarLinks target="_blank" href="https://github.com/auax"><AiFillGithub size={22}/></NavbarLinks>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;