import React from "react";
import AuthButtons from "../../AuthButtons";
import { useUser } from "../../../contexts/user";
import { CommentType } from "../../../types/comment";
import CommentCreateEdit from "../../Comment/commentcreateedit";

type Props = {
  postId: string;
  handleAddition: (newComment: CommentType) => void;
};

export default function PostPageComment({
  postId,
  handleAddition,
}: Props): JSX.Element {
  const { isAuthenticated, user } = useUser();

  return (
    <div className="viewpost__comment">
      {isAuthenticated ? (
        <>
          <div className="viewpost__comment__as">
            Comment as <span>{user.username}</span>
          </div>
          <CommentCreateEdit postId={postId} handleSubmit={handleAddition} />
        </>
      ) : (
        <div className="viewpost__comment__authneeded">
          <span className="viewpost__comment__authneeded__text">
            Log in or sign up to leave a comment
          </span>
          <div className="viewpost__comment__authneeded__btns">
            <AuthButtons cxBtn="viewpost__comment__authneeded__btns__btn" />
          </div>
        </div>
      )}
    </div>
  );
}
