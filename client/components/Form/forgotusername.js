import React, { useState } from "react";

import Button from "../Button";
import Input from "./Input";
// import formatTemplate from "./FormTemplate";

import "./signin.scss";

export default function forgotusername() {
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
            <div className="form__wrapper u-margin-top-medium">
              <div className="form__wrapper__icon">
                <img
                  src="/static/reddit_icon.png"
                  alt="reddit_sub_icon"
                  className="reddit-icon"
                />
              </div>
              <p>Recover your username</p>
              <p className="sub-description">
                Don't worry! You may have forgotten your username, but we can
                help you out. Enter your email address below and we'll email you
                your username.
              </p>
              <div className="form__wrapper__input">
                <Input>Email</Input>
              </div>
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
                  <span className="form__wrapper__info--capitalized">
                    Sign up
                  </span>
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
