import React, { useState } from "react";

import Button from "../Button";
import Input from "./Input";

import "./signin.scss";

export default function signin() {
  const [btnState, setBtnState] = useState([{ isOpen: false }], []);

  function ctrlBtn() {
    if (btnState.isOpen === true) {
      setBtnState({ isOpen: false });
      document.querySelector(".form__popup").style["visibility"] = "visible";
    } else {
      setBtnState({ isOpen: true });
      document.querySelector(".form__popup").style["visibility"] = "hidden";
    }
  }

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
        <a href="#" className="form__close" onClick={() => ctrlBtn()}>
          &times;
        </a>
      </div>
    </div>
  );
}
