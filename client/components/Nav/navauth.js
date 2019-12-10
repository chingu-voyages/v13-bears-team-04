import React from "react";
import Button from "../Button";

const NavAuth = () => (
  <div className="nav__item__auth">
    <Button cx="nav__item__auth__btn" inverted text="log in" />
    <Button cx="nav__item__auth__btn" text="sign up" />
  </div>
);

export default NavAuth;
