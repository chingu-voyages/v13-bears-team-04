import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardCommentActions(): JSX.Element {
  return (
    <div className="card__actions">
      <button type="button" tabIndex={0} className="card__actions__option">
        <FontAwesomeIcon icon="comment-alt" />
        Reply
      </button>

      <button type="button" tabIndex={0} className="card__actions__option">
        Report
      </button>

      <button type="button" tabIndex={0} className="card__actions__option">
        Edit
      </button>

      <button type="button" tabIndex={0} className="card__actions__option">
        Delete
      </button>
    </div>
  );
}
