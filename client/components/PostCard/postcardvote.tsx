import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  voteScore: number;
};

export default function PostCardVote({ voteScore }: Props): JSX.Element {
  return (
    <div className="postcard__vote-container">
      <div className="postcard__vote">
        <FontAwesomeIcon
          icon="arrow-up"
          className="postcard__vote__up"
          onClick={(): void => console.log("upVote")}
        />
        <span className="postcard__vote__text">{voteScore}</span>
        <FontAwesomeIcon
          icon="arrow-down"
          className="postcard__vote__down"
          onClick={(): void => console.log("downVote")}
        />
      </div>
    </div>
  );
}
