import React from "react";
import { NextPage } from "next";
import Error from "next/error";

import Layout from "../Layout";
import PostList from "../PostList";
import ToTopButton from "../ToTopButton";
import fetchIt from "../../utils/fetch";
import { useSetCSSVariable, useCheckMembership } from "../../hooks";

import CommunityInfo from "./communityinfo";
import CommunityAbout from "./communityabout";
import CommunityRules from "./communityrules";
import CommunityMods from "./communitymods";
import CommunityCreatePost from "./communitycreatepost";
import { Props } from "./types";

const Community: NextPage<Props> = ({ error, community }) => {
  const userMemberLevel = useCheckMembership(community._id);
  useSetCSSVariable(community.theme);

  console.log(userMemberLevel);

  // async function handleMembership() {}

  if (error) return <Error title={error} statusCode={404} />;

  return (
    <div className="community-container">
      <CommunityInfo
        communityId={community._id}
        title={community.name}
        userMemberLevel={userMemberLevel}
      />

      <Layout>
        <Layout.Column>
          <CommunityCreatePost
            communityName={community.name}
            userMemberLevel={userMemberLevel}
          />
          <PostList endpoint={`/posts/${community._id}`} />
        </Layout.Column>

        <Layout.Column>
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

Community.getInitialProps = async ctx => {
  const { communityName } = ctx.query;

  let error = "";
  let community = {
    users: {
      members: [],
      moderators: [],
      administrators: [],
    },
    rules: [],
    posts: [],
    communitiesRelated: [],
    topics: [],
    theme: {
      "--community-theme-main": "",
      "--community-theme-text": "",
    },
    _id: "",
    name: "",
    description: "",
    communityType: "public",
    isOver18: false,
    createdOn: "",
    lastUpvoted: "",
  };

  try {
    const foundCommunity = await fetchIt(`/community/${communityName}`);
    if (!foundCommunity) throw "";
    community = foundCommunity;
  } catch (err) {
    error = `r/${communityName} not found. Try again`;
  }

  return { error, community };
};

export default Community;