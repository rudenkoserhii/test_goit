import styled from "styled-components";
import { baseColor } from "../../utils/variables";

export const FooterStyled = styled.footer`
  background: ${baseColor.colors.purpleBG};

  padding-top: 36px;
  padding-bottom: 36px;
min-height: 100px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 1.222;

text-transform: uppercase;
text-align: center;

color: ${baseColor.colors.buttonPassive};
`;
