import React from "react";
import "./button.scss";

export default function button(props) {
  return (
    <div>
      {/* eslint-disable-next-line react/button-has-type,jsx-a11y/anchor-is-valid,react/destructuring-assignment */}
      <a href="#" className={`btn btn--${props.color} btn--${props.length}`}>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {props.message}
      </a>
    </div>
  );
}
