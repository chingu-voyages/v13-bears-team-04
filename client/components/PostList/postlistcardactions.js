import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostListCardActions({ numOfComments }) {
  return (
    <div className="postlist-card__actions">
      <div className="postlist-card__actions__comments">
        <FontAwesomeIcon icon="comment-alt" />
        {`${numOfComments} Comments`}
      </div>
    </div>
  );
}
