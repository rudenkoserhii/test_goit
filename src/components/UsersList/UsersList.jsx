import { UsersItem } from "../UsersItem/UsersItem";
import { UsersListStyled } from "./UsersList.styled";

export const UsersList = ({ users }) => {
  return (
    <UsersListStyled>
      {users.map((user) => user)}
      <UsersItem />
    </UsersListStyled>
  );
};
