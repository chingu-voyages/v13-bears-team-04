import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useUser } from "../../contexts/user";
import fetchIt from "../../utils/fetch";

type Props = {
  numOfComments: number;
  onPostPage: boolean;
  postId: string;
  authorId: string;
};

export default function CardPostActions({
  numOfComments,
  onPostPage,
  postId,
  authorId,
}: Props): JSX.Element {
  const { isAuthenticated, user, token } = useUser();
  const isOwner = isAuthenticated && user._id === authorId;

  const handleEdit = async () => {
    console.log("processing...");
    try {
      const editedPost = await fetchIt(`/posts/${postId}`, {
        method: "PUT",
        // body: JSON.stringify({content})
        token,
      });

      console.log(editedPost);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    console.log("processing...");
    try {
      const deletedPost = await fetchIt(`/posts/${postId}`, {
        method: "DELETE",
        token,
      });

      console.log(deletedPost);
    } catch (err) {
      console.log(err);
    }
  };

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

      {isOwner && onPostPage && (
        <>
          <button
            type="button"
            tabIndex={0}
            className="card__actions__option"
            onClick={handleEdit}
          >
            <FontAwesomeIcon icon="pencil-alt" />
            Edit
          </button>

          <button
            type="button"
            tabIndex={0}
            className="card__actions__option"
            onClick={handleDelete}
          >
            <FontAwesomeIcon icon="trash-alt" />
            Delete
          </button>
        </>
      )}
    </div>
  );
}
