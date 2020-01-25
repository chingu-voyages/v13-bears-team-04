import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: string;
  className?: string;
  color?: string;
  onClick?: () => void;
}

const FAIcon: React.FC<Props> = ({ icon, className, color, onClick }) => (
  <FontAwesomeIcon
    icon={icon as IconName}
    className={className}
    color={color}
    onClick={onClick}
  />
);

export default FAIcon;
