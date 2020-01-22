import React from "react";

export default function StaticFooter() {
  return (
    <div>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__pages">
            <div>
              <ul className="footer__pages__column">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <ul className="footer__pages__column">
                <li>Advertise</li>
                <li>Blog</li>
                <li>Help</li>
              </ul>
            </div>
            <div>
              <ul className="footer__pages__column">
                <li>The Reddit App</li>
                <li>Reddit Coins</li>
                <li>Reddit Premium</li>
                <li>Reddit Gifts</li>
              </ul>
            </div>
            <div>
              <ul className="footer__pages__column">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="footer__policy">
              <li className="footer__policy__item">
                <a>Content Policy</a>
              </li>
              <li className="footer__policy__item">
                <a>Privacy Policy</a>
              </li>
              <li className="footer__policy__item">
                <a>User Agreement</a>
              </li>
              <li className="footer__policy__item">
                <a>Mod Policy</a>
              </li>
              <li className="footer__policy__item">
                2019 Reddit, Inc. All rights reserved
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
