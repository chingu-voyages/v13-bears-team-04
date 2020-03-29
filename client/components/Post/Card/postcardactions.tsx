import React from "react";
import Router from "next/router";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useUser } from "../../../contexts/user";
import fetchIt from "../../../utils/fetch";
import { useConfirmBox } from "../../ConfirmBox";

type Props = {
  numOfComments: number;
  onPostPage: boolean;
  postId: string;
  authorId: string;
  communityName: string;
  isDeleted?: boolean;
};

export default function CardPostActions({
  numOfComments,
  onPostPage,
  postId,
  authorId,
  communityName,
  isDeleted,
}: Props): JSX.Element {
  const { confirmBoxDispatch } = useConfirmBox();
  const { isAuthenticated, user, token, setUser } = useUser();

  const isOwner = isAuthenticated && user._id === authorId;

  const handleDelete = async () => {
    console.log("processing...");
    try {
      const data = await fetchIt(`/posts/${postId}`, {
        method: "DELETE",
        token,
      });

      const { isAdmin, updatedUser } = data;
      if (!isAdmin) {
        setUser({ type: "SET_USER", token, user: updatedUser });
      }

      Router.push("/r/[communityName]", `/r/${communityName}`);
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

      {isOwner && onPostPage && isDeleted !== true && (
        <>
          <Link
            href="/r/[communityName]/[postId]/edit"
            as={`/r/${communityName}/${postId}/edit`}
          >
            <a className="card__actions__option">
              <FontAwesomeIcon icon="pencil-alt" />
              Edit
            </a>
          </Link>

          <button
            type="button"
            tabIndex={0}
            className="card__actions__option"
            onClick={() =>
              confirmBoxDispatch({
                type: "Open_Modal",
                heading: "Delete Post",
                subheading: "Are you sure you want to delete this post?",
                onConfirmClick: handleDelete,
              })
            }
          >
            <FontAwesomeIcon icon="trash-alt" />
            Delete
          </button>
        </>
      )}
    </div>
  );
}
