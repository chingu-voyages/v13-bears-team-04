import React from "react";
// import Button from "../Button";
import NavLogo from "./navlogo";
import NavFilter from "./navfilter";
import NavSearch from "./navsearch";
import NavQuickLinks from "./navquicklinks";
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
      {/* <div className="popularbtn">
        <li className="navitem">
          <button>Popular</button>
        </li>
      </div>
      <div className="allbtn">
        <li className="navitem">
          <button>All</button>
        </li>
      </div>
      <div className="navbtn">
        <li className="navitem">
          <Button color="blue">Login</Button>
        </li>
      </div>
      <div className="navbtn">
        <li className="navitem">
          <Button color="blue" inverted={false}>
            Sign Up
          </Button>
        </li>
      </div>
      <div>
        <li className="navitem">
          <select className="dropdownmenu">
            <option>Icon</option>
            <option>Night Mode</option>
            <option>Reddit Coins</option>
            <option>Reddit Premium</option>
            <option>Help Center</option>
            <option>Log In/Sign Up</option>
          </select>
        </li>
      </div> */}
    </nav>
  );
}
