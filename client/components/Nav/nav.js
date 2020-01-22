import React from "react";
import NavLogo from "./navlogo";
import NavFilter from "./navfilter";
import NavSearch from "./navsearch";
import NavQuickLinks from "./navquicklinks";
import NavAuth from "./navauth";
import NavDrop from "./navdrop";
// import { useUser } from "../../contexts/user";

export default function Nav() {
  // const { user, login, logout, signup } = useUser();

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
