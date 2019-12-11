import React, { useState } from "react";

import "../form.scss";

export default function input(props) {
  const [placeholder, setPlaceholder] = useState(
    [{ userName: "username" }, { email: "email" }, { password: "password" }],
    []
  );

  return (
    <div>
      <input
        className="form__input"
        type="text"
        placeholder={`${props.children}`}
        id="username"
      />
    </div>
  );
}
