import React, { useState } from "react";

import "./trendingcommunity.scss";

export default function trendingcommunity() {
  const [subReddits, setTrendingSubReddit] = useState([
    { id: 1, name: "r/number1", numOfMembers: 27000 },
    { id: 2, name: "r/number2", numOfMembers: 56000 },
    { id: 3, name: "r/number3", numOfMembers: 75000 },
    { id: 4, name: "r/number4", numOfMembers: 50000 },
    { id: 5, name: "r/number5", numOfMembers: 20000 },
  ]);
  return subReddits.map((subReddit, index) => {
    return (
      <div className="trending-community">
        <div className="row">
          <div className="col-2-of-3">
            <p>{subReddit.name}</p>
            <p>{`${subReddit.numOfMembers} k members`}</p>
          </div>
          <div className="col-1-of-3">
            {/* eslint-disable-next-line react/button-has-type */}
            <button>Join</button>
          </div>
        </div>
      </div>
    );
  });
}
