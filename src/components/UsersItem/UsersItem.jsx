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
import Notiflix from "notiflix";

let body = {};
export const UsersItem = ({
  id,
  name,
  followers,
  tweets,
  avatar,
  follow,
}) => {
  const [followNew, setFollowNew] = useState(follow);
const [followersNew, setFollowersNew] = useState(followers);
const [currentId, setCurrentId] = useState(null);

  function onClick(arg) {
console.log(arg)
    if(arg === "card") {
console.log(id)
setCurrentId(id);
setFollowNew(!followNew);
setFollowersNew(prev => followNew ? prev - 1 : prev + 1);
// patch()
} else return;

  }
//     function patch() {async () => {
//       try {
//         await patchUser(`/api/v1/users/${currentId}`, body);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }}
//     };

//   useEffect(() => {
// patch()
//   },[]);

  return (
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
            {followersNew
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
          text={!followNew ? "follow" : "following"}
          onClick={onClick}
          active={followNew ? "active" : "passive"}
        />
      </UsersItemStyled>
  );
};
