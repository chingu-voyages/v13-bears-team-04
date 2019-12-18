import React from "react";
import Link from "next/link";
import { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Option } = components;

const NavSelectOption = props => {
  const { selectProps, data } = props;
  const { icon, label, value, actionable } = data;
  const { classNamePrefix: cx, setAuthPopup, handleLogout } = selectProps;

  const handleClick = actionable
    ? () => (value === "logout" ? handleLogout() : setAuthPopup(value))
    : null;

  return (
    <Option {...props}>
      {actionable ? (
        <a
          role="button"
          tabIndex={0}
          className={`nav__item__${cx}__option`}
          onClick={handleClick}
          onKeyPress={handleClick}
        >
          <InnerContent icon={icon} label={label} cx={cx} />
        </a>
      ) : (
        <Link href={value}>
          <a className={`nav__item__${cx}__option`}>
            <InnerContent icon={icon} label={label} cx={cx} />
          </a>
        </Link>
      )}
    </Option>
  );
};

const InnerContent = ({ cx, icon, label }) => (
  <>
    <FontAwesomeIcon className={`nav__item__${cx}__option__icon`} icon={icon} />
    <h2 className={`nav__item__${cx}__option__label`}>{label}</h2>
  </>
);

export default NavSelectOption;
