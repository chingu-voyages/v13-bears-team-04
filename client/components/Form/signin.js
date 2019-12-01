import React from "react";

import Button from "../Button";
import Input from "./Input";

import "./signin.scss";

export default function signin() {
  return (
    <div className="form__popup">
      <div className="form__content">
        <form action="#" className="form__main">
          <div className="form__left" />
          <div className="form__right">
            <div className="form__wrapper">
              <div className="form__wrapper__icon">
                <img
                  src="/static/reddit_icon.png"
                  alt="reddit_sub_icon"
                  className="reddit-icon"
                />
              </div>
              <div className="form__wrapper__title">Sign in</div>
              <div className="form__wrapper__input">
                <Input>Username</Input>
              </div>
              <div className="form__wrapper__input">
                <Input>Password</Input>
              </div>

              <div className="form__wrapper__button">
                <Button color="blue" inverted={false}>
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </form>
        <a href="#" className="form__close">
          &times;
        </a>
      </div>
    </div>
  );
}
