import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  numOfComments: number;
};

export default function PostCardActions({ numOfComments }: Props): JSX.Element {
  return (
    <div className="postcard__actions">
      <div className="postcard__actions__comments">
        <FontAwesomeIcon icon="comment-alt" />
        {`${numOfComments} Comments`}
      </div>
    </div>
  );
}
