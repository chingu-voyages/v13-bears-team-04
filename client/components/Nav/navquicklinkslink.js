import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavQuickLinksLink = ({ href, title, icon, color }) => (
  <Link href={href}>
    <a title={title} className="nav__item__quicklinks__link">
      <FontAwesomeIcon
        className="nav__item__quicklinks__link__icon"
        icon={icon}
        color={color}
      />
    </a>
  </Link>
);

export default NavQuickLinksLink;
