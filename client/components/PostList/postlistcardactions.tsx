import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  numOfComments: number;
};

export default function PostListCardActions({ numOfComments }: Props) {
  return (
    <div className="postlist-card__actions">
      <div className="postlist-card__actions__comments">
        <FontAwesomeIcon icon="comment-alt" />
        {`${numOfComments} Comments`}
      </div>
    </div>
  );
}
