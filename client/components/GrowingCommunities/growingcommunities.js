import React, { useEffect, useState } from "react";
import "./growingcommunities.scss";
import Button from "../Button/button";

export default function growingcommunities() {
  const [subReddits, setGrowingSubReddit] = useState([
    { id: 1, name: "r/teslamotors", numOfMembers: 34000 },
    { id: 2, name: "r/ChoosingBeggars", numOfMembers: 30000 },
    { id: 3, name: "r/Damnthatsinteresting", numOfMembers: 27000 },
    { id: 4, name: "r/worldnews", numOfMembers: 22000 },
    { id: 5, name: "r/Futurology", numOfMembers: 19000 },
  ]);

  // const [isLoading, setLoader] = useEffect(true);

  useEffect(() => {
    // const getTrendingCommunties = async () => {
    //   const res = await fetch(`${process.env.API_URL}/trendingcommunities/test`);
    //   const data = await res.json();
    //   setTrendingSubReddit(data);
    //   setLoader(false);
    // };
    //   getTrendingCommunties();
  }, []);

  //if (isLoading) return <div>Loading...</div>;

  return (
    <div className="growing-communities">
      <p className="growing-communities__headline">
        Today's Top Growing Communities
      </p>
      {subReddits.map((subReddit, index) => {
        return (
          <div key={index}>
            <div className="growing-communities__row">
              <p>{index + 1}.</p>
              <img
                className="growing-communities__row__image"
                src={`/growing-images/icon-${index + 1}.png`}
                alt="icon1"
              />
              <div className="growingcommunities__subreddit-info">
                <p className="growing-communities__subreddit-info__sub-info-1">
                  {subReddit.name}
                </p>
                <p className="growing-communities__subreddit-info__sub-info-2">
                  {`${subReddit.numOfMembers} k members`}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <Button
        cx="growing-communities__viewall-btn"
        text="View All"
        size="large"
      />
    </div>
  );
}
