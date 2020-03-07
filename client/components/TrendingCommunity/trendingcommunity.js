import React, { useState } from "react";
import { useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";
import Button from "../Button";

export default function trendingcommunity() {
  const { isAuthenticated } = useUser();
  const { setAuthPopup } = useAuthPopup();

  const [subReddits, setTrendingSubReddit] = useState([
    { id: 1, name: "r/climate-change", numOfMembers: 27000, hasJoined: false },
    { id: 2, name: "r/fashion", numOfMembers: 56000, hasJoined: false },
    { id: 3, name: "r/social", numOfMembers: 75000, hasJoined: false },
    { id: 4, name: "r/politics", numOfMembers: 50000, hasJoined: false },
    { id: 5, name: "r/travel", numOfMembers: 20000, hasJoined: false },
  ]);

  function handleClick() {
    console.log("Delete Me:", setTrendingSubReddit);
    if (!isAuthenticated) {
      setAuthPopup("signin");
    } else {
      console.log("Already Signed in");
    }
  }

  return (
    <div className="trending-community u-margin-bottom-small u-margin-top-small">
      <p className="trending-community__headline">Trending communities</p>
      {subReddits.map((subReddit, index) => {
        return (
          // CHANGE THIS KEY TO SOMETHING OTHER THAN INDEX IN THE FUTURE
          <div key={`r/${subReddit}`}>
            <div className="trending-community__row">
              <img
                className="trending-community__row__image"
                src={`/trending-images/icon-${index + 1}.jpg`}
                alt="photo1"
              />
              <div className="trending-community__row__subreddit-info">
                <p className="trending-community__subreddit-info__sub-info-1">
                  {subReddit.name}
                </p>
                <p className="trending-community__subreddit-info__sub-info-2">
                  {`${subReddit.numOfMembers} k members`}
                </p>
              </div>
              <Button
                cx="trending-community__join-btn"
                text="Join"
                size="normal"
                handleClick={() => handleClick()}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
