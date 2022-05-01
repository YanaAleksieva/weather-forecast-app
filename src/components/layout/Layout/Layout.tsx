import { Fragment } from "react";

import classes from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
