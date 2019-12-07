import React from "react";
import "./navigation.scss";
import Button from "../Button/button";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => (
  <div>
    <nav>
      <ul className="navcontainer">
        <div>
          <li className="navitem">
            <a>
              <img className="logo" src={`/nav-images/mobile-logo.png`} />
            </a>
          </li>
        </div>
        <div className="searchfilter searchFilter">
          <li className="navitem">
            <select class="filterbox">
              <option value="filter">
                <input value="Filter" type="text" />
              </option>
              <option value="popular">Popular</option>
              <option value="all">All</option>
              <option value="topCommmunities">Top Communities</option>
              <option value="coins">Coins</option>
              <option value="premium">Premium</option>
            </select>
          </li>
        </div>
        <div className="searchbarcontainer">
          <li className="navitem">
            <input
              className="searchbar"
              type="text"
              value="Search Reddit"
              name="searchReddit"
            />
          </li>
        </div>
        <div className="popularbtn">
          <li className="navitem">
            <button>Popular</button>
          </li>
        </div>
        <div className="allbtn">
          <li className="navitem">
            <button>All</button>
          </li>
        </div>
        <div class="navbtn">
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
        </div>
      </ul>
    </nav>
  </div>
);

export default Nav;
