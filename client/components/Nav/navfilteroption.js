import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// reusable styled option
const NavFilterOption = ({ icon, label }) => (
  <>
    <FontAwesomeIcon className="nav__item__filter__option__icon" icon={icon} />
    <h2 className="nav__item__filter__option__label">{label}</h2>
  </>
);

export default NavFilterOption;
