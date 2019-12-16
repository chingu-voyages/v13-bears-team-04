import React from "react";

const Input = props => {
  const { value, handleChange, type, label, minLength, maxLength } = props;

  return (
    <div className="form__field">
      <input
        id={`form__field__input--${label}`}
        className="form__field__input"
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
        htmlFor={`form__field__input--${label}`}
        className="form__field__label"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
