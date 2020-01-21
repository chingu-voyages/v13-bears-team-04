import React from "react";
import "./footerbox.scss";

export default function FooterBox() {
  return (
    <div className="footerbox">
      <div>
        <ul className="footerbox__list">
          <li>
            <a className="footerbox__link" href="#">
              Help
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Reddit App
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Reddit Coins
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Reddit Premium
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Reddit Gifts
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Communities
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Top Posts
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Topics
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="footerbox__list">
          <li>
            <a className="footerbox__link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Careers
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Press
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Advertise
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Terms
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Content Policy
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="footerbox__link" href="#">
              Mod Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="footerbox__copyright">
        <p>Definitely Not Reddit Inc &copy; 2020</p>
      </div>
    </div>
  );
}
