import React, { useState, useEffect } from "react";
import Link from "next/link";

import Button from "../Button";
import { useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";

import { CommunityType } from "../../types/community";
import fetchIt from "../../utils/fetch";
import { LogoIcon } from "../../svgs";

export default function TrendingCommunities() {
  const { isAuthenticated } = useUser();
  const { setAuthPopup } = useAuthPopup();

  const [isLoading, setLoader] = useState(true);
  const [communities, setCommunities] = useState<CommunityType[]>([]);

  useEffect(() => {
    const getCommunities = async () => {
      try {
        const allCommunities = await fetchIt("/community");
        setCommunities(allCommunities);
      } catch (err) {
        console.log(err);
      }
      setLoader(false);
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
    <div className="trending-community">
      <p className="trending-community__headline">Trending communities</p>

      <div className="trending-community__container">
        {isLoading
          ? "Loading..."
          : communities.map(({ _id, name, theme, users }) => {
              return (
                <div key={_id} className="trending-community__row">
                  <div className="trending-community__row__info">
                    <LogoIcon
                      primary={theme["--community-theme-main"]}
                      secondary={theme["--community-theme-text"]}
                      className="trending-community__row__info__image"
                    />

                    <div className="trending-community__row__info__text">
                      <Link href={`/r/${name}`}>
                        <a>r/{name}</a>
                      </Link>
                      <p>{`${users.members.length}k members`}</p>
                    </div>
                  </div>

                  <Button
                    cx="trending-community__join-btn"
                    handleClick={() => handleClick(_id)}
                    text="Join"
                    size="tight"
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}
