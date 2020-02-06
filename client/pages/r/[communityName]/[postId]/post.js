import React from "react";

import FooterBox from "../../../../components/FooterBox";
import Layout from "../../../../components/Layout";
import PageHead from "../../../../components/PageHead";
import PostBanner from "./postbanner";
import SubredditInfo from "../../../../components/SubredditInfo";
import ToTopButton from "../../../../components/ToTopButton";
import ViewPost from "../../../../components/ViewPost";
import fetchIt from "../../../../utils/fetch";

export default function Post({ post }) {
  console.log(post);

  return (
    <div className="viewpost-container">
      <PageHead title={`${post.title} | ${post.community.name}`} />
      <PostBanner title={post.title} votes={[]} />
      <Layout styles={{ paddingTop: "68px" }}>
        {/* Daniel's */}
        <Layout.Column>
          <ViewPost post={post} />
        </Layout.Column>

        {/* Seth's */}
        <Layout.Column>
          {/* check the props in both those files, but either way I wrote... */}
          {/* ... them in typescript, so you should get some autocomplete... */}
          {/* ... while typing out the props */}
          {/* always */}
          {/* /ViewCommunity/communityabout.tsx  */}
          <SubredditInfo />
          {/* if the user is logged in */}
          {/* /ViewCommunity/communitymods.tsx  */}
          <FooterBox />
          <ToTopButton />
        </Layout.Column>
      </Layout>
    </div>
  );
}

Post.getInitialProps = async ctx => {
  const { communityName, postId } = ctx.query;

  // console.log(communityName);
  try {
    const posts = await fetchIt("/posts");
    const [post] = posts.filter(({ _id }) => postId === _id);
    return { post };
  } catch (err) {
    return { error: err.message };
  }
};
