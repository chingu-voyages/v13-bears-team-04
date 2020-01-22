import React from "react";
import RadioIcon from "./radioicon";

const Radio = ({ children, className, isChecked, handleClick, svgCx }) => (
  <div
    role="radio"
    className={className}
    onClick={handleClick}
    onKeyPress={handleClick}
    tabIndex={isChecked ? 0 : -1}
    aria-checked={isChecked}
  >
    <RadioIcon isChecked={isChecked} svgCx={svgCx} />
    {children}
  </div>
);

export default Radio;
