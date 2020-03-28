import { useReducer } from "react";
import { CommentType } from "../../types/comment";

export type StateType = {
  _id: string;
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
  _id: comment._id,
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
      return { ...state, isEditOpen: false, content: action.content };
    // case "Delete_Comment":
    //   return { ...state,  };
    default:
      return state;
  }
};

export default function useComment(comment: CommentType) {
  const [state, dispatch] = useReducer(reducer, comment, init);

  return { state, dispatch };
}
