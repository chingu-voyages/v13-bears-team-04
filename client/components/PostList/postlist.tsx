import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PostCard from "../PostCard";
import fetchIt from "../../utils/fetch";
import { PostType } from "../../types/post";

type Props = {
  endpoint: string;
};

export default function PostList({ endpoint }: Props): JSX.Element {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoader] = useState(true);

  const { pathname } = useRouter();
  const onCommunityPage = pathname.startsWith("/r/");

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

    getPosts();

    return (): void => {
      canSet = false;
    };
  }, [endpoint]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Sorry, an error occured. Try again later.</div>;

  if (!posts.length) return <div>No posts found</div>;

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post._id} onCommunityPage={onCommunityPage} {...post} />
      ))}
    </div>
  );
}
