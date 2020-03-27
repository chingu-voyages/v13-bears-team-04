import React from "react";
import { NextPage, NextPageContext } from "next";
import Error from "next/error";

import Layout from "../Layout";
import MessageBox from "../MessageBox";
import { PostList } from "../Post";
import ToTopButton from "../ToTopButton";
import fetchIt from "../../utils/fetch";
import { useCheckMembership, useMessageBox } from "../../hooks";

import CommunityAbout from "./communityabout";
import CommunityColors from "./communitycolors";
import CommunityCreatePost from "./communitycreatepost";
import CommunityInfo from "./communityinfo";
import CommunityMods from "./communitymods";
import CommunityRules from "./communityrules";
import { CommunityType } from "../../types/community";
import { PostType } from "../../types/post";

type Props = {
  error?: string;
  community?: CommunityType & { posts: PostType[] };
};

const Community: NextPage<Props> = ({ error, community }) => {
  if (error || !community) return <Error title={error} statusCode={404} />;

  const userMemberLevel = useCheckMembership(community._id);
  const { msg, status, setMessageBox, resetMessageBox } = useMessageBox();

  return (
    <div className="community-container">
      <CommunityInfo
        communityId={community._id}
        title={community.name}
        userMemberLevel={userMemberLevel}
        setMessageBox={setMessageBox}
      />

      <Layout>
        <Layout.Column>
          <MessageBox
            msg={msg}
            status={status}
            handleClose={resetMessageBox}
            mB={16}
          />
          <CommunityCreatePost
            communityName={community.name}
            userMemberLevel={userMemberLevel}
          />
          <PostList
            endpoint={`/posts/community/${community._id}`}
            posts={community.posts}
          />
        </Layout.Column>

        <Layout.Column>
          <CommunityColors
            theme={community.theme}
            communityId={community._id}
            userMemberLevel={userMemberLevel}
          />
          <CommunityAbout
            description={community.description}
            createdOn={community.createdOn}
            memberCount={community.users.members.length}
            userMemberLevel={userMemberLevel}
          />
          <CommunityRules
            communityName={community.name}
            rules={community.rules}
          />
          <CommunityMods
            moderators={community.users.moderators}
            administrators={community.users.administrators}
          />
          <ToTopButton />
        </Layout.Column>
      </Layout>
    </div>
  );
};

Community.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
  const { communityName } = ctx.query;

  try {
    const community = await fetchIt(`/community/${communityName}`);
    console.log(community);
    if (!community) throw community;
    return { community };
  } catch (err) {
    return { error: `r/${communityName} not found. Try again` };
  }
};

export default Community;
