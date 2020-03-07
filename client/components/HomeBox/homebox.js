import React from "react";
import Button from "../Button";
import { useUser } from "../../contexts/user";

export default function HomeBox() {
  const { isAuthenticated } = useUser();

  if (!isAuthenticated) return null;

  return (
    <div className="homebox-container">
      <img
        src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"
        alt="home-banner"
        className="homebox__banner"
      />
      <div className="homebox__content">
        <div className="homebox__heading">
          <img
            src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png"
            alt="home-alien"
          />
          <span>Home</span>
        </div>
        <p>
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </p>
        <Button href="/submit" cx="homebox__btn" text="Create Post" />
        <Button
          inverted
          href="/subreddits/create"
          cx="homebox__btn"
          text="Create Community"
        />
      </div>
    </div>
  );
}
