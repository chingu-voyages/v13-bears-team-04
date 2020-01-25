import React, { useEffect, useState } from "react";

import "../../sass/components/_subredditinfo.scss";
import Button from "../Button/button";

export default function SubredditInfo() {
  const [info] = useState({
    name: "todayilearned",
    numOnline: 2000,
    numOfMembers: 40000,
    cakeDay: "Dec 28, 2008",
    description: `You learn something new every day; what did
        you learn today? Submit interesting and specific facts that
        you just found out here.`,
  });

  return (
    <div>
      <div className="subredditinfo__container">
        <div className="subredditinfo__header">
          <img
            className="subredditinfo__icon"
            src="https://b.thumbs.redditmedia.com/B7IpR8P1mEsQIjdizK5x79s5aGfJUtKk3u2ksGZ9n2Q.png"
          ></img>
          <h1 className="subredditinfo__headertext">{info.name}</h1>
        </div>
        <div className="subredditinfo__members">
          <h2>
            {info.numOnline} members {info.numOfMembers} online
          </h2>
          <div className="subredditinfo__cakeday">
            <h2>{info.cakeDay}</h2>
          </div>
        </div>
        <div>
          <p className="subredditinfo__description">{info.description}</p>
        </div>
        <div>
          <Button cx="subredditinfo__joinbtn" text="Join" />
        </div>
      </div>
    </div>
  );
}
