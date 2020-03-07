import React from "react";
import Votes from "../../../../components/Votes";
import Button from "../../../../components/Button";

type Props = {
  vote: "upvoted" | "downvoted" | "";
  votes: string[];
  title: string;
  communityName: string;
};

export default function PostBanner({
  vote,
  votes,
  title,
  communityName,
}: Props): JSX.Element {
  return (
    <div className="viewpost__banner">
      <Votes
        isHorizontal
        vote={vote}
        votes={votes}
        cxInner="viewpost__banner__votes"
      />
      <h2 className="viewpost__banner__title">{title}</h2>
      <Button
        text="Close"
        icon="times"
        size="tight"
        href={`/r/${communityName}`}
        cx="viewpost__banner__closebtn"
      />
    </div>
  );
}
