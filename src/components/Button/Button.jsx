import { ButtonStyled, TextStyled } from './Button.styled';

export const Button = ({text}) => {

    return (
        <ButtonStyled type='button' className={'btn'} > 
            <TextStyled>{text}
            </TextStyled>
        </ButtonStyled>
    )
};