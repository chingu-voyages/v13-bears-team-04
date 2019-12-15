import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import { useAuthPopup } from "../../contexts/authpopup";
import AuthFormLink from "./authformlink";

export default function SignUp() {
  const { setAuthPopup } = useAuthPopup();
  const [isBtnOpen, setIsBtnOpen] = useState(true);

  return (
    <div className="form__wrapper">
      <h2>
        By having a Reddit account, you can join, vote, and comment on all your
        favorite Reddit content.
      </h2>
      <Input>Email</Input>
      <Button
        text="Sign Up"
        handleClick={() => console.log("submitted")}
        cx="form__wrapper__button"
      />
      <div className="form__wrapper__links">
        <p>
          Already a Redditor?{" "}
          <AuthFormLink
            handleClick={() => setAuthPopup([true, "signin"])}
            text="Log in"
            cx="form__wrapper__link"
          />
        </p>
      </div>
      <div className="form__wrapper__info">
        <p>
          By clicking next, you agree to our <span>Terms</span> and that you
          have read our <span>Privacy Policy</span> and{" "}
          <span>Content Policy</span>.
        </p>
      </div>
    </div>
  );
}
