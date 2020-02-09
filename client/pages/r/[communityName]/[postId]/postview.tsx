import React from "react";
import PostCard from "../../../../components/PostCard";
import { PostType } from "../../../../types/post";

type Props = {
  post: PostType;
};

export default function PostView({ post }: Props): JSX.Element {
  console.log(post);

  return (
    <div className="post__container">
      <PostCard {...post} onCommunityPage={false} />
      <div className="post__container__title">
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
    </div>
  );
}
