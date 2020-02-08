import React from "react";

import FooterBox from "../../../../components/FooterBox";
import Layout from "../../../../components/Layout";
import PageHead from "../../../../components/PageHead";
import SubredditInfo from "../../../../components/SubredditInfo";
import ToTopButton from "../../../../components/ToTopButton";
import ViewPost from "../../../../components/ViewPost";
import Button from "../../../../components/Button";
import FAIcon from "../../../../components/FAIcon";
import fetchIt from "../../../../utils/fetch";

export default function Post({ post }) {
  console.log(post);

  return (
    <>
      <PageHead title={`${post.title} | ${post.community.name}`} />
      <div className="viewpost__background">
        <div className="viewpost__container">
          <div className="viewpost__banner">
            <div className="viewpost__banner__votes">
              <FAIcon
                icon="arrow-up"
                className="viewpost__banner__votes__arrow__up"
                onClick={() => console.log("upvote")}
              />
              <span className="viewpost__banner__votes__score">
                {post.voteScore}
              </span>
              <FAIcon
                icon="arrow-down"
                className="viewpost__banner__votes__arrow__down"
                onClick={() => console.log("downvote")}
              />
            </div>
            <h2 className="viewpost__banner__title">{post.title}</h2>
            <Button
              text="Close"
              icon="times"
              size="tight"
              href={`/r/${post.community.name}`}
              cx="viewpost__banner__closebtn"
            />
          </div>
          <Layout>
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
      </div>
    </>
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
