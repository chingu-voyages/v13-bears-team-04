import React from "react";
import PostCard from "../../../../components/PostCard";
import PostCommentCreate from "./postcommentcreate";
import { PostType } from "../../../../types/post";

type Props = {
  post: PostType;
};

export default function PostView({ post }: Props): JSX.Element {
  console.log(post);

  return (
    <div className="viewpost__content">
      <PostCard {...post} onCommunityPage={false} />
      <PostCommentCreate />
      {/* Show the comments / give award etc. */}
      {/* ..... */}

      {/* Add comment here */}
      {/* <Editor
          isComment
          //  value: Node[];
          //  setValue?: (value: Node[]) => void;
          //  handleCommentSubmit?: () => void;
        /> */}

      {/* Show comments here */}
      {/* ... */}
    </div>
  );
}
