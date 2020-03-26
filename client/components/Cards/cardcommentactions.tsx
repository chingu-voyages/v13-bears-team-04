import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionType } from "./cardcomment";
// import { useUser } from "../../contexts/user";

type Props = {
  dispatch: React.Dispatch<ActionType>;
  isReplyOpen: boolean;
  isEditOpen: boolean;
};

export default function CardCommentActions({
  dispatch,
  isReplyOpen,
  isEditOpen,
}: Props): JSX.Element {
  // const { isAuthenticated, user, token } = useUser();
  // const isOwner = user._id === state.ownerId;

  // console.log(token, isOwner);

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

      <button
        type="button"
        tabIndex={0}
        className="card__actions__option"
        onClick={() => dispatch({ type: "Toggle_Report" })}
      >
        Report
      </button>

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
        onClick={() => dispatch({ type: "Delete_Comment" })}
      >
        Delete
      </button>
    </div>
  );
}
