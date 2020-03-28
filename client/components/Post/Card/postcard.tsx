import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import CardPostActions from "./postcardactions";
import CardInfoHeader from "../../CardInfoHeader";
import { Render } from "../../Slate";
import Votes from "../../Votes";
import { PostType } from "../../../types/post";

type Props = PostType & {
  hideCommunityName: boolean;
  onPostPage: boolean;
};

export default function PostCard({
  _id,
  votes,
  community,
  author,
  createdOn,
  title,
  content,
  numOfComments,
  hideCommunityName,
  isDeleted,
  onPostPage,
}: Props): JSX.Element {
  const { push } = useRouter();

  const goToPost = () => {
    if (onPostPage) return;
    push("/r/[communityName]/[postId]", `/r/${community.name}/${_id}`);
  };

  const cardCX = clsx("cardpost", {
    "cardpost-notOnPostPage": !onPostPage,
  });

  const voteCX = clsx("cardpost__votes", {
    "cardpost__votes-notOnPostPage": !onPostPage,
  });

  const detailsCX = clsx("cardpost__details", {
    "cardpost__details-notOnPostPage": !onPostPage,
  });

  const contentCX = clsx("cardpost__details__content", {
    "cardpost__details__content-notOnPostPage": !onPostPage,
  });

  return (
    <div className={cardCX}>
      <Votes votes={votes} cxContainer={voteCX} vote="" />

      <div className={detailsCX}>
        <CardInfoHeader
          hideCommunityName={hideCommunityName}
          communityName={community.name}
          authorName={author.username}
          createdOn={createdOn}
          theme={community.theme}
        />

        <div
          tabIndex={0}
          role="button"
          onClick={goToPost}
          onKeyPress={goToPost}
          className="cardpost__link"
        >
          <h3 className="cardpost__details__title">{title}</h3>

          <div className={contentCX}>
            <Render content={content} />
          </div>
        </div>

        <div className="cardpost__actions">
          <CardPostActions
            numOfComments={numOfComments}
            onPostPage={onPostPage}
            postId={_id}
            authorId={author._id}
            communityName={community.name}
            isDeleted={isDeleted}
          />
        </div>
      </div>
    </div>
  );
}
