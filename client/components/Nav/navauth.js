import React from "react";
import Button from "../Button";
import { useAuthPopup } from "../../contexts/authpopup";

export default function NavAuth() {
  const { setAuthPopup } = useAuthPopup();

  return (
    <div className="nav__item__auth">
      <Button
        cx="nav__item__auth__btn"
        handleClick={() => setAuthPopup([true, "signin"])}
        inverted
        text="log in"
      />
      <Button
        cx="nav__item__auth__btn"
        handleClick={() => setAuthPopup([true, "signup"])}
        text="sign up"
      />
    </div>
  );
}
