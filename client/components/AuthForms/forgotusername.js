import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormRedditIcon from "./authformredditicon";
import AuthFormLink from "./authformlink";
import { useAuthPopup } from "../../contexts/authpopup";

export default function ForgotUsername() {
  const { setAuthPopup } = useAuthPopup();

  return (
    <div className="form__wrapper">
      <AuthFormRedditIcon cx="form__wrapper__icon" />
      <h2>Recover your username</h2>
      <p className="sub-description">
        Don't worry! You may have forgotten your username, but we can help you
        out. Enter your email address below and we'll email you your username.
      </p>
      <Input>Email</Input>
      <Button
        text="Email Me"
        handleClick={() => console.log("emailed you")}
        cx="form__wrapper__button"
      />
      <div className="form__wrapper__info">
        If you are having trouble accessing your account, follow this{" "}
        <span>link</span>.
      </div>
      <div className="form__wrapper__links">
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "signin"])}
          text="Log in"
          cx="form__wrapper__link --capitalize"
        />
        <span className="form__wrapper__middot">&middot;</span>
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "signup"])}
          text="Sign up"
          cx="form__wrapper__link --capitalize"
        />
      </div>
    </div>
  );
}
