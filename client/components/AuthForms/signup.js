import React, { useState } from "react";

import Button from "../Button";
import Input from "./Input";

export default function signup() {
  const [isBtnOpen, setIsBtnOpen] = useState(true);
  return (
    <div className="form__right">
      <div className="form__wrapper u-margin-top-large">
        <p>
          By having a Reddit account, you can join, vote, and comment on all
          your favorite Reddit content.
        </p>
        <Input>Email</Input>
        <div className="form__wrapper__button">
          <Button color="blue" inverted={false}>
            Sign up
          </Button>
        </div>
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
    </div>
  );
}
