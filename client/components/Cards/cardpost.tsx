import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { Render } from "../Slate";

import Votes from "../Votes";
import CardPostActions from "./cardpostactions";
import CardInfo from "./cardinfo";
import { PostType } from "../../types/post";

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
  onPostPage,
}: Props): JSX.Element {
  const { push } = useRouter();

  const goToPost = () => {
    if (onPostPage) return;
    push(`/r/${community.name}/${_id}`);
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

      <div
        tabIndex={0}
        role="button"
        onClick={goToPost}
        onKeyPress={goToPost}
        className="cardpost__link"
      >
        <div className={detailsCX}>
          <CardInfo
            hideCommunityName={hideCommunityName}
            communityName={community.name}
            authorName={author.username}
            createdOn={createdOn}
            theme={community.theme}
          />

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
          />
        </div>
      </div>
    </div>
  );
}
