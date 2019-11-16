import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostListCardActions({ numOfComments }) {
  return (
    <div className="postlistcard-actions">
      <div className="postlistcard-actions-comments">
        <FontAwesomeIcon icon="comment-alt" />
        {`${numOfComments} Comments`}
      </div>
    </div>
  );
}
