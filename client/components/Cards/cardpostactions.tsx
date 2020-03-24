import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

type Props = {
  numOfComments: number;
  onPostPage: boolean;
};

export default function CardPostActions({
  numOfComments,
  onPostPage,
}: Props): JSX.Element {
  return (
    <div className="card__actions">
      <button
        type="button"
        tabIndex={0}
        className={clsx("card__actions__option", {
          "card__actions__option--disabled": onPostPage,
        })}
      >
        <FontAwesomeIcon icon="comment-alt" />
        {`${numOfComments} Comment${numOfComments === 1 ? "" : "s"}`}
      </button>

      <button type="button" tabIndex={0} className="card__actions__option">
        <FontAwesomeIcon icon="award" />
        Give Award
      </button>

      <button type="button" tabIndex={0} className="card__actions__option">
        <FontAwesomeIcon icon="flag" />
        Report
      </button>

      <button type="button" tabIndex={0} className="card__actions__option">
        <FontAwesomeIcon icon="pencil-alt" />
        Edit
      </button>

      <button type="button" tabIndex={0} className="card__actions__option">
        <FontAwesomeIcon icon="trash-alt" />
        Delete
      </button>
    </div>
  );
}
