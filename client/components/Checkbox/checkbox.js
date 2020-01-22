import React from "react";
import CheckboxIcon from "./checkboxicon";

const Checkbox = ({ children, className, isChecked, handleClick, svgCx }) => (
  <div
    role="checkbox"
    className={className}
    onClick={handleClick}
    onKeyPress={handleClick}
    tabIndex={0}
    aria-checked={isChecked}
  >
    <input type="hidden" value={isChecked} />
    <CheckboxIcon isChecked={isChecked} svgCx={svgCx} />
    {children}
  </div>
);

export default Checkbox;
