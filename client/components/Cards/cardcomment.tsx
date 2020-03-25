import React, { useReducer } from "react";
import { Render } from "../Slate";
import Votes from "../Votes";
import CardCommentActions from "./cardcommentactions";
import CardInfo from "./cardinfo";
import { CommentType } from "../../types/comment";
import { useUser } from "../../contexts/user";
import CreateComment from "../CreateComment";

type StateType = {
  isEditOpen: boolean;
  isReplyOpen: boolean;
  isReported: boolean;
  ownerId: string;
  ownerName: string;
  content: string;
  comments: CommentType[];
  votes: string[];
};

const init = (comment: CommentType) => ({
  isEditOpen: false,
  isReplyOpen: false,
  isReported: false,
  votes: [],
  ownerId: comment.author._id,
  ownerName: comment.author.username,
  content: comment.content,
  comments: comment.comments,
});

export type ActionType =
  | { type: "Toggle_Reply_Open" }
  | { type: "Toggle_Edit_Open" }
  | { type: "Toggle_Report" }
  | { type: "Add_Comment"; newComment: CommentType }
  | { type: "Update_Comment"; content: string }
  | { type: "Delete_Comment" };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "Toggle_Reply_Open":
      return { ...state, isReplyOpen: !state.isReplyOpen };
    case "Toggle_Edit_Open":
      return { ...state, isEditOpen: !state.isEditOpen };
    case "Toggle_Report":
      return { ...state, isReported: !state.isReported };
    case "Add_Comment":
      return {
        ...state,
        isReplyOpen: false,
        comments: [...state.comments, action.newComment],
      };
    case "Update_Comment":
      return { ...state, content: action.content };
    // case "Delete_Comment":
    //   return { ...state,  };
    default:
      return state;
  }
};

type Props = {
  comment: CommentType;
};

export default function CardComment({ comment }: Props) {
  const [state, dispatch] = useReducer(reducer, comment, init);

  const { isAuthenticated } = useUser();

  const handleAddition = (newComment: CommentType) => {
    dispatch({ type: "Add_Comment", newComment });
  };

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
          <CardInfo
            isComment
            hideCommunityName
            authorName={state.ownerName}
            createdOn={comment.createdOn}
            // points={}
          />

          {/* Shows the actual comment content */}
          <Render content={state.content} />

          {/* Show the comment actions if the user is logged in */}
          {isAuthenticated && (
            <CardCommentActions
              dispatch={dispatch}
              isReplyOpen={state.isReplyOpen}
              isEditOpen={state.isEditOpen}
            />
          )}

          {/* Shows a comment box if user clicked the reply action button */}
          {state.isReplyOpen && (
            <CreateComment
              isOnComment
              postId={comment.postId}
              commentId={comment._id}
              handleAddition={handleAddition}
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
              <CardComment key={nestedComment._id} comment={nestedComment} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
