import { Select, Option } from "./Filter.styled";
import { useState } from "react";

export const Filter = ({ filter }) => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
    filter(e.target.value);
  }

  return (
      <Select id="follow" onChange={handleChange} defaultValue={value}>
{/* <Option value={value} disabled>Choose an option ...</Option> */}
        <Option value="show_all">Show all</Option>
        <Option value="follow">Follow</Option>
        <Option value="followings">Followings</Option>
      </Select>
  );
};
