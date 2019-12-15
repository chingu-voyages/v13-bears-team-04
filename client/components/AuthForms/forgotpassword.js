import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormRedditIcon from "./authformredditicon";
import { useAuthPopup } from "../../contexts/authpopup";
import AuthFormLink from "./authformlink";

export default function ForgotPassword() {
  const { setAuthPopup } = useAuthPopup();

  return (
    <div className="form__wrapper">
      <AuthFormRedditIcon cx="form__wrapper__icon" />
      <h2>Reset your password</h2>
      <p className="sub-description">
        Don't worry! You may have forgotten your password, but we can help you
        out. Enter your username below and we'll email you a link to reset your
        password.
      </p>
      <Input>Username</Input>
      <Input>Email</Input>
      <Button
        text="Email Me"
        handleClick={() => console.log("emailed you")}
        cx="form__wrapper__button"
      />
      <div className="form__wrapper__info">
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "forgotusername"])}
          text="Forgot Username"
          cx="form__wrapper__link"
        />
      </div>
      <div className="form__wrapper__info">
        <p>
          If you are having trouble accessing your account, follow this{" "}
          <span>link</span>.
        </p>
      </div>
      <div className="form__wrapper__links">
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "signin"])}
          text="Log in"
          cx="form__wrapper__link"
        />
        <span className="form__wrapper__middot">&middot;</span>
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "signup"])}
          text="Sign up"
          cx="form__wrapper__link"
        />
      </div>
    </div>
  );
}
