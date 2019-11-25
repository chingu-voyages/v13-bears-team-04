import React from "react";
import Nav from "../components/nav";
import TrendingCommunity from "../components/TrendingCommunity";
import RecentPosts from "../components/RecentPosts/recentposts";
import PostList from "../components/postlist";

const Home = () => (
  <div>
    <Nav />
    <PostList />
    <TrendingCommunity />
    <RecentPosts />
  </div>
);
export default Home;
