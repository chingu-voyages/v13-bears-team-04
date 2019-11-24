import React from "react";
import Nav from "../components/nav";
import TrendingCommunity from "../components/TrendingCommunity";
import PostList from "../components/postlist";
import ToTopButton from "../components/totopbutton";

const Home = () => (
  <div>
    <Nav />
    <PostList />
    <ToTopButton />
    <TrendingCommunity />
  </div>
);
export default Home;
