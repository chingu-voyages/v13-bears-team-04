import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Radio from "../../../components/Radio";

const CreateTypeItem = ({ isChecked, iconName, iconColor, header, note }) => (
  <div className="subcreate__type__item">
    <Radio isChecked={isChecked} />
    <FontAwesomeIcon
      className="subcreate__type__item__icon"
      icon={iconName}
      color={iconColor}
    />
    <div className="subcreate__type__item__text">
      <div className="subcreate__type__item__text__header">{header}</div>
      <div className="subcreate__type__item__text__note">{note}</div>
    </div>
  </div>
);

export default CreateTypeItem;
