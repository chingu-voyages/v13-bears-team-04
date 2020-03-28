import React from "react";

import { Render } from "../Slate";
import Votes from "../Votes";
import CardInfoHeader from "../CardInfoHeader";
import { useConfirmBox } from "../ConfirmBox";

import CommentCreateEdit from "./commentcreateedit";
import CommentActions from "./commentactions";
import useComment from "./useComment";

import { useUser } from "../../contexts/user";
import { CommentType } from "../../types/comment";

type Props = {
  comment: CommentType;
};

export default function Comment({ comment }: Props) {
  const { isAuthenticated } = useUser();
  const { state, dispatch } = useComment(comment);
  const { confirmBoxDispatch } = useConfirmBox();

  const handleAddition = (newComment: CommentType) => {
    dispatch({ type: "Add_Comment", newComment });
  };

  const handleUpdate = (updatedComment: CommentType) => {
    dispatch({ type: "Update_Comment", content: updatedComment.content });
  };

  const handleDelete = () => undefined;

  const openDelete = () =>
    confirmBoxDispatch({
      type: "Open_Modal",
      heading: "Delete Comment",
      subheading: "Are you sure you want to delete that comment?",
      note: state.comments.length
        ? "only the content will be deleted"
        : "this cannot be undone",
      onConfirmClick: handleDelete,
    });

  return (
    <>
      <div className="cardcomment">
        <div className="cardcomment__left">
          {/* Voting arrows */}
          <Votes
            hideNum
            vote=""
            votes={state.votes}
            cxContainer="cardcomment__votes"
          />

          {/* When hovering a post this will turn blue  */}
          <span className="cardcomment__connecter" />
        </div>

        <div className="cardcomment__right">
          {/* Shows comment info like username, date and points */}
          <CardInfoHeader
            isComment
            hideCommunityName
            authorName={state.ownerName}
            createdOn={comment.createdOn}
            // points={}
          />

          {/* Shows the actual comment content or the ... */}
          {/* ... put the content in an editable container */}
          {state.isEditOpen ? (
            <CommentCreateEdit
              isEdit
              initialContent={state.content}
              commentId={state._id}
              handleSubmit={handleUpdate}
            />
          ) : (
            <Render content={state.content} />
          )}

          {/* Show the comment actions if the user is logged in */}
          {isAuthenticated && (
            <CommentActions
              state={state}
              dispatch={dispatch}
              openDelete={openDelete}
            />
          )}

          {/* Shows a comment box if user clicked the reply action button */}
          {state.isReplyOpen && (
            <CommentCreateEdit
              isOnComment
              postId={comment.postId}
              commentId={comment._id}
              handleSubmit={handleAddition}
            />
          )}
        </div>
      </div>

      {/* If the comment has comments on it show them */}
      {!!state.comments.length && (
        <div className="cardcomment__nested">
          <span className="cardcomment__connecter" />
          <div className="cardcomment__nested__cards">
            {state.comments.map(nestedComment => (
              <Comment key={nestedComment._id} comment={nestedComment} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
