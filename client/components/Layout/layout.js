import React from "react";
import clsx from "clsx";
import LayoutColumn from "./layoutcolumn";
import "./layout.scss";

const Layout = ({ children, cx, styles }) => {
  if (process.env.NODE_ENV === "development") {
    // check if there's more than two children
    if (children.length !== 2) {
      const msg = "'Layout' must only contain two 'Layout.Column' components";
      throw new Error(msg);
    }

    // get the name of the incorrectly placed child, if there is one
    const name = children
      .map(child => child.type.name)
      .filter(childName => childName !== "LayoutColumn")[0];
    // name will be undefined, if both children are ...
    // ... 'Layout.Column' like they should be
    if (name) {
      const msg = `'${name}' must be wrapped with a 'Layout.Column' component`;
      throw new Error(msg);
    }
  }

  // make a className and return the component
  const className = clsx("layout__container", cx);
  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
};

Layout.Column = LayoutColumn;

export default Layout;
