import React, { useState } from "react";

import Button from "../Button";
import Input from "./Input";
// import formatTemplate from "./FormTemplate";

import "./signin.scss";

export default function signin() {
  const [isBtnOpen, setIsBtnOpen] = useState(true);
  return (
    <div
      className="form__popup"
      // style={`visibility: ${isBtnOpen ? "visible" : "hidden"}`}
      style={{ visibility: isBtnOpen ? "visible" : "hidden" }}
    >
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
        </form>
        <a
          href="#"
          className="form__close"
          onClick={() => setIsBtnOpen(state => !state)}
        >
          &times;
        </a>
      </div>
    </div>
  );
}
