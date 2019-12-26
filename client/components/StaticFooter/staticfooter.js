import React from "react";
import "./staticfooter.scss";

export default function StaticFooter() {
  return (
    <div>
      <div className="footer--container">
        <div className="footer--links">
          <div className="footer--pages">
            <div>
              <ul className="pages--column">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <ul className="pages--column">
                <li>Advertise</li>
                <li>Blog</li>
                <li>Help</li>
              </ul>
            </div>
            <div>
              <ul className="pages--column">
                <li>The Reddit App</li>
                <li>Reddit Coins</li>
                <li>Reddit Premium</li>
                <li>Reddit Gifts</li>
              </ul>
            </div>
            <div>
              <ul className="pages--column">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="footer--policy">
              <li className="footer--policy--item">
                <a>Content Policy</a>
              </li>
              <li className="footer--policy--item">
                <a>Privacy Policy</a>
              </li>
              <li className="footer--policy--item">
                <a>User Agreement</a>
              </li>
              <li className="footer--policy--item">
                <a>Mod Policy</a>
              </li>
              <li className="footer--policy--item">
                2019 Reddit, Inc. All rights reserved
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
