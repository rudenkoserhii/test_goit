import { ButtonStyled, TextStyled } from './Button.styled';

export const Button = ({text}) => {

    return (
        <ButtonStyled className={'btn'} > 
            <TextStyled>{text}
            </TextStyled>
        </ButtonStyled>
    )
};