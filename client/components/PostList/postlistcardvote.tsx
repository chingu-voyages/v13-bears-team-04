import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  voteScore: number;
};

export default function PostListCardVote({ voteScore }: Props): JSX.Element {
  return (
    <div className="postlist-card__vote-container">
      <div className="postlist-card__vote">
        <FontAwesomeIcon
          icon="arrow-up"
          className="postlist-card__vote__up"
          onClick={(): void => console.log("upVote")}
        />
        <span className="postlist-card__vote__text">{voteScore}</span>
        <FontAwesomeIcon
          icon="arrow-down"
          className="postlist-card__vote__down"
          onClick={(): void => console.log("downVote")}
        />
      </div>
    </div>
  );
}
