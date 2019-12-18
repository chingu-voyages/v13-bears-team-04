import React, { useState } from "react";
import Button from "../Button";
import Input from "./input";
import AuthFormLink from "./authformlink";
import { useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";

export default function SignUp() {
  const { setAuthPopup } = useAuthPopup();
  const { signup } = useUser();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const message = await signup({ email, username, password });
    console.log(message);
    setAuthPopup("");
  }

  return (
    <div className="form__wrapper">
      <h2>
        By having a Reddit account, you can join, vote, and comment on all your
        favorite Reddit content.
      </h2>

      <form action="#" onSubmit={handleSubmit}>
        <Input
          label="Email"
          value={email}
          handleChange={e => setEmail(e.target.value)}
          type="email"
        />
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
          text="Sign Up"
          handleClick={() => console.log("processing...")}
          cx="form__wrapper__button"
        />
      </form>

      <div className="form__wrapper__links">
        <p>
          Already a Redditor?{" "}
          <AuthFormLink
            handleClick={() => setAuthPopup("signin")}
            text=" Log in"
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
