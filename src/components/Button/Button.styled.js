import styled from "styled-components";
import { baseColor } from "../../utils/variables";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;

  width: 196px;
  height: 50px;

cursor: pointer;

  background: ${baseColor.colors.buttonPassive};
  box-shadow: ${baseColor.shadows.button};
  border-radius: 10px;

`;

export const TextStyled = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 1.222;

text-transform: uppercase;

color: ${baseColor.colors.textDark};
  }`;
