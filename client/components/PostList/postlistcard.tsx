import React from "react";
import { Render } from "../Slate";

import PostListCardActions from "./postlistcardactions";
import PostListCardInfo from "./postlistcardinfo";
import PostListCardVote from "./postlistcardvote";
import { PostType } from "./types";

export default function PostListCard(props: PostType) {
  console.log(JSON.parse(props.content));
  return (
    <div className="postlist-card">
      <PostListCardVote voteScore={props.voteScore} />
      <div className="postlist-card__details">
        <PostListCardInfo
          community={props.community.name}
          author={props.author.username}
          createdOn={props.createdOn}
        />
        <h3 className="postlist-card__details__title">{props.title}</h3>

        <div className="postlist-card__details__content">
          <Render content={props.content} />
        </div>
        {/* <div className="postlist-card__details__content">{props.content}</div> */}
      </div>
      <PostListCardActions numOfComments={props.comments.length} />
    </div>
  );
}
