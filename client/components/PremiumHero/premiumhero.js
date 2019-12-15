import React from "react";
import Button from "../Button/button";
import "./premiumhero.scss";

export default function PremiumHero() {
  return (
    <div>
      <div className="hero">
        <div className="hero--info">
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
            <Button text="$5.99/Month" color="orange"></Button>
            <div className="benefits--gift">
              <p>1,000 Coins Sign Up Gift</p>
            </div>
            <div className="benefits--image"></div>
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
          <div>
            <div>
              <h3>What is a Reddit Premium Membership?</h3>
            </div>
            <div>
              <h3>
                Why change the name to Premium? What happened to calling it
                Gold?
              </h3>
            </div>
            <div>
              <h3>
                What if I was subscribed to the old Gold Membership Program?
              </h3>
            </div>
            <div>
              <h3>
                The Premium membership gives me Coins, what are those for?
              </h3>
            </div>
            <div>
              <h3>Do I have to subscribe to Reddit Premium to get Coins?</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
