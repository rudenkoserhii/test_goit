import { Select, Option } from "./Filter.styled";

export const Filter = ({ filter, value }) => {
  return (
      <Select id="follow" onChange={(e) => {filter(e.target.value)}} value={value}>
        <Option value="show_all">Show all</Option>
        <Option value="follow">Follow</Option>
        <Option value="followings">Followings</Option>
      </Select>
  );
};
