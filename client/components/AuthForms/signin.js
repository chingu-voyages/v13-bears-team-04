import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";

export default function SignIn() {
  return (
    <div className="form__right">
      <div className="form__wrapper u-margin-top-medium">
        <div className="form__wrapper__icon">
          <img
            src="/static/reddit_icon.png"
            alt="reddit_sub_icon"
            className="reddit-icon"
          />
        </div>
        <div className="form__wrapper__title">Sign in</div>
        <Input>Username</Input>
        <Input>Password</Input>

        <div className="form__wrapper__button">
          <Button color="blue" inverted={false}>
            Sign In
          </Button>
        </div>
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
    </div>
  );
}
