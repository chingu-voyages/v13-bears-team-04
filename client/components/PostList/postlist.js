import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import PostListCard from "../PostListCard";
import "./postlist.scss";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`${process.env.API_URL}/posts/test`);
      const { posts } = await res.json();
      setPosts(posts);
      setLoader(false);
    };

    getPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="postlist-container">
      {posts.map(({ _id, ...post }) => (
        <PostListCard key={_id} {...post} />
      ))}
    </div>
  );
}
