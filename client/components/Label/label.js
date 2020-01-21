import React from "react";
import "./label.scss";

const Label = ({ text, backgroundColor, color }) => (
  <span className="label" style={{ backgroundColor, color }}>
    {text}
  </span>
);

export default Label;
