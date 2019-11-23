import React from "react";
import "./button.scss";

export default function button(props) {
  return (
    <div>
      {/* eslint-disable-next-line react/destructuring-assignment,jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        /* eslint-disable-next-line react/destructuring-assignment,jsx-a11y/anchor-is-valid */
        className={`btn btn--${props.color} btn--${props.color}--${
          // eslint-disable-next-line react/destructuring-assignment
          props.inverted === false ? "inverse" : "reverse"
        }`}
      >
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {props.children}
      </a>
    </div>
  );
}
