import { ButtonStyled, TextStyled } from "./Button.styled";
import { baseColor } from "../../utils/variables";

export const Button = ({ text, place, onClick, active }) => {
  return (
    <ButtonStyled
      style={{
        background: (active === 'passive' && baseColor.colors.buttonPassive) || (active === 'active' && baseColor.colors.buttonActive),
      }}
      type="button"
      className={`btn ${place}`}
      onClick={(e) => {
        e.currentTarget.classList.contains("btn__loadMore") &&
          onClick("loadMore");
        e.currentTarget.classList.contains("btn__card") && onClick("card", e.currentTarget.parentNode.id);
        e.currentTarget.classList.contains("btn__back") && onClick("back");
      }}
    >
      <TextStyled>{text}</TextStyled>
    </ButtonStyled>
  );
};
