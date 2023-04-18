import { Select, Option } from "./Filter.styled";

export const Filter = ({ filter, value }) => {
  return (
    <Select
      id="follow"
      dafaultValue={"show_all"}
      onChange={(e) => filter(e.target.value)}
      value={value}
    >
      {["show_all", "follow", "followings"].map((option) => (
        <Option value={option} disabled={option === value ? true : null}>
          {option}
        </Option>
      ))}
    </Select>
  );
};
