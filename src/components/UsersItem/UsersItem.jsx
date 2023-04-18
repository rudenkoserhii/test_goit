import {
  UsersItemStyled,
  Logo,
  Picture,
  CircleBorder,
  Avatar,
  Name,
  Tweets,
  Followers,
} from "./UsersItem.styled";
import picture from "../../assets/images/card_picture.png";
import defaultAvatar from "../../assets/images/default_photo.png";
import { Button } from "../Button/Button";
import { useState, useEffect } from "react";
import { patchUser } from "../../services/API";
import Notiflix from "notiflix";
import { separateComa } from "../../utils/separateComa";

let body = {};
export const UsersItem = ({ id, name, followers, tweets, avatar, follow }) => {
  const [followNew, setFollowNew] = useState(follow);
  const [followersNew, setFollowersNew] = useState(followers);
  const [currentId, setCurrentId] = useState(null);

  function onClick(arg, clickedId) {
    if (arg === "card") {
      setCurrentId(clickedId);
      setFollowNew(!followNew);
      setFollowersNew((prev) => (followNew ? prev - 1 : prev + 1));
      const obj = {};
      obj.id = currentId;
      obj.follow = followNew;
      obj.followers = followersNew;
      return obj;
    } else return;
  }

  useEffect(() => {
    if (currentId !== null) {
      body.follow = followNew;
      body.followers = followersNew;

      (async () => {
        try {
          const { data } = await patchUser(`/api/v1/users/${currentId}`, body);
          if (!data) {
            return Notiflix.Notify.warning("Whoops, something went wrong 404");
          }
        } catch (error) {
          Notiflix.Notify.warning(error.message);
        }
      })();
    }
  }, [currentId, followNew, followersNew]);

  return (
    <UsersItemStyled key={id} id={id}>
      <Logo />
      <Picture src={picture} alt="displays" />
      <CircleBorder/>
      <Avatar src={avatar ? avatar : defaultAvatar} alt="avatar" />
      <Name className="name">{name}</Name>
      <Tweets>
        <span>
          {separateComa(tweets)}
        </span>
        <span>tweets</span>
      </Tweets>
      <Followers>
        <span>
          {separateComa(followersNew)}
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
