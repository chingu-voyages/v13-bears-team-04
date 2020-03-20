import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";

import { CommunityType } from "../../types/community";
import fetchIt from "../../utils/fetch";
import { LogoIcon } from "../../svgs";

export default function TrendingCommunities() {
  const { isAuthenticated } = useUser();
  const { setAuthPopup } = useAuthPopup();
  const [communities, setCommunities] = useState<CommunityType[]>([]);

  useEffect(() => {
    const getCommunities = async () => {
      try {
        const allCommunities = await fetchIt("/community");
        setCommunities(allCommunities);
      } catch (err) {
        console.log(err);
      }
    };
    getCommunities();
  }, []);

  function handleClick(_id: string) {
    console.log(_id);
    if (!isAuthenticated) {
      setAuthPopup("signin");
    } else {
      joinCommunity(_id);
    }
  }

  async function joinCommunity(communityId: string) {
    try {
      console.log(communityId);
    } catch (err) {
      console.log("Already Signed in");
    }
  }

  return (
    <div className="trending-community u-margin-bottom-small u-margin-top-small">
      <p className="trending-community__headline">Trending communities</p>
      {communities.map(({ _id, name, theme, users }) => {
        return (
          <div key={_id}>
            <div className="trending-community__row">
              <LogoIcon
                primary={theme["--community-theme-main"]}
                secondary={theme["--community-theme-text"]}
                className="growing-communities__row__image"
              />
              <div className="trending-community__row__subreddit-info">
                <p className="trending-community__subreddit-info__sub-info-1">
                  {name}
                </p>
                <p className="trending-community__subreddit-info__sub-info-2">
                  {`${users.members.length}k members`}
                </p>
              </div>
              <Button
                cx="trending-community__join-btn"
                handleClick={() => handleClick(_id)}
                text="Join"
                size="tight"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
