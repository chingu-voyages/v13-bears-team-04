import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LogoIcon } from "../../svgs";
import makeDateAgo from "../../utils/date";
import shrinkNum from "../../utils/shrinknum";
import { useUser } from "../../contexts/user";
import { useVotes } from "../Votes";

type Props = {
  authorName: string;
  communityName?: string;
  createdOn: string;
  lastModified: string;
  hideCommunityName: boolean;
  isDeleted: boolean;
  isComment?: boolean;
  theme?: { [key: string]: string };
  postOwnerName?: string;
};

export default function CardInfoHeader({
  communityName,
  authorName,
  createdOn,
  theme,
  isDeleted,
  isComment,
  postOwnerName,
  lastModified,
  hideCommunityName = false,
}: Props): JSX.Element {
  const { user } = useUser();
  const { points } = useVotes();

  const isOwnerOfComment = postOwnerName === user.username && isComment;

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

      {/* Shows the user name with a microphone icon if the user wrote the post */}
      <div
        className={clsx("card__info__user", {
          "card__info__user--isOwner": isOwnerOfComment && !isDeleted,
        })}
      >
        {isDeleted ? (
          `${isComment ? "" : "Posted by u/"}[removed]`
        ) : (
          <>
            {isOwnerOfComment && <FontAwesomeIcon icon="microphone" />}
            {isComment
              ? authorName
              : `Posted by u/${authorName || "[unknown]"}`}
          </>
        )}
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

      {/* If edited show that */}
      {createdOn !== lastModified && (
        <>
          <span className="card__info__period" style={{ margin: 0 }}>
            •
          </span>
          <div className="card__info__date card__info__date--isEdited">
            edited {makeDateAgo(lastModified)}
          </div>
        </>
      )}
    </div>
  );
}
