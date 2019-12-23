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
      <p className="growing-communities__headline">Growing Communities</p>
      {subReddits.map((subReddit, index) => {
        return (
          <div key={index}>
            <div className="row">
              <div className="col-1-of-4">
                <div className="image-wrapper">
                  <img
                    className="icon"
                    src={`/growing-images/icon-${index + 1}.png`}
                    alt="icon1"
                  />
                </div>
              </div>
              <div className="col-2-of-4">
                <div className="subreddit-info">
                  <p className="growing-communities__subreddit-info__sub-info-1">
                    {subReddit.name}
                  </p>
                  <p className="growing-communities__subreddit-info__sub-info-2">
                    {`${subReddit.numOfMembers} k members`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="row">
        <div className="col-2-of-4">
          <div className="growing-communties__join-btn">
            <Button color="blue" text="View All" inverted={false}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
