import React from "react";
import Link from "next/link";
import { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Option } = components;

const NavSelectOption = props => {
  const { selectProps, data } = props;
  const { icon, label, value } = data;
  const { classNamePrefix: cx } = selectProps;
  return (
    <Option {...props}>
      <Link href={value}>
        <a className={`nav__item__${cx}__option`}>
          <FontAwesomeIcon
            className={`nav__item__${cx}__option__icon`}
            icon={icon}
          />
          <h2 className={`nav__item__${cx}__option__label`}>{label}</h2>
        </a>
      </Link>
    </Option>
  );
};

export default NavSelectOption;
