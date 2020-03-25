import React, { useState } from "react";
import { CardPost } from "../Cards";
import PostComment from "./postcomment";
import PostComments from "./postcomments";
import { PostType } from "../../types/post";
import { CommentType } from "../../types/comment";

type Props = {
  post: PostType;
};

export default function PostView({ post }: Props): JSX.Element {
  const [state, setState] = useState(post);

  const handleAddition = (newComment: CommentType) => {
    setState({ ...state, comments: [...state.comments, newComment] });
  };

  return (
    <div className="viewpost__content">
      {/* Shows all the post content */}
      <CardPost
        {...state}
        onPostPage
        hideCommunityName={false}
        numOfComments={state.comments.length}
      />

      {/* Show comment box or auth login buttons */}
      <PostComment postId={state._id} handleAddition={handleAddition} />

      {/* Show all the comments here */}
      <PostComments comments={state.comments} />
    </div>
  );
}
