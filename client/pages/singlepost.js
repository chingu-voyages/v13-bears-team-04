import React from "react";

import Layout from "../components/Layout";
import Nav from "../components/Nav";
import SubredditInfo from "../components/SubredditInfo";
import FooterBox from "../components/FooterBox";

import fetchIt from "../utils/fetch";
import ToTopButton from "../components/ToTopButton";

const SinglePost = () => {
  return (
    <>
      <Layout>
        <Layout.Column></Layout.Column>
        <Layout.Column>
          <SubredditInfo />
          <FooterBox />
          <ToTopButton />
        </Layout.Column>
      </Layout>
    </>
  );
};

export default SinglePost;
