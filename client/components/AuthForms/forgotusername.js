import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormRedditIcon from "./authformredditicon";
import AuthFormLink from "./authformlink";
import { useAuthPopup } from "../../contexts/authpopup";

export default function ForgotUsername() {
  const { setAuthPopup } = useAuthPopup();

  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const message = "Check your email";
    console.log(message);
    setAuthPopup("");
  }

  return (
    <div className="form__wrapper">
      <AuthFormRedditIcon cx="form__wrapper__icon" />

      <h2>Recover your username</h2>

      <p className="sub-description">
        Don't worry! You may have forgotten your username, but we can help you
        out. Enter your email address below and we'll email you your username.
      </p>

      <form action="#" onSubmit={handleSubmit}>
        <Input
          label="Email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
          type="email"
        />
        <Button
          type="submit"
          text="Email Me"
          handleClick={() => console.log("processing...")}
          cx="form__wrapper__button"
        />
      </form>

      <div className="form__wrapper__info">
        If you are having trouble accessing your account, follow this{" "}
        <span>link</span>.
      </div>

      <div className="form__wrapper__links">
        <AuthFormLink
          handleClick={() => setAuthPopup("signin")}
          text="Log in"
          cx="form__wrapper__link --capitalize"
        />
        <span className="form__wrapper__middot">&middot;</span>
        <AuthFormLink
          handleClick={() => setAuthPopup("signup")}
          text="Sign up"
          cx="form__wrapper__link --capitalize"
        />
      </div>
    </div>
  );
}
