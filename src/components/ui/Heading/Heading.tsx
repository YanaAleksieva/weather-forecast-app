import React from "react";

import classes from "./Heading.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

const Header = (props: HeadingProps) => (
  <header className={classes.header}>{props.children}</header>
);

export default Header;
