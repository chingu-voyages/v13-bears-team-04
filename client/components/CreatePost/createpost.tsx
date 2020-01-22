import React from "react";
import { isBrowser } from "react-device-detect";

import Layout from "../Layout";
import Form from "./Form";
import Rules from "./Rules";
import Text from "./Text";

import { useForceSignIn } from "../../hooks";
import { CreatePostProvider } from "../../contexts/createpost";
import "./createpost.scss";

type Props = {
  communityId: string;
  communityName: string;
};

// handling of the post creation is located in the `formactionssubmit` file
export default function CreatePost({ communityId, communityName }: Props) {
  const isUserBrowser = isBrowser;
  useForceSignIn();

  return (
    <CreatePostProvider communityId={communityId} communityName={communityName}>
      <Layout cx="submit-container">
        <Layout.Column cx="submit__left">
          <Form isUserBrowser={isUserBrowser} />
        </Layout.Column>

        <Layout.Column>
          <Rules />
          <Text />
          {/* <StaticFooter /> */}
        </Layout.Column>
      </Layout>
    </CreatePostProvider>
  );
}
