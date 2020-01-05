import React, { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCreatePost } from "../../contexts/createpost";
import Button from "../../components/Button";

const addStyles = backgroundColor => ({
  backgroundColor,
  color: "white",
  fill: "white",
});

const SubmitFormBodyActionsTagsBtn = ({
  icon,
  text,
  value,
  backgroundColor,
  dropdown,
  disabled,
}) => {
  const state = useCreatePost();
  // console.log(state[value]);
  const isChecked = state[value];
  const { dispatch } = state;

  // console.log(isChecked);

  // const [isChecked, setIsChecked] = useState(false);
  // const toggleIsChecked = () => setIsChecked(state => !disabled && !state);
  const toggleIsChecked = () => dispatch({ type: "TOGGLE", name: value });

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
