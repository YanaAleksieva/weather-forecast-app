import React, { useState } from "react";
import ButtonItem from "../Button/Button";

import classes from "./SearchItem.module.css";

const SearchItem = () => {
  const [value, setValue] = useState("Sofia");

  const onClickHandler = () => {
    console.log(value);
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
