import React from 'react';
import styled, {css} from "styled-components";
import {AiFillGithub} from "react-icons/ai";
import {useSectionController} from "./Menu/useSectionController";
import {Link as ScrollLink} from "react-scroll";


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
    padding: 0 80px 0 80px;
  }

  @media (max-width: 1024px) {
    padding: 0 60px 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 40px 0 40px;
  }
`;

const NavbarText = styled.span`
  font-weight: 500;
`;

const NavbarLinksCss = css`
  font-size: .8em;
  margin: 0 10px;
  cursor: pointer;

  svg {
    color: rgba(255, 255, 255, 0.5);
  }

  svg:hover {
    color: white;
  }
`;

const NavbarScrollLink = styled(ScrollLink)`
  ${NavbarLinksCss};
`;

const NavbarLink = styled.a`
  ${NavbarLinksCss};
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
                <NavbarScrollLink to="projects" duration={500} smooth={true}>Work</NavbarScrollLink>
                <NavbarScrollLink to="contact" duration={500} smooth={true}>Contact</NavbarScrollLink>
                <Separator/>
                <NavbarLink target="_blank" href="https://github.com/auax"><AiFillGithub size={22}/></NavbarLink>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;