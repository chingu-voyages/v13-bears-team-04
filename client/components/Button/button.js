import React from "react";
import "./button.scss";

export default function button(props) {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <div
      /* eslint-disable-next-line react/destructuring-assignment */
      className={`btn btn--${props.color} btn--${props.color}--${
        // eslint-disable-next-line react/destructuring-assignment
        props.inverted === false ? "inverse" : "reverse"
      }`}
    >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </div>
  );
}
