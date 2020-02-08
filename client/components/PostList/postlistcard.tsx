import React from "react";
import Link from "next/link";
import { Render } from "../Slate";

import PostListCardActions from "./postlistcardactions";
import PostListCardInfo from "./postlistcardinfo";
import PostListCardVote from "./postlistcardvote";
import { PostType } from "./types";

type Props = PostType & { onCommunityPage: boolean };

export default function PostListCard({
  _id,
  voteScore,
  community,
  author,
  createdOn,
  onCommunityPage,
  title,
  content,
  comments,
}: Props): JSX.Element {
  return (
    <div className="postlist-card">
      <PostListCardVote voteScore={voteScore} />
      <Link href={`/r/${community.name}/${_id}`}>
        <div>
          <div className="postlist-card__details">
            <PostListCardInfo
              community={community.name}
              author={author.username}
              createdOn={createdOn}
              onCommunityPage={onCommunityPage}
              theme={community.theme}
            />
            <h3 className="postlist-card__details__title">{title}</h3>

            <div className="postlist-card__details__content">
              <Render content={content} />
            </div>
          </div>
          <PostListCardActions numOfComments={comments.length} />
        </div>
      </Link>
    </div>
  );
}
