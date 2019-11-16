import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostListCardVote({ voteScore }) {
  return (
    <div className="postlistcard-vote-container">
      <div className="postlistcard-vote">
        <FontAwesomeIcon
          icon="arrow-up"
          className="postlistcard-vote-up"
          onClick={() => console.log("upVote")}
        />
        <span className="postlistcard-vote-text">{voteScore}</span>
        <FontAwesomeIcon
          icon="arrow-down"
          className="postlistcard-vote-down"
          onClick={() => console.log("downVote")}
        />
      </div>
    </div>
  );
}
