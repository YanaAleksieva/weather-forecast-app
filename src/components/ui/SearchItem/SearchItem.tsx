import React, { useState } from "react";
import ButtonItem from "../Button";

import classes from "./SearchItem.module.css";

type SearchItemProps = {
  onFilter: (filteredCity: string) => void;
};

const SearchItem = (props: SearchItemProps) => {
  const [value, setValue] = useState("Sofia");

  const onClickHandler = () => {
    props.onFilter(value);
    setValue("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={classes.input}
        />
        <ButtonItem onClick={onClickHandler}>Search</ButtonItem>
      </div>
    </div>
  );
};

export default SearchItem;
