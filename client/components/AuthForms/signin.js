import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormRedditIcon from "./authformredditicon";
import AuthFormLink from "./authformlink";
import { useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";

export default function SignIn() {
  const { setAuthPopup } = useAuthPopup();
  const { login } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const message = await login({ username, password });
    console.log(message);
    setAuthPopup([false, ""]);
  }

  return (
    <div className="form__wrapper">
      <AuthFormRedditIcon cx="form__wrapper__icon" />

      <div className="form__wrapper__title">Sign in</div>

      <form action="#" onSubmit={handleSubmit}>
        <Input
          label="Username"
          value={username}
          handleChange={e => setUsername(e.target.value)}
          type="text"
        />
        <Input
          label="Password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          type="password"
        />
        <Button
          type="submit"
          text="Sign In"
          handleClick={() => console.log("processing...")}
          cx="form__wrapper__button"
        />
      </form>

      <div className="form__wrapper__links">
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "forgotusername"])}
          text="Forgot Username"
          cx="form__wrapper__link"
        />
        <span className="form__wrapper__middot">&middot;</span>
        <AuthFormLink
          handleClick={() => setAuthPopup([true, "forgotpassword"])}
          text="Forgot Password"
          cx="form__wrapper__link"
        />
      </div>

      <div className="form__wrapper__info">
        <p>
          New to Reddit?{" "}
          <AuthFormLink
            handleClick={() => setAuthPopup([true, "signup"])}
            text="Signup"
            cx="form__wrapper__link"
          />
        </p>
      </div>
    </div>
  );
}
