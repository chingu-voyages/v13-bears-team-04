import React, { useState } from "react";

import "../signin.scss";

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
        /* eslint-disable-next-line react/destructuring-assignment */
        placeholder={`${props.children}`}
        id="username"
      />
    </div>
  );
}
