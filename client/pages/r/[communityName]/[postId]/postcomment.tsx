import React from "react";
import PostCommentCreate from "./postcommentcreate";
import PostCommentList from "./postcommentlist";

const PostComment: React.ReactNode = () => (
  <div className="viewpost__comment">
    <PostCommentCreate />
    <PostCommentList />
  </div>
);

export default PostComment;
