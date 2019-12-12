import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonWithIcon = ({ icon, text }) => (
  <>
    <FontAwesomeIcon className="btn--icon" icon={icon} />
    {text}
  </>
);

export default ButtonWithIcon;
