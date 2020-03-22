import React from "react";

import HomeBox from "../components/HomeBox";
import GrowingCommunities from "../components/GrowingCommunities";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import RecentPosts from "../components/RecentPosts";
import SortView from "../components/SortView";
import TrendingCommunity from "../components/TrendingCommunities";
import ToTopButton from "../components/ToTopButton";
import FooterBox from "../components/FooterBox";
import PageHead from "../components/PageHead";

export default function Index() {
  return (
    <>
      <PageHead title="reddit: the front page of the internet" />
      <SortView />
      <Layout>
        <Layout.Column>
          <PostList endpoint="/posts" />
        </Layout.Column>
        <Layout.Column>
          <GrowingCommunities />
          <TrendingCommunity />
          <HomeBox />
          <RecentPosts />
          <FooterBox />
          <ToTopButton />
        </Layout.Column>
      </Layout>
    </>
  );
}
