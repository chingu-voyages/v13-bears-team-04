import React from "react";
import NavLogo from "./navlogo";
import NavFilter from "./navfilter";
import NavSearch from "./navsearch";
import NavQuickLinks from "./navquicklinks";
import NavAuth from "./navauth";
import NavDrop from "./navdrop";
// import { useAuth } from "../../utils/authcontext";
import "./nav.scss";

export default function Nav() {
  // const { user, login, logout, signup } = useAuth();

  return (
    <nav className="nav-container">
      <NavLogo />
      <NavFilter />
      <NavSearch />
      <NavQuickLinks />
      <NavAuth />
      <NavDrop />
    </nav>
  );
}
