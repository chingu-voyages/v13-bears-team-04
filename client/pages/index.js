import React from "react";
import Nav from "../components/nav";
import TrendingCommunity from "../components/TrendingCommunity";
import PostList from "../components/postlist";

const Home = () => (
  <div>
    <Nav />
    <PostList />
    <TrendingCommunity />
  </div>
);

export default Home;
