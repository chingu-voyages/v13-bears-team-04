import React from "react";
import { CardPost } from "../Cards";
import PostComment from "./postcomment";
import PostComments from "./postcomments";
import { PostType } from "../../types/post";

type Props = {
  post: PostType;
};

export default function PostView({ post }: Props): JSX.Element {
  return (
    <div className="viewpost__content">
      {/* Shows all the post content */}
      <CardPost
        {...post}
        onPostPage
        hideCommunityName={false}
        numOfComments={post.comments.length}
      />

      {/* Show comment box or auth login buttons */}
      <PostComment postId={post._id} />

      {/* Show all the comments here */}
      <PostComments comments={post.comments} />
    </div>
  );
}
