import React from "react";

const Label = ({ text, backgroundColor, color }) => (
  <span className="label" style={{ backgroundColor, color }}>
    {text}
  </span>
);

export default Label;
