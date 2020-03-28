import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionType, StateType } from "./useComment";
import { useUser } from "../../contexts/user";

type Props = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
  openDelete: () => void;
};

export default function CommentActions({ state, dispatch, openDelete }: Props) {
  const { isAuthenticated, user } = useUser();
  const { isEditOpen, isReplyOpen } = state;
  const isOwner = user._id === state.ownerId;

  if (state.isDeleted) return null;

  return (
    <div className="card__actions">
      <button
        type="button"
        tabIndex={0}
        className="card__actions__option"
        onClick={() => dispatch({ type: "Toggle_Reply_Open" })}
      >
        <FontAwesomeIcon icon={isReplyOpen ? "times" : "comment-alt"} />
        {isReplyOpen ? "Close" : "Reply"}
      </button>

      {isAuthenticated && (
        <button
          type="button"
          tabIndex={0}
          className="card__actions__option"
          onClick={() => dispatch({ type: "Toggle_Report" })}
        >
          {state.isReported ? "Reported" : "Report"}
        </button>
      )}

      {isOwner && (
        <>
          <button
            type="button"
            tabIndex={0}
            className="card__actions__option"
            onClick={() => dispatch({ type: "Toggle_Edit_Open" })}
          >
            {isEditOpen ? "Cancel Edit" : "Edit"}
          </button>

          <button
            type="button"
            tabIndex={0}
            className="card__actions__option"
            onClick={openDelete}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
