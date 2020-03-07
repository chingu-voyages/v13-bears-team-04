import React from "react";
import AuthButtons from "../../../../components/AuthButtons";
import { useUser } from "../../../../contexts/user";
import { Editor } from "../../../../components/Slate";

export default function PostCommentCreate(): JSX.Element {
  const { isAuthenticated } = useUser();

  return isAuthenticated ? <CreateComment /> : <AuthNeeded />;
}

const AuthNeeded = (): JSX.Element => (
  <div className="viewpost__comment__authneeded">
    <span>Log in or sign up to leave a comment</span>
    <AuthButtons cxBtn="viewpost__comment__authneeded__btn" />
  </div>
);

const CreateComment = (): JSX.Element => (
  <Editor
    isComment
    value={[]}
    handleCommentSubmit={(): void => console.log("submit comment")}
  />
);
