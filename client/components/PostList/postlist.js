import React, { useState, useEffect } from "react";
import PostListCard from "../PostListCard";
import fetchIt from "../../utils/fetch";
import "./postlist.scss";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await fetchIt("/posts");
        setPosts(data);
      } catch (err) {
        console.log(err.message);
      }
      setLoader(false);
    }

    getPosts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (!posts.length) return <div>No posts found</div>;

  return (
    <div className="postlist-container">
      {posts.map(({ _id, ...post }) => (
        <PostListCard key={_id} {...post} />
      ))}
    </div>
  );
}
