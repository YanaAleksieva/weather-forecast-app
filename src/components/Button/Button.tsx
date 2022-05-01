import React from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const ButtonItem = (props: ButtonProps) => (
  <button className={classes.btn} onClick={props.onClick}>
    {props.children}
  </button>
);

export default ButtonItem;
