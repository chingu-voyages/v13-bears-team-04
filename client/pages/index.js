import React from "react";
import Nav from "../components/nav";
import TrendingCommunity from "../components/TrendingCommunity";
import PostList from "../components/postlist";
/*import ToTopButton from "../components/to_top_button";*/

const Home = () => (
  <div>
    <Nav />
    <PostList />
    {/*<ToTopButton scrollStepInPx="50" delayInMs="30" />*/}
    <TrendingCommunity />
  </div>
);
export default Home;
