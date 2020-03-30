import React, { useState, useEffect } from "react";
import TrendingCommunitiesBox from "./trendingcommunitiesbox";
import { CommunityType } from "../../types/community";
import fetchIt from "../../utils/fetch";

export default function TrendingCommunities() {
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
    // console.log(getCommunities);
  }, []);

  return (
    <div className="trending-community">
      <p className="trending-community__headline">Trending communities</p>

      <div className="trending-community__container">
        {isLoading
          ? "Loading..."
          : communities
              .slice(0, 4)
              .reverse()
              .map(community => (
                <TrendingCommunitiesBox
                  key={community._id}
                  community={community}
                />
              ))}
      </div>
    </div>
  );
}
