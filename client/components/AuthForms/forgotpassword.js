import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormRedditIcon from "./authformredditicon";

export default function ForgotPassword() {
  return (
    <div className="form__wrapper">
      <AuthFormRedditIcon cx="form__wrapper__icon" />
      <h2>Reset your password</h2>
      <p className="sub-description">
        {`Don't worry! You may have forgotten your password, but we can help you
        out. Enter your username below and we'll email you a link to reset your
        password.`}
      </p>
      <Input>Username</Input>
      <Input>Email</Input>

      <Button
        text="Email Me"
        handleClick={() => console.log("emailed you")}
        cx="form__wrapper__button"
      />
      <div className="form__wrapper__link">
        <a href="#" className="form__wrapper__link--password">
          Forgot username
        </a>
      </div>
      <div className="form__wrapper__info">
        <p>
          If you are having trouble accessing your account, follow this{" "}
          <span>link</span>.
        </p>
        <p>
          <span className="form__wrapper__info--capitalized">
            Log in &nbsp;&middot;&nbsp;
          </span>
          <span className="form__wrapper__info--capitalized">Sign up</span>
        </p>
      </div>
    </div>
  );
}
