import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Radio from "../Radio";

const CreateTypeItem = ({
  handleClick,
  isChecked,
  iconName,
  iconColor,
  header,
  note,
}) => (
  <Radio
    className="subcreate__type__item"
    handleClick={handleClick}
    isChecked={isChecked}
  >
    <FontAwesomeIcon
      className="subcreate__type__item__icon"
      icon={iconName}
      color={iconColor}
    />
    <div className="subcreate__type__item__text">
      <div className="subcreate__type__item__text__header">{header}</div>
      <div className="subcreate__type__item__text__note">{note}</div>
    </div>
  </Radio>
);

export default CreateTypeItem;
