import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";

export default function SignUp() {
  const [isBtnOpen, setIsBtnOpen] = useState(true);
  return (
    <div className="form__wrapper">
      <p>
        By having a Reddit account, you can join, vote, and comment on all your
        favorite Reddit content.
      </p>
      <Input>Email</Input>
      <Button
        text="Sign Up"
        handleClick={() => console.log("submitted")}
        cx="form__wrapper__button"
      />
      <div className="form__wrapper__info u-margin-top-small">
        <p>
          Already a Redditor?{" "}
          <span className="form__wrapper__info--capitalized">Log in</span>
        </p>
        <p>
          By clicking next, you agree to our <span>Terms</span> and that you
          have read our <span>Privacy Policy</span> and &nbsp;
          <span>Content Policy</span>.
        </p>
      </div>
    </div>
  );
}
