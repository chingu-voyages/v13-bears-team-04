import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// reusable styled option
export default function SortFilterOption({ icon, label }) {
  return (
    <>
      <FontAwesomeIcon className="sortview__filter__option__icon" icon={icon} />
      <h2 className="sortview__filter__option__label">{label}</h2>
    </>
  );
}
