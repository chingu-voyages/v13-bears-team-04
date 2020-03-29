import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PostType } from "../../../types/post";
import fetchIt from "../../../utils/fetch";
import PostCard from "../Card";

type Props = {
  endpoint: string;
  posts?: PostType[];
};

export default function PostList({
  endpoint,
  posts: givenPosts,
}: Props): JSX.Element {
  const [posts, setPosts] = useState<PostType[]>(givenPosts || []);
  const [isError, setError] = useState(false);
  const [isLoading, setLoader] = useState(!givenPosts);

  const { query } = useRouter();
  const hideCommunityName = !!query.communityName && !query.postId;

  useEffect(() => {
    let canSet = true;

    async function getPosts(): Promise<void> {
      try {
        const data = await fetchIt(endpoint);
        if (!canSet) return;
        setPosts(data);
      } catch (err) {
        console.log(err.message);
        setError(true);
      }
      setLoader(false);
    }

    if (!givenPosts) {
      getPosts();
    }

    return (): void => {
      canSet = false;
    };
  }, [endpoint]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Sorry, an error occured. Try again later.</div>;

  if (!posts.length) return <div>No posts found</div>;

  return (
    <div className="viewpost__list">
      {posts.map(post => (
        <PostCard
          key={post._id}
          {...post}
          onPostPage={false}
          hideCommunityName={hideCommunityName}
          numOfComments={post.numOfComments}
        />
      ))}
    </div>
  );
}
