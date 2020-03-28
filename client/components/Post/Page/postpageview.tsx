import React, { useState } from "react";
import PostPageComment from "./postpagecomment";
import PostPageComments from "./postpagecomments";
import PostCard from "../Card";

import { PostType } from "../../../types/post";
import { CommentType } from "../../../types/comment";
import { ConfirmBoxProvider } from "../../ConfirmBox/confirmbox";

type Props = {
  post: PostType;
};

export default function PostPageView({ post }: Props): JSX.Element {
  const [state, setState] = useState(post);

  const handleAddition = (newComment: CommentType) => {
    setState({ ...state, comments: [...state.comments, newComment] });
  };

  const handleDeletion = (commentId: string) => {
    setState({
      ...state,
      comments: state.comments.filter(comment => comment._id !== commentId),
    });
  };

  return (
    <ConfirmBoxProvider>
      <div className="viewpost__content">
        {/* Shows all the post content */}
        <PostCard
          {...state}
          onPostPage
          hideCommunityName={false}
          numOfComments={state.comments.length}
        />

        {/* Show comment box or auth login buttons */}
        <PostPageComment postId={state._id} handleAddition={handleAddition} />

        {/* Show all the comments here */}
        <PostPageComments
          comments={state.comments}
          handleDeletion={handleDeletion}
          handleAddition={handleAddition}
        />
      </div>
    </ConfirmBoxProvider>
  );
}
