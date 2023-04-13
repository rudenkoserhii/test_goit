import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { baseColor } from "../../utils/variables";

export const Wrap = styled.nav`

    background: ${baseColor.colors.purpleBG};

padding-top: 36px;
padding-bottom: 36px;

`;

export const NavLinkStyled = styled(NavLink)`

  &.active {
    pointer-events: none;
  }

  &.active .btn {
    background: ${baseColor.colors.buttonActive};
  }
  :hover:not(.active) .btn {
    background: ${baseColor.colors.buttonActive};
  }

  }`;

export const ListStyled = styled.ul`

display: flex;
align-items: center;
justify-content: center;
gap: 16px;

`;

export const ListItem = styled.li`

  }`;
