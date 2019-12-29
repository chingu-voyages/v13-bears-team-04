import React, { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const addStyles = backgroundColor => ({
  backgroundColor,
  color: "white",
  fill: "white",
});

const SubmitFormBodyActionsTagsBtn = ({
  icon,
  text,
  backgroundColor,
  dropdown,
  disabled,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleIsChecked = () => setIsChecked(state => !disabled && !state);

  const cx = "submit__form__body__actions__tag";
  const className = clsx(cx, disabled && `${cx}--disabled`);
  const styles = isChecked && !dropdown ? addStyles(backgroundColor) : {};

  return (
    <div
      className={className}
      style={styles}
      role="button"
      tabIndex="0"
      onClick={toggleIsChecked}
      onKeyPress={toggleIsChecked}
    >
      <FontAwesomeIcon icon={isChecked ? "check" : icon} />
      {text}
      {dropdown && <FontAwesomeIcon icon="caret-down" />}
    </div>
  );
};

export default SubmitFormBodyActionsTagsBtn;
