import React, { useState } from "react";

import Button from "../Button";
import Input from "./Input";
// import formatTemplate from "./FormTemplate";

import "./form.scss";

export default function forgotusername() {
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
        <h2>Recover your username</h2>
        <p className="sub-description">
          Don't worry! You may have forgotten your username, but we can help you
          out. Enter your email address below and we'll email you your username.
        </p>
        <Input>Email</Input>
        <div className="form__wrapper__button">
          <Button color="blue" inverted={false}>
            Email me
          </Button>
        </div>
        <div className="form__wrapper__info u-margin-top-medium">
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
    </div>
  );
}
