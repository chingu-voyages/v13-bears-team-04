import React from "react";
import Link from "next/link";
import { LogoIcon, LogoText } from "../../svgs";

const NavLogo = () => (
  <div className="nav__item">
    <Link href="/">
      <a title="Homepage" className="nav__item__logo">
        <LogoIcon className="nav__item__logo__icon" />
        <LogoText className="nav__item__logo__text" />
      </a>
    </Link>
  </div>
);

export default NavLogo;
