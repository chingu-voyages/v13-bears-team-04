import React from "react";
import { NextPage, NextPageContext } from "next";
import Error from "next/error";

import FooterBox from "../../../../components/FooterBox";
import Layout from "../../../../components/Layout";
import PageHead from "../../../../components/PageHead";
import CommunityAbout from "../../../../components/ViewCommunity/communityabout";
import ToTopButton from "../../../../components/ToTopButton";
import fetchIt from "../../../../utils/fetch";

import PostBanner from "./postbanner";
import PostView from "./postview";
import { PostType } from "../../../../types/post";

type Props = {
  error?: string;
  post?: PostType;
};

const Post: NextPage<Props> = ({ post, error }) => {
  if (error || !post) return <Error title={error} statusCode={404} />;

  return (
    <>
      <PageHead title={`${post.title} | ${post.community.name}`} />
      <div className="viewpost__background">
        <div className="viewpost__container">
          <PostBanner
            vote=""
            voteScore={post.voteScore}
            title={post.title}
            communityName={post.community.name}
          />
          <Layout>
            <Layout.Column>
              <PostView post={post} />
            </Layout.Column>

            {/* Seth's */}
            <Layout.Column>
              {/* check the props in both those files, but either way I wrote... */}
              {/* ... them in typescript, so you should get some autocomplete... */}
              {/* ... while typing out the props */}
              {/* always */}
              {/* /ViewCommunity/communityabout.tsx  */}
              <CommunityAbout
                description={post.community.name}
                createdOn=""
                memberCount={5}
                userMemberLevel=""
              />
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
};

Post.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
  const { communityName, postId } = ctx.query;
  console.log(communityName);

  try {
    const posts = await fetchIt("/posts");
    const [post] = posts.filter(({ _id }: { _id: string }) => postId === _id);
    if (!post) throw post;
    return { post };
  } catch (err) {
    return { error: `Post not found. Please try again` };
  }
};

export default Post;
