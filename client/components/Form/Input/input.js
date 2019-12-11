import React, { useState } from "react";

import "../form.scss";

export default function input(props) {
  const [placeholder, setPlaceholder] = useState(
    [{ userName: "username" }, { email: "email" }, { password: "password" }],
    []
  );

  return (
    <div className="form__container">
      <input
        className="form__input"
        type="text"
        placeholder=""
        id="form__placeholder"
        required
        pattern="\S+.*"
      />
      <label className="form__placeholder" htmlFor="form__placeholder">
        {props.children}
      </label>
    </div>
  );
}
