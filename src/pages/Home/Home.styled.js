import styled, { keyframes } from "styled-components";
import image from "../../assets/images/logo512.png";

const entrance = keyframes`
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  `;

export const Div = styled.div`
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: calc(100vh - 222px), calc(100vh - 222px);

  height: calc(100vh - 222px);

  animation: ${entrance} 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`;
