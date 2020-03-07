import React from "react";
import Link from "next/link";
import { Render } from "../Slate";

import Votes from "../Votes";
import PostCardActions from "./postcardactions";
import PostCardInfo from "./postcardinfo";
import { PostType } from "../../types/post";

type Props = PostType & { onCommunityPage: boolean };

export default function PostListCard({
  _id,
  votes,
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
      <Votes votes={votes} cxContainer="postcard__votes" vote="" />
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
