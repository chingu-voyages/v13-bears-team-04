import React, { useState, useEffect } from "react";

export default function reusableformstyle(props) {
  const [isBtnOpen, setIsBtnOpen] = useState(true);

  //   useEffect(() => {
  //     if (user === true) {
  //       setIsBtnOpen;
  //       false;
  //     }
  //   }, [user]);

  return (
    <div
      className="form__popup"
      style={{ visibility: isBtnOpen ? "visible" : "hidden" }}
    >
      <div className="form__content">
        <form action="#" className="form__main">
          <div className="form__left" />
          {props.children}
        </form>
        <a
          href="#"
          className="form__close"
          onClick={() => setIsBtnOpen(state => !state)}
        >
          &times;
        </a>
      </div>
    </div>
  );
}
