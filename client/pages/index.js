import React from "react";

import HomeBox from "../components/HomeBox";
import PostList from "../components/PostList";
import RecentPosts from "../components/RecentPosts";
import TrendingCommunity from "../components/TrendingCommunity";
import GrowingCommunities from "../components/GrowingCommunities";
import SortView from "../components/SortView";

import { useUser } from "../contexts/user";
import fetchIt from "../utils/fetch";

const Home = () => {
  const { user } = useUser();

  async function createPost() {
    try {
      const randomNum = Math.floor(Math.random() * 1000);
      const communityId = "5de36fb689277400f03f364d";
      const newPost = await fetchIt(`/posts/${communityId}`, {
        method: "POST",
        body: JSON.stringify({
          title: `Suppppp${randomNum}`,
          body: "Howwwwwwdy",
          author: user._id,
          community: communityId,
        }),
        ctx: {},
      });
      console.log(newPost);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div style={{ marginTop: "4.9rem" }}>
      <SortView />
      {user ? `Hello, ${user.username}` : "Not logged in"}
      <PostList />
      <TrendingCommunity />
      <GrowingCommunities />
      <RecentPosts />
      <HomeBox />
      {user && (
        <button type="button" onClick={createPost}>
          Create Post
        </button>
      )}
    </div>
  );
};

export default Home;
