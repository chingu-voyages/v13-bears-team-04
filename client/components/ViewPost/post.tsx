import React from "react";
import { NextPage, NextPageContext } from "next";
import Error from "next/error";

import FooterBox from "../FooterBox";
import Layout from "../Layout";
import PageHead from "../PageHead";
import CommunityAbout from "../ViewCommunity/communityabout";
import ToTopButton from "../ToTopButton";
import PostBanner from "./postbanner";
import PostView from "./postview";

import fetchIt from "../../utils/fetch";
import { PostType } from "../../types/post";
import { useCheckMembership } from "../../hooks";

type Props = {
  error?: string;
  post?: PostType;
};

const Post: NextPage<Props> = ({ post, error }) => {
  if (error || !post) return <Error title={error} statusCode={404} />;

  // need to check the user level to determine if we should ...
  // ... display 'Create Post' button in CommunityAbout
  const userMemberLevel = useCheckMembership(post.community._id || "");

  return (
    <>
      <PageHead title={`${post.title} | ${post.community.name}`} />
      <div className="viewpost__background">
        <div className="viewpost__container">
          <PostBanner
            vote=""
            votes={post.votes}
            title={post.title}
            communityName={post.community.name}
          />
          <Layout>
            <Layout.Column>
              <PostView post={post} />
            </Layout.Column>

            <Layout.Column>
              <CommunityAbout
                description={post.community.name}
                createdOn={post.community.createdOn || ""}
                memberCount={
                  post.community.users
                    ? post.community.users.members.length
                    : 12345
                }
                userMemberLevel={userMemberLevel}
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
  const { postId } = ctx.query;

  try {
    const post = await fetchIt(`/posts/${postId}`);
    return { post };
  } catch (err) {
    return { error: `Post not found. Please try again` };
  }
};

export default Post;
