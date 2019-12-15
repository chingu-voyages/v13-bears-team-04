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
    </div>
  );
}
