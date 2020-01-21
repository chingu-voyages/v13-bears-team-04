import React from "react";

const AuthFormLink = ({ cx, handleClick, text }) => (
  <a
    role="button"
    className={cx}
    onKeyPress={handleClick}
    onClick={handleClick}
    tabIndex={0}
  >
    {text}
  </a>
);

export default AuthFormLink;
