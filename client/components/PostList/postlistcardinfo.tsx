import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/router";

dayjs.extend(relativeTime);

type Props = {
  community: string;
  author: string;
  createdOn: string;
};

export default function PostListCardInfo({
  community,
  author,
  createdOn,
}: Props) {
  const redditName = `r/${community}`;
  const router = useRouter();
  console.log(router);
  return (
    <div className="postlist-card__details__info">
      <div className="postlist-card__details__info__sub">
        <div className="postlist-card__details__info__sub__img">
          <img src="/nav-images/logo-icon.svg" alt="/r" />
        </div>
        <Link href={redditName}>
          <a className="postlist-card__details__info__sub__text">
            {redditName}
          </a>
        </Link>
      </div>
      <div className="postlist-card__details__info__user">{`Posted by u/${author}`}</div>
      <div className="postlist-card__details__info__date">
        {dayjs().to(dayjs(createdOn))}
      </div>
    </div>
  );
}
