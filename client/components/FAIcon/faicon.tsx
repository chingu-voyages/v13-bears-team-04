import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: string;
  className?: string;
  color?: string;
}

const FAIcon: React.FC<Props> = ({ icon, className, color }) => (
  <FontAwesomeIcon
    icon={icon as IconName}
    className={className}
    color={color}
  />
);

export default FAIcon;
