import React from "react";

const Nav = () => (
  <nav>
    <div>
      <ul>
        <li>
          <a>
            <img></img>
          </a>
        </li>
        <li>
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
        <li>
          <input type="text" value="Search Reddit" name="searchReddit" />
        </li>
        <li>
          <button>Popular</button>
        </li>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Login</button>
        </li>
        <li>
          <button>Sign Up</button>
        </li>
        <li>
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
)

export default Nav;
