import React from "react";
import dayjs from "dayjs";

// temporary img placeholder until we build subreddit models
const redditImg = `https://external-preview.redd.it/QJRqGgkUjhGSdu3vfpckrvg1UKzZOqX2BbglcLhjS70.png?auto=webp&s=c681ae9c9b5021d81b6c4e3a2830f09eff2368b5`;

export default function PostListCardInfo(props) {
  const { community, author, createdOn } = props;

  return (
    <div className="postlist-card__details__info">
      <div className="postlist-card__details__info__sub">
        {/* this might hold icons in the future, so we'd want need this parent to style it */}
        <div className="postlist-card__details__info__sub__img">
          <img src={redditImg} alt="subreddit" />
        </div>
        {/* will need to change this to Next Link later */}
        <div className="postlist-card__details__info__sub__text">{`r/ ${community}`}</div>
      </div>
      <div className="postlist-card__details__info__user">{`Posted by u/${author}`}</div>
      <div className="postlist-card__details__info__date">
        {dayjs().to(dayjs(createdOn))}
      </div>
    </div>
  );
}
