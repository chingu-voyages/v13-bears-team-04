import React from "react";
import Link from "next/link";
import { Render } from "../Slate";

import PostCardActions from "./postcardactions";
import PostCardInfo from "./postcardinfo";
import PostCardVote from "./postcardvote";
import { PostType } from "../PostList/types";

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
    <div className="postcard">
      <PostCardVote voteScore={voteScore} />
      <Link href={`/r/${community.name}/${_id}`}>
        <div>
          <div className="postcard__details">
            <PostCardInfo
              community={community.name}
              author={author.username}
              createdOn={createdOn}
              onCommunityPage={onCommunityPage}
              theme={community.theme}
            />
            <h3 className="postcard__details__title">{title}</h3>

            <div className="postcard__details__content">
              <Render content={content} />
            </div>
          </div>
          <PostCardActions numOfComments={comments.length} />
        </div>
      </Link>
    </div>
  );
}
