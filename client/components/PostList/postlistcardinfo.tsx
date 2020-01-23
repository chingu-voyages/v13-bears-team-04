import React from "react";
import Link from "next/link";
import makeDateAgo from "../../utils/date";

type Props = {
  community: string;
  author: string;
  createdOn: string;
  onCommunityPage: boolean;
};

export default function PostListCardInfo({
  community,
  author,
  createdOn,
  onCommunityPage,
}: Props) {
  const redditName = `r/${community}`;

  return (
    <div className="postlist-card__details__info">
      <div className="postlist-card__details__info__sub">
        <div className="postlist-card__details__info__sub__img">
          <img src="/nav-images/logo-icon.svg" alt="/r" />
        </div>
        {!onCommunityPage && (
          <Link href={redditName}>
            <a className="postlist-card__details__info__sub__text">
              {redditName}
            </a>
          </Link>
        )}
      </div>
      <div className="postlist-card__details__info__user">{`Posted by u/${author}`}</div>
      <div className="postlist-card__details__info__date">
        {makeDateAgo(createdOn)}
      </div>
    </div>
  );
}
