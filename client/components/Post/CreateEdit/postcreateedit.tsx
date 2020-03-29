import React from "react";

import FooterBox from "../../FooterBox";
import Form from "./Form";
import Info from "./Info";
import Layout from "../../Layout";
import Rules from "./Rules";
import Text from "./Text";

import { useForceSignIn } from "../../../hooks";
import { PostProvider } from "../postcontext";
import { PostType } from "../../../types/post";

type Props = {
  post?: PostType;
  communityId?: string;
  communityName?: string;
  isEdit?: boolean;
};

// handling of the post creation is located in the `formbodyactionssubmit` file
export default function PostCreateEdit(props: Props) {
  useForceSignIn();

  return (
    <PostProvider {...props}>
      <Layout cx="submit-container">
        <Layout.Column cx="submit__left">
          <Form />
        </Layout.Column>

        <Layout.Column>
          <Info />
          <Rules />
          <Text />
          <FooterBox />
        </Layout.Column>
      </Layout>
    </PostProvider>
  );
}
