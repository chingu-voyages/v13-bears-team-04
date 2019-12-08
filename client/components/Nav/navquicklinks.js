import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavQuickLinks = () => {
  return (
    <div className="nav__item__quicklinks">
      <button type="button">
        <FontAwesomeIcon icon="chart-line" />
      </button>
      <button type="button">
        <FontAwesomeIcon icon="poll" />
      </button>
    </div>
  );
};

export default NavQuickLinks;
