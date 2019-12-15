import React from "react";

const Input = props => {
  const { value, handleChange, type, label, minLength, maxLength } = props;
  const randNum = Math.round(Math.random() * 1000);

  return (
    <div className="form__container form__wrapper__input">
      <input
        id={`form__placeholder-${randNum}`}
        className="form__input"
        type={type}
        value={value}
        onChange={handleChange}
        minLength={minLength}
        maxLength={maxLength}
        placeholder=""
        pattern="\S+.*"
        autoComplete="on"
        required
      />
      <label
        className="form__placeholder"
        htmlFor={`form__placeholder-${randNum}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
