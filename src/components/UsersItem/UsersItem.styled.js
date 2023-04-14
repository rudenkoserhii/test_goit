import styled from 'styled-components';
import { baseColor } from "../../utils/variables";
import {ReactComponent as ellipse} from '../../assets/svg/ellipse.svg'

export const UsersItemStyled = styled.li`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 1.222;

text-transform: uppercase;

color: ${baseColor.colors.textDark};

position: relative;

width: 380px;
height: 460px;

background: ${baseColor.colors.purpleBG};
box-shadow: -2.5px 7px 21px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`;

export const Logo = styled.img`
position: absolute;
width: 76px;
height: 22px;
left: 20px;
top: 20px;

background: ${baseColor.colors.logo};
`;

export const Picture = styled.img`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;
`;

export const Line = styled.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;

background: ${baseColor.colors.buttonPassive};
box-shadow: ${baseColor.shadows.line};
`;

export const Circle = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 63px;
top: 170px;

background: ${baseColor.colors.purpleBG};
border-radius: 50%;
`;

export const CircleBorder = styled(ellipse)`
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
left: 159px;
top: 188px;

object-fit: contain;

border-radius: 50%;
`;

export const Name = styled.div`
position: absolute;
width: 100%;
height: 62px;
left: 50%;
top: 260px;
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



