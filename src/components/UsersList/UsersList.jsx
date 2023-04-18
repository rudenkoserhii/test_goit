import { UsersItem } from "../UsersItem/UsersItem";
import { UsersListStyled } from "./UsersList.styled";

export const UsersList = ({ users, updateData }) => {

  return (
    <UsersListStyled>
      {users.map((user) => (
        <UsersItem key={user.id} name={user.user} followers={user.followers} tweets={user.tweets} avatar={user.avatar} follow={user.follow} id={user.id} updateData={updateData}/>
      ))}
    </UsersListStyled>
  );
};
