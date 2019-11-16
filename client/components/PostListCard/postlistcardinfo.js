import React from "react";

// temporary img placeholder until we build subreddit models
const redditImg = `https://external-preview.redd.it/QJRqGgkUjhGSdu3vfpckrvg1UKzZOqX2BbglcLhjS70.png?auto=webp&s=c681ae9c9b5021d81b6c4e3a2830f09eff2368b5`;

export default function PostListCardInfo(props) {
  const { category, author, createdOn } = props;

  return (
    <div className="postlistcard-info">
      <div className="postlistcard-info-sub">
        {/* this might hold icons in the future, so we'd want need this parent to style it */}
        <div className="postlistcard-info-sub-img">
          <img src={redditImg} alt="subreddit" />
        </div>
        {/* will need to change this to Next Link later */}
        <div className="postlistcard-info-sub-text">{`r/ ${category}`}</div>
      </div>
      <div className="postlistcard-info-user">{`Posted by u/${author}`}</div>
      <div className="postlistcard-info-date">
        {new Date(createdOn).toDateString()}
      </div>
    </div>
  );
}
