import React from "react";
import clsx from "clsx";

const LayoutColumn = ({ children, cx, styles }) => {
  const className = clsx(`layout__column`, cx);
  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
};

export default LayoutColumn;
