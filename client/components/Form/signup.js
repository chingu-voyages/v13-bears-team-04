import React, { useState } from "react";

import Button from "../Button";
import Input from "./Input";
// import formatTemplate from "./FormTemplate";

import "./signin.scss";

export default function signup() {
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
              <p>
                By having a Reddit account, you can join, vote, and comment on
                all your favorite Reddit content.
              </p>
              <div className="form__wrapper__input">
                <Input>Email</Input>
              </div>
              <div className="form__wrapper__button">
                <Button color="blue" inverted={false}>
                  Sign up
                </Button>
              </div>
              <div className="form__wrapper__info u-margin-top-medium">
                <p>
                  Already a Redditor?{" "}
                  <span className="form__wrapper__info--capitalized">
                    Log in
                  </span>
                </p>
                <p>
                  By clicking next, you agree to our <span>Terms</span> and that
                  you have read our <span>Privacy Policy</span> and
                  <span>Content Policy</span>.
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
