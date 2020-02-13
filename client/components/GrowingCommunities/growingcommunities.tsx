import React, { useEffect, useState } from "react";
import Button from "../Button";
import { CommunityType } from "../../types/community";
import fetchIt from "../../utils/fetch";
import { LogoIcon } from "../../svgs";

export default function GrowingCommunities(): JSX.Element {
  const [isLoading, setLoader] = useState(true);
  const [communities, setCommunities] = useState<CommunityType[]>([]);

  useEffect(() => {
    async function getCommunities(): Promise<void> {
      try {
        const foundCommunities = await fetchIt("/community");
        setCommunities(foundCommunities);
      } catch (err) {
        console.log(err);
      }
      setLoader(false);
    }

    getCommunities();
  }, []);

  return (
    <div className="growing-communities">
      <div className="growing-communities__background">
        <p className="growing-communities__headline">
          Today&apos;s Top Growing Communities
        </p>
      </div>
      {isLoading
        ? "Loading..."
        : communities.map((community, index) => {
            return (
              <div key={community._id}>
                <div className="growing-communities__row">
                  <p>{index + 1}.</p>
                  <LogoIcon
                    primary={community.theme["--community-theme-main"]}
                    secondary={community.theme["--community-theme-text"]}
                    className="growing-communities__row__image"
                  />
                  <div className="growingcommunities__subreddit-info">
                    <p className="growing-communities__subreddit-info__sub-info-1">
                      {community.name}
                    </p>
                    <p className="growing-communities__subreddit-info__sub-info-2">
                      {`${community.users.members.length}k members`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

      <Button cx="growing-communities__viewall-btn" text="View All" />
    </div>
  );
}
