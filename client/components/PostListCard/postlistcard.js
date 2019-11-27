import React from "react";
import PostListCardActions from "./postlistcardactions";
import PostListCardInfo from "./postlistcardinfo";
import PostListCardVote from "./postlistcardvote";
import "./postlistcard.scss";

export default function PostListCard(props) {
  const {
    // will need this id later on
    // _id,
    createdOn,
    voteScore,
    comments,
    author,
    body,
    title,
    category,
  } = props;

  return (
    <div className="postlist-card">
      <PostListCardVote voteScore={voteScore} />
      <div className="postlist-card__details">
        <PostListCardInfo
          category={category}
          author={author}
          createdOn={createdOn}
        />
        <h3 className="postlist-card__details__title">{title}</h3>
        <div className="postlist-card__details__body">{body}</div>
      </div>
      <PostListCardActions numOfComments={comments.length} />
    </div>
  );
}
