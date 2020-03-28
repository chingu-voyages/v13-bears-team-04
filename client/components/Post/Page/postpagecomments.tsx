import React from "react";
import Comment from "../../Comment";
import { CommentType } from "../../../types/comment";

type Props = {
  comments: CommentType[];
  handleDeletion: (commentId: string) => void;
  handleAddition: (newComment: CommentType) => void;
};

function nestComments(comments: CommentType[]) {
  return comments
    .map(comment => ({ ...comment, comments: [...comment.comments] }))
    .sort((a, b) => (a.createdOn > b.createdOn ? 1 : -1))
    .reduce((acc: CommentType[], comment: CommentType) => {
      if (comment.isOnPost) {
        acc.push(comment);
        return acc;
      }
      return nestInOwner(acc, comment);
    }, []);
}

function nestInOwner(acc: CommentType[], comment: CommentType) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < acc.length; i++) {
    if (acc[i]._id === comment.commentId) {
      acc[i].comments.push(comment);
      break;
    } else {
      nestInOwner(acc[i].comments, comment);
    }
  }
  return acc;
}

export default function PostPageComments({
  comments,
  handleDeletion,
  handleAddition,
}: Props): JSX.Element {
  return (
    <div className="viewpost__comments">
      {!comments.length ? (
        <div className="viewpost__comments__none">No Comments Yet</div>
      ) : (
        nestComments(comments).map(comment => (
          <Comment
            key={comment._id}
            comment={comment}
            handleDeletion={handleDeletion}
            handleAddition={handleAddition}
          />
        ))
      )}
    </div>
  );
}
