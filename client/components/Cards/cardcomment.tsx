import React, { useState } from "react";
import { Render } from "../Slate";

import Votes from "../Votes";
import CardCommentActions from "./cardcommentactions";
import CardInfo from "./cardinfo";
import { CommentType } from "../../types/comment";
import { useUser } from "../../contexts/user";

type Props = {
  comment: CommentType;
};

export default function CardComment({ comment }: Props) {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const { isAuthenticated, user, token } = useUser();

  const isOwner = user._id === comment.author._id;

  return (
    <div className="cardcomment">
      <div className="cardcomment__left">
        <Votes hideNum vote="" votes={[]} cxContainer="cardcomment__votes" />
        <span className="cardcomment__connecter" />
      </div>

      <div className="cardcomment__right">
        <CardInfo
          isComment
          hideCommunityName
          authorName={comment.author.username}
          createdOn={comment.createdOn}
        />

        <Render content={comment.content} />

        <CardCommentActions />
      </div>
    </div>
  );
}
