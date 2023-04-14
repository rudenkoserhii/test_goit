import {
  UsersItemStyled,
  Logo,
  Picture,
  Line,
  Circle,
  CircleBorder,
  Avatar,
  Name,
  Tweets,
  Followers,
} from "./UsersItem.styled";
import picture from "../../assets/images/card_picture.png";
import defaultAvatar from "../../assets/images/default_photo.png";
import ellipse from "../../assets/images/ellipse.png";
import { Button } from "../Button/Button";
import { useState, useEffect } from "react";
import { patchUser } from "../../services/API";
// import { onLoading, onLoaded } from "../../helpers/Loader/Loader";
// import Notiflix from "notiflix";

let body = {};
export const UsersItem = ({
  id,
  name,
  followers,
  tweets,
  avatar,
  followValue,
}) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [follow, setFollow] = useState(followValue);

  function onClick(arg) {
    if(arg === "btn__loadMore") {
console.log('click')
setFollow(!follow);
    body.followers = follow ? followers - 1 : followers + 1;
    body.follow = follow;
console.log(body)
console.log(id)
}

  }

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await patchUser(`/api/v1/users/${id}`, body);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  return (
    <>
      {/* {isLoading ? onLoading() : onLoaded()}
      {error && Notiflix.Notify.warning("Whoops, something went wrong")} */}

      <UsersItemStyled key={id}>
        <Logo />
        <Picture src={picture} alt="displays" />
        <Line />
        <Circle />
        <CircleBorder src={ellipse} alt="circle" />
        <Avatar src={avatar ? avatar : defaultAvatar} alt="avatar" />
        <Name className="name">{name}</Name>
        <Tweets>
          <span>{tweets}</span>
          <span>tweets</span>
        </Tweets>
        <Followers>
          <span>
            {followers
              .toString()
              .split("")
              .reverse()
              .map((e, i) => ((i + 1) % 3 === 0 ? `,${e}` : e))
              .reverse()
              .join("")}
          </span>
          <span>followers</span>
        </Followers>
        <Button
          place={"btn__card"}
          text={"follow"}
          onClick={onClick}
          active={follow ? "active" : "passive"}
        />
      </UsersItemStyled>
    </>
  );
};
