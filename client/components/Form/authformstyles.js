import React, { useState } from "react";

export default function AuthFormStyles({ children }) {
  const [isBtnOpen, toggleIsBtnOpen] = useState(true);

  return (
    <div
      className="form__popup"
      style={{ visibility: isBtnOpen ? "visible" : "hidden" }}
    >
      <div className="form__content">
        <form action="#" className="form__main">
          <div className="form__left" />
          {children}
        </form>
        <a
          href="#"
          className="form__close"
          onClick={() => toggleIsBtnOpen(state => !state)}
        >
          &times;
        </a>
      </div>
    </div>
  );
}
