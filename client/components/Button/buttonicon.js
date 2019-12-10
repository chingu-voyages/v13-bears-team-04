import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = ({ icon, text }) => (
  <>
    <FontAwesomeIcon className="btn--icon" icon={icon} />
    {text}
  </>
);

export default ButtonIcon;
