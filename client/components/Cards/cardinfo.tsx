import React from "react";
import Link from "next/link";
import { LogoIcon } from "../../svgs";
import makeDateAgo from "../../utils/date";
import shrinkNum from "../../utils/shrinknum";

type Props = {
  authorName: string;
  communityName?: string;
  createdOn: string;
  hideCommunityName: boolean;
  isComment?: boolean;
  points?: number;
  theme?: { [key: string]: string };
};

export default function CardInfo({
  communityName,
  authorName,
  createdOn,
  theme,
  isComment,
  hideCommunityName = false,
  points = Math.floor(Math.random() * 10000),
}: Props): JSX.Element {
  return (
    <div className="card__info">
      {/* Shows the community name and themed SVG icon */}
      {!hideCommunityName && theme && (
        <div className="card__info__sub">
          <LogoIcon
            className="card__info__sub__svg"
            primary={theme["--community-theme-main"]}
            secondary={theme["--community-theme-text"]}
          />

          <Link href="/r/[communityName]" as={`/r/${communityName}`}>
            <a className="card__info__sub__text">{`r/${communityName}`}</a>
          </Link>
          <span className="card__info__period">•</span>
        </div>
      )}

      {/* Shows the user name */}
      <div className="card__info__user">
        {isComment ? authorName : `Posted by u/${authorName}`}
      </div>

      {/* Shows the voting score */}
      {isComment && (
        <div className="card__info__points">
          {`${shrinkNum(points)} point${points === 1 ? "" : "s"}`}
          <span className="card__info__period">•</span>
        </div>
      )}

      {/* Shows a date string like 2 days ago or 1 hour ago */}
      <div className="card__info__date">{makeDateAgo(createdOn)}</div>
    </div>
  );
}
