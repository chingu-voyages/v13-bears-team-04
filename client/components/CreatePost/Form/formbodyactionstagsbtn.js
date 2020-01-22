import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCreatePost } from "../../../contexts/createpost";

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
  const { state, createPostDispatch } = useCreatePost();
  const isChecked = state[value];

  const toggleIsChecked = () => {
    if (disabled) return;
    createPostDispatch({ type: "TOGGLE_EXTRA", name: value });
  };

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
