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
import { useCheckMembership } from "../../../../hooks";

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
