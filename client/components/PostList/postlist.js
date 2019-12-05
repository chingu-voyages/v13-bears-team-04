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
        const posts = await fetchIt("/posts");
        setPosts(posts);
        setLoader(false);
      } catch (err) {
        console.log(err);
      }
    }

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
