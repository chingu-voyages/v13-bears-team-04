import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormRedditIcon from "./authformredditicon";
import AuthFormLink from "./authformlink";
import { useAuthPopup } from "../../contexts/authpopup";

export default function SignIn() {
  const { setAuthPopup } = useAuthPopup();

  return (
    <div className="form__wrapper">
      <AuthFormRedditIcon cx="form__wrapper__icon" />
      <div className="form__wrapper__title">Sign in</div>
      <Input>Username</Input>
      <Input>Password</Input>
      <Button
        text="Sign In"
        handleClick={() => console.log("submitted")}
        cx="form__wrapper__button"
      />
      <div className="form__wrapper__links">
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "forgotusername"])}
          text="Forgot Username"
          cx="form__wrapper__link"
        />
        <span className="form__wrapper__middot">&middot;</span>
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "forgotpassword"])}
          text="Forgot Password"
          cx="form__wrapper__link"
        />
      </div>
      <div className="form__wrapper__info">
        <p>
          New to Reddit?{" "}
          <AuthFormLink
            handleClick={() => setAuthPopup([true, "signup"])}
            text="Signup"
            cx="form__wrapper__link"
          />
        </p>
      </div>
    </div>
  );
}
