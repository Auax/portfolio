import styled from "styled-components";
import {AiOutlinePlus} from "react-icons/ai";
import {Link as ScrollLink} from "react-scroll";
import {motion} from "framer-motion";

export const MenuIcon = styled(AiOutlinePlus)`
  font-size: 3em;
  border: 2px solid rgba(143, 162, 255, 0.2);
  background: #090046;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background .1s ease-in-out;

  &:hover {
    background: #00135e;
  }
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
`;

export const MenuLink = styled(ScrollLink)`
  color: ${({$active = true}) => $active ? "#fff" : "rgba(255, 255, 255, 0.6)"};
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  font-stretch: expanded;
  transition: color 0.2s ease-in-out, margin-left 0.3s ease-in-out;

  &:hover {
    color: #dadada;
  }
`;

export const MenuMobileOverlay = motion(styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  bottom: 0;
  z-index: -1;
  cursor: pointer;
  backdrop-filter: blur(4px);
  background: linear-gradient(to top, #000307, rgba(0, 0, 0, 80%) 60%, rgba(0, 0, 0, 0));
`);


export const menuVariants = {
    visible: {
        opacity: 1,
        display: "block",
    },
    hidden: {
        opacity: 0,
        transitionEnd: {display: "none"}
    }
};

export const menuLinkVariants = {
    visible: {
        opacity: 1,
        x: 0,
    },
    hidden: {
        opacity: 0,
        x: -50,
    }
};

export const selectedIconVariants = {
    visible: {
        opacity: 1,
        transition: {delay: .25}
    },
    hidden: {
        opacity: 0,
        transition: {duration: .1}
    }
};

// Not actually hidden or visible, but I'm keeping the same names for convenience
export const toggleMenuVariants = {
    visible: {
        rotate: 45
    },
    hidden: {
        rotate: 0
    }
};

export const mobileOverlayVariants = {
    visible: {
        display: "block",
        opacity: 1,
    },
    hidden: {
        opacity: 0,
        transitionEnd: {display: "none"},
    }
};