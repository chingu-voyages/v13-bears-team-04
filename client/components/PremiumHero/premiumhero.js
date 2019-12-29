import React from "react";
import Button from "../Button/button";
import FaqDropdown from "../FaqDropdown/faqdropdown";
import StaticFooter from "../StaticFooter/staticfooter";
import "./premiumhero.scss";

export default function PremiumHero() {
  return (
    <div>
      <div className="hero">
        <div className="hero--info">
          <img
            className="hero--image"
            alt="premiumhero"
            src="/premium/premium.svg"
          ></img>
          <p>
            Reddit Premium gives you an ad-free experience, special benefits,
            and directly supports Reddit. The more Reddit is user-supported, the
            freer we are to make Reddit the best it can be.
          </p>
          <Button text="Get Reddit Premium" color="orange"></Button>
        </div>
      </div>
      <div className="subsection">
        <h1 className="subsection--header">Join Reddit Premium Today</h1>
        <div className="benefits">
          <div className="benefits--info">
            <ul className="benefits--list">
              <li className="benefits--point">Ads-free experience</li>
              <li className="benefits--point">700 Coins every month</li>
            </ul>
            <img
              className="benefits--image"
              src="https://www.redditstatic.com/desktop2x/img/gold/crest-with-background.jpg"
            ></img>
            <Button text="$5.99/Month" color="orange"></Button>
            <div className="benefits--gift">
              <p>1,000 Coins Sign Up Gift</p>
            </div>
          </div>
          <div>
            <h3>Subscription automatically renews monthly</h3>
            <h3>
              <a href="#">REDEEM A GIFT CODE</a>
            </h3>
          </div>
          <div>
            <h2>Reddit Premium FAQ</h2>
          </div>
          <FaqDropdown />
        </div>
      </div>
      <StaticFooter />
    </div>
  );
}
