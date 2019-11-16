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
    <div className="postlistcard-container">
      <PostListCardVote voteScore={voteScore} />
      <div className="postlistcard-details">
        <PostListCardInfo
          category={category}
          author={author}
          createdOn={createdOn}
        />
        <h3 className="postlistcard-title">{title}</h3>
        <div className="postlistcard-body">{body}</div>
      </div>
      <PostListCardActions numOfComments={comments.length} />
    </div>
  );
}
