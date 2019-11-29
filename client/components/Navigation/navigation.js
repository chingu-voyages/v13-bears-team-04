import React from "react";
import "./navigation.scss";
import Button from "../Button/button";

const Nav = () => (
  <nav className="row">
    <div>
      <ul className="mainnav">
        <li className="navitem">
          <a>
            <img></img>
          </a>
        </li>
        <li className="navitem">
          <select>
            <option value="filter">
              <input value="Filter" type="text" />
            </option>
            <option value="popular"></option>
            <option value="all"></option>
            <option value="topCommmunities"></option>
            <option value="coins"></option>
            <option value="premium"></option>
          </select>
        </li>
        <li className="navitem">
          <input type="text" value="Search Reddit" name="searchReddit" />
        </li>
        <li className="navitem">
          <button>Popular</button>
        </li>
        <li className="navitem">
          <button>All</button>
        </li>
        <div className="col-4-of-4">
          <li className="navitem">
            <Button color="blue">Login</Button>
          </li>
        </div>
        <div className="col-4-of-4">
          <li className="navitem">
            <Button color="blue" inverted={false}>
              Sign Up
            </Button>
          </li>
        </div>
        <li className="navitem">
          <select>
            <option>Icon</option>
            <option>Night Mode</option>
            <option>Reddit Coins</option>
            <option>Reddit Premium</option>
            <option>Help Center</option>
            <option>Log In/Sign Up</option>
          </select>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
