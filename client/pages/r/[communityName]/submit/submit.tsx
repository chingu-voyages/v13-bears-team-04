import React from "react";
import { NextPage } from "next";
import Error from "next/error";
import CreatePost from "../../../../components/CreatePost";
import fetchIt from "../../../../utils/fetch";

type Props = {
  error: string;
  communityId: string;
  communityName: string;
};

const Submit: NextPage<Props> = ({ error, communityId, communityName }) => {
  if (error) return <Error title={error} statusCode={404} />;

  return <CreatePost communityId={communityId} communityName={communityName} />;
};

Submit.getInitialProps = async ctx => {
  const name = ctx.query.communityName;

  let error = "";
  let communityId = "";
  let communityName = "";

  try {
    const foundCommunity = await fetchIt(`/community/${name}`);
    // eslint-disable-next-line no-throw-literal
    if (!foundCommunity) throw "";
    communityId = foundCommunity._id;
    communityName = foundCommunity.name;
  } catch (err) {
    error = `r/${name} not found. Try again`;
    communityName = "";
  }

  return { error, communityId, communityName };
};

export default Submit;
