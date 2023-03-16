import React from 'react';
import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";
import {SiUpwork} from "react-icons/si";


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--navbar-height);
  position: absolute;
  padding: 0 200px;
  margin-top: 30px;

  @media (max-width: 1536px) {
    padding: 68px 80px 20px 80px;
  }

  @media (max-width: 1024px) {
    padding: 68px 30px 20px 30px;
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
  height: 60%;
  background: rgba(255, 255, 255, 0.3);
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