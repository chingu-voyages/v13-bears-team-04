import React from "react";
import FAIcon from "../FAIcon";

interface Props {
  icon: string;
  text: string;
}

const ButtonWithIcon: React.FC<Props> = ({ icon, text }) => (
  <>
    <FAIcon className="btn--icon" icon={icon} />
    {text}
  </>
);

export default ButtonWithIcon;
