import React, { useEffect, useState } from "react";
import Button from "../Button";
import { CommunityType } from "../ViewCommunity/types";
import fetchIt from "../../utils/fetch";
import { LogoIcon } from "../../svgs";

const initialCommunity = {
  users: {
    members: [],
    moderators: [],
    administrators: [],
  },
  rules: [],
  posts: [],
  communitiesRelated: [],
  topics: [],
  theme: {
    "--community-theme-main": "",
    "--community-theme-text": "",
  },
  _id: "",
  name: "",
  description: "",
  communityType: "public",
  isOver18: false,
  createdOn: "",
  lastUpvoted: "",
};

export default function GrowingCommunities() {
  const [isLoading, setLoader] = useState(true);
  const [communities, setCommunities] = useState<CommunityType[]>([
    initialCommunity,
  ]);

  useEffect(() => {
    async function getCommunities() {
      try {
        const foundCommunities = await fetchIt("/community");
        setCommunities(foundCommunities);
      } catch (err) {
        setCommunities([]);
        console.log(err);
      }
      setLoader(false);
    }

    getCommunities();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="growing-communities">
      <div className="growing-communities__background">
        <p className="growing-communities__headline">
          Today's Top Growing Communities
        </p>
      </div>
      {communities.map((community, index) => {
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
