import React from "react";
import Link from "next/link";
import { Render } from "../Slate";

import PostListCardActions from "./postlistcardactions";
import PostListCardInfo from "./postlistcardinfo";
import PostListCardVote from "./postlistcardvote";
import { PostType } from "./types";

type Props = PostType & { onCommunityPage: boolean };

export default function PostListCard(props: Props) {
  return (
    <div className="postlist-card">
      <PostListCardVote voteScore={props.voteScore} />
      <Link href={`/r/${props.community.name}/${props._id}`}>
        <div>
          <div className="postlist-card__details">
            <PostListCardInfo
              community={props.community.name}
              author={props.author.username}
              createdOn={props.createdOn}
              onCommunityPage={props.onCommunityPage}
              theme={props.community.theme}
            />
            <h3 className="postlist-card__details__title">{props.title}</h3>

            <div className="postlist-card__details__content">
              <Render content={props.content} />
            </div>
          </div>
          <PostListCardActions numOfComments={props.comments.length} />
        </div>
      </Link>
    </div>
  );
}
