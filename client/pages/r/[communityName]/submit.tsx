import React from "react";
import { NextPage, NextPageContext } from "next";
import Error from "next/error";

import { PostCreate } from "../../../components/Post";
import fetchIt from "../../../utils/fetch";
import { CommunityType } from "../../../types/community";

type Props = {
  error?: string;
  communityId?: string;
  communityName?: string;
};

const Submit: NextPage<Props> = ({ error, communityId, communityName }) => {
  if (error) return <Error title={error} statusCode={404} />;

  return <PostCreate communityId={communityId} communityName={communityName} />;
};

Submit.getInitialProps = async ({ query }: NextPageContext) => {
  try {
    const { communityName } = query;

    const url = `/community/${communityName}`;
    const community: CommunityType = await fetchIt(url);
    if (!community) {
      throw new Error({
        message: `Community (${communityName}) not found`,
        statusCode: 404,
      });
    }

    return {
      communityId: community._id,
      communityName: community.name,
    };
  } catch (err) {
    console.log(err);
    return { error: err.message };
  }
};

export default Submit;
