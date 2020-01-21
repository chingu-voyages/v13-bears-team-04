import React from "react";
import { isBrowser } from "react-device-detect";

import Layout from "../../components/Layout";
import SubmitForm from "./submitform";
import SubmitRules from "./submitrules";
import SubmitText from "./submittext";

import { useForceSignIn } from "../../hooks";
import { CreatePostProvider } from "../../contexts/createpost";
import "./submit.scss";

// handling of the post creation is located in the `submitformactionssubmit` file
export default function Submit({ isUserBrowser }) {
  useForceSignIn();

  return (
    <CreatePostProvider>
      <Layout cx="submit-container">
        <Layout.Column cx="submit__left">
          <SubmitForm isUserBrowser={isUserBrowser} />
        </Layout.Column>

        <Layout.Column>
          <SubmitRules />
          <SubmitText />
          {/* <StaticFooter /> */}
        </Layout.Column>
      </Layout>
    </CreatePostProvider>
  );
}

Submit.getInitialProps = () => {
  const isUserBrowser = isBrowser;
  return { isUserBrowser };
};
