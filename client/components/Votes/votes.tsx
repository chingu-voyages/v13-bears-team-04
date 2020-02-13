import React from "react";
import clsx from "clsx";
import FAIcon from "../FAIcon";
import shrinkNum from "../../utils/shrinknum";

type Props = {
  voteScore: number;
  vote: "upvoted" | "downvoted" | "";
  isHorizontal?: boolean;
  cxContainer?: string;
  cxInner?: string;
};

export default function Votes({
  vote = "",
  isHorizontal = false,
  voteScore,
  cxContainer,
  cxInner,
}: Props): JSX.Element {
  const score = shrinkNum(voteScore);
  const flexDirection = isHorizontal ? "row" : "column";
  const colorUp = vote === "upvoted" ? "#ff6314" : "";
  const colorDown = vote === "downvoted" ? "#0079d3" : "";

  return (
    <div className={cxContainer}>
      <div className={clsx("votes", cxInner)} style={{ flexDirection }}>
        <FAIcon
          icon="arrow-up"
          className="votes__up"
          color={colorUp}
          onClick={(): void => console.log("upVote")}
        />
        <span style={{ color: colorUp || colorDown }} className="votes__text">
          {score}
        </span>
        <FAIcon
          icon="arrow-down"
          className="votes__down"
          color={colorDown}
          onClick={(): void => console.log("downVote")}
        />
      </div>
    </div>
  );
}
