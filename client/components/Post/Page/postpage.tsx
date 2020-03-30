import React from "react";
import { NextPage, NextPageContext } from "next";
import Error from "next/error";

import FooterBox from "../../FooterBox";
import Layout from "../../Layout";
import PageHead from "../../PageHead";
import CommunityAbout from "../../ViewCommunity/communityabout";
import ToTopButton from "../../ToTopButton";
import PostPageBanner from "./postpagebanner";
import PostPageView from "./postpageview";

import fetchIt from "../../../utils/fetch";
import { PostType } from "../../../types/post";
import { useCheckMembership } from "../../../hooks";
import { VoteProvider } from "../../Votes";

type Props = {
  error?: string;
  post?: PostType;
};

const PostPage: NextPage<Props> = ({ post, error }) => {
  if (error || !post) return <Error title={error} statusCode={404} />;

  // need to check the user level to determine if we should ...
  // ... display 'Create Post' button in CommunityAbout
  const userMemberLevel = useCheckMembership(post.community._id || "");

  return (
    <>
      <PageHead title={`${post.title} | ${post.community.name}`} />
      <div className="viewpost__background">
        <div className="viewpost__container">
          <VoteProvider
            isOnPost
            votes={post.votes}
            postId={post._id}
            isDeleted={post.isDeleted}
          >
            <PostPageBanner
              title={post.title}
              communityName={post.community.name}
            />
            <Layout cx="viewpost__layout-column">
              <Layout.Column>
                <PostPageView post={post} />
              </Layout.Column>

              <Layout.Column>
                <CommunityAbout
                  description={post.community.name}
                  createdOn={post.community.createdOn || ""}
                  users={post.community.users || {}}
                  userMemberLevel={userMemberLevel}
                />
                {/* if the user is logged in */}
                {/* /ViewCommunity/communitymods.tsx  */}
                <FooterBox />
                <ToTopButton />
              </Layout.Column>
            </Layout>
          </VoteProvider>
        </div>
      </div>
    </>
  );
};

PostPage.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
  const { postId } = ctx.query;

  try {
    const post = await fetchIt(`/posts/${postId}`);
    return { post };
  } catch (err) {
    return { error: `Post not found. Please try again` };
  }
};

export default PostPage;
