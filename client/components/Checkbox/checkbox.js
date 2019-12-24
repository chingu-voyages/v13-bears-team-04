import React from "react";
import CheckboxIcon from "./checkboxicon";
import "./checkbox.scss";

const Checkbox = ({ children, className, isChecked, handleClick }) => (
  <div
    role="checkbox"
    className={className}
    onClick={handleClick}
    onKeyPress={handleClick}
    tabIndex={0}
    aria-checked={isChecked}
  >
    <input type="hidden" value={isChecked} />
    <CheckboxIcon isChecked={isChecked} />
    {children}
  </div>
);

export default Checkbox;
