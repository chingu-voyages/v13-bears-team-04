import React, { useState } from "react";

import "../form.scss";

export default function input(props) {
  // const [placeholder, setPlaceholder] = useState(
  //   [{ userName: "username" }, { email: "email" }, { password: "password" }],
  //   []
  // );

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let inputType = props.children;
  let type, inputValue, randNo;

  randNo = Math.round(Math.random() * 1000);

  if (inputType.toLowerCase() === "email") {
    type = "email";
    inputValue = email;
  } else if (inputType.toLowerCase() === "username") {
    type = "text";
    inputValue = username;
  } else {
    type = "password";
    inputValue = password;
  }

  return (
    <div className="form__container form__wrapper__input">
      <input
        className="form__input"
        type={type}
        placeholder=""
        id={`form__placeholder-${randNo}`}
        required
        pattern="\S+.*"
        // value={inputValue}
        autocomplete="on"
      />
      <label
        className="form__placeholder"
        htmlFor={`form__placeholder-${randNo}`}
      >
        {props.children}
      </label>
    </div>
  );
}
