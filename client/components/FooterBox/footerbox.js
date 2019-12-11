import React from "react";
import "./footerbox.scss";

export default function FooterBox() {
  return (
    <div className="footerboxcontainer">
      <div>
        <ul className="footerboxlist redditlist">
          <h2>Reddit</h2>
          <li>
            <a className="footerboxlink" href="#">
              About
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Careers
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Press
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Advertise
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="footerboxlist">
          <h2>Using Reddit</h2>
          <li>
            <a className="footerboxlink" href="#">
              Help
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Reddit App
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Reddit Coins
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Reddit Premium
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Reddit Gifts
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Communities
            </a>
          </li>
          <li>
            <a className="footerboxlink" href="#">
              Top Posts
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          <a className="footerboxlink" href="#">
            Terms
          </a>{" "}
          |{" "}
          <a className="footerboxlink" href="#">
            Content Policy
          </a>{" "}
          |{" "}
          <a className="footerboxlink" href="#">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a className="footerboxlink" href="#">
            Mod Policy
          </a>
        </p>
      </div>
      <div>
        <p>Definitely Not Reddit Inc &copy; 2019</p>
      </div>
    </div>
  );
}
