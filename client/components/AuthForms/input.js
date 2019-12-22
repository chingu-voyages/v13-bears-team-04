import React from "react";
import clsx from "clsx";

const Input = props => {
  const {
    value,
    handleChange,
    type,
    label,
    minLength,
    maxLength,
    required,
  } = props;

  const id = `form__field__input--${label}`;
  const labelCx = clsx("form__field__label", { "required-dot": required });

  return (
    <div className="form__field">
      <input
        id={id}
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
      <label htmlFor={id} className={labelCx}>
        {label}
      </label>
    </div>
  );
};

export default Input;
