import React from "react";
import Nav from "../components/nav";
import TrendingCommunity from "../components/TrendingCommunity";
import PostList from "../components/postlist";
import ToTopButton from "../components/totopbutton";
import HomeBox from "../components/HomeBox";

const Home = () => (
  <div>
    <Nav />
    <PostList />
    <ToTopButton />
    <TrendingCommunity />
    <HomeBox />
  </div>
);
export default Home;
