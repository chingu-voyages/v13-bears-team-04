import React from "react";
import clsx from "clsx";
import FAIcon from "../FAIcon";
import shrinkNum from "../../utils/shrinknum";
import { useVotes } from "./votescontext";

type Props = {
  isHorizontal?: boolean;
  cxContainer?: string;
  cxInner?: string;
  hideNum?: boolean;
};

export default function Votes({
  isHorizontal = false,
  cxContainer,
  cxInner,
  hideNum,
}: Props): JSX.Element {
  const { points, usersVote, handleVoteClick } = useVotes();

  const colorUp = usersVote === true ? "#ff6314" : "";
  const colorDown = usersVote === false ? "#0079d3" : "";
  return (
    <div className={cxContainer}>
      <div
        className={clsx("votes", cxInner)}
        style={{ flexDirection: isHorizontal ? "row" : "column" }}
      >
        <FAIcon
          icon="arrow-up"
          className="votes__up"
          color={colorUp}
          onClick={() => handleVoteClick(true)}
        />

        {!hideNum && (
          <span style={{ color: colorUp || colorDown }} className="votes__text">
            {!points ? "•" : shrinkNum(points)}
          </span>
        )}

        <FAIcon
          icon="arrow-down"
          className="votes__down"
          color={colorDown}
          onClick={() => handleVoteClick(false)}
        />
      </div>
    </div>
  );
}
