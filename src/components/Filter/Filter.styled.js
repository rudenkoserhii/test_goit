import styled from "styled-components";
import { baseColor } from "../../utils/variables";

export const Select = styled.select`

  padding-left: 10px;
  padding-right: 28px;


  width: 196px;
  height: 50px;

  cursor: pointer;

  background: ${baseColor.colors.buttonPassive};
  box-shadow: ${baseColor.shadows.button};
  border-radius: 10px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.222;

  text-transform: uppercase;

  color: ${baseColor.colors.textDark};

  &:hover {
    outline: 3px solid ${baseColor.colors.buttonActive};
  }
`;

export const Option = styled.option``;
