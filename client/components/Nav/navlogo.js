import React from "react";
import Link from "next/link";

const NavLogo = () => (
  <div className="nav__item">
    <Link href="/">
      <a title="Homepage" className="nav__item__logo">
        <img
          className="nav__item__logo__icon"
          src="/nav-images/logo-icon.svg"
          alt="reddit logo icon"
        />
        <img
          className="nav__item__logo__text"
          src="/nav-images/logo-text.svg"
          alt="reddit logo text"
        />
      </a>
    </Link>
  </div>
);

export default NavLogo;
