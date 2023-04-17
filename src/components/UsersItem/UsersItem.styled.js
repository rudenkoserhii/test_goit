import styled from 'styled-components';
import { baseColor } from "../../utils/variables";
import {ReactComponent as logo_goit} from '../../assets/svg/logo_goit.svg'

export const UsersItemStyled = styled.li`
position: relative;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 1.222;

text-transform: uppercase;

color: ${baseColor.colors.buttonPassive};

position: relative;

width: 380px;
height: 460px;

background: ${baseColor.colors.purpleBG};
box-shadow: -2.5px 7px 21px rgba(0, 0, 0, 0.23);
border-radius: 20px;

&::before {
content: '';

position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;

background: ${baseColor.colors.buttonPassive};
box-shadow: ${baseColor.shadows.line};
}

/* &::after {
content: '';

clip-path:     polygon(0   0,
           100% 0,
           100% 100%,
           0    100%);

position: absolute;
width: 80px;
height: 80px;
left: 150px;
top: 178px;

background: ${baseColor.colors.buttonPassive};
box-shadow: ${baseColor.shadows.line};
} */


`;

export const Logo = styled(logo_goit)`
position: absolute;
width: 76px;
height: 22px;
left: 20px;
top: 20px;
`;

export const Picture = styled.img`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;
`;

export const CircleBorder = styled.img`
position: absolute;
width: 80px;
height: 80px;
left: 150px;
top: 178px;
`;

export const Avatar = styled.img`
position: absolute;
width: 62px;
height: 62px;
left: 159.48px;
top: 187.42px;

object-fit: contain;

border-radius: 50%;

outline: 9px solid ${baseColor.colors.buttonPassive};
box-shadow: ${baseColor.shadows.line};

&:hover ~.name {
  visibility: visible;
}
`;

export const Name = styled.div`
position: absolute;
height: 62px;
left: 50%;
top: 260px;

transform: translateX(-50%);

visibility: hidden;

white-space: nowrap;
}
`;

export const Tweets = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
gap: 5px;

margin: 284px auto 16px auto;
`;

export const Followers = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
gap: 5px;

margin-bottom: 26px;
margin-right: auto;
margin-left: auto;
`;




