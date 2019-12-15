import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormRedditIcon from "./authformredditicon";

export default function SignIn() {
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
      <div className="form__wrapper__link">
        <a href="#" className="form__wrapper__link--username">
          Forgot username
        </a>
        <a href="#" className="form__wrapper__link--password">
          Forgot password
        </a>
      </div>
      <div className="form__wrapper__info">
        <p>
          New to Reddit? <span>SIGNUP</span>
        </p>
      </div>
    </div>
  );
}
