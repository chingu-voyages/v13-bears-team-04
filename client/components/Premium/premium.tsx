import React from "react";
import Button from "../Button";
import Faqs from "./premiumfaqs";
import Footer from "./premiumfooter";
import PageHead from "../PageHead";
import { Premium as PremiumSVG } from "../../svgs";

export default function Premium() {
  return (
    <div className="premium">
      <PageHead
        title="Reddit Premium"
        description="What is a Reddit Premium Membership? Reddit Premium is our 
        subscription membership program, and it directly supports Reddit and the
        communities that it hosts. It offers an entirely ads-free Reddit experience 
        as well as other benefits, including monthly Coins and access to the exclusive 
        r/lounge community."
      />
      <div className="premium__hero">
        <div className="premium__info">
          <PremiumSVG className="premium__image" />
          <p>
            Reddit Premium gives you an ad-free experience, special benefits,
            and directly supports Reddit. The more Reddit is user-supported, the
            freer we are to make Reddit the best it can be.
          </p>
          <Button text="Get Reddit Premium" color="orange" />
        </div>
      </div>
      <div className="premium__subsection">
        <h1 className="premium__subsection__header">
          Join Reddit Premium Today
        </h1>
        <div className="premium__benefits">
          <div className="premium__benefits__info">
            <ul className="premium__benefits__list">
              <li className="premium__benefits__point">Ads-free experience</li>
              <li className="premium__benefits__point">
                700 Coins every month
              </li>
            </ul>
            <img
              className="premium__benefits__image"
              src="https://www.redditstatic.com/desktop2x/img/gold/crest-with-background.jpg"
              alt="premium crest"
            />
            <Button text="$5.99/Month" color="orange" />
            <div className="premium__benefits__gift">
              <p>1,000 Coins Sign Up Gift</p>
            </div>
          </div>
          <div>
            <h3>Subscription automatically renews monthly</h3>
            <h3>
              <a>REDEEM A GIFT CODE</a>
            </h3>
          </div>

          <Faqs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
