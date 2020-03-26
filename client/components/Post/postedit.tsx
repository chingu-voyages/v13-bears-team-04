import React from "react";
import { NextPageContext } from "next";
import Error from "next/error";

import PostCreateEdit from "./CreateEdit";
import { useForceSignIn } from "../../hooks";
import fetchIt from "../../utils/fetch";
import { PostType } from "../../types/post";

type Props = {
  error?: string;
  post?: PostType;
};

function PostEdit({ post, error }: Props) {
  useForceSignIn();

  if (error || !post) return <Error title={error} statusCode={404} />;

  return (
    <PostCreateEdit
      isEdit
      post={post}
      communityId={post.community._id}
      communityName={post.community.name}
    />
  );
}

PostEdit.getInitialProps = async ({ query }: NextPageContext) => {
  try {
    const { postId } = query;

    const post: PostType = await fetchIt(`/posts/${postId}`);
    if (!post) {
      throw new Error({
        message: `Post (${postId}) not found`,
        statusCode: 404,
      });
    }

    return { post };
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export default PostEdit;
