import React from "react";
import { isBrowser } from "react-device-detect";

import Layout from "../../components/Layout";
import SubmitForm from "./submitform";
import SubmitRules from "./submitrules";
import SubmitText from "./submittext";
import { CreatePostProvider } from "../../contexts/createpost";
import "./submit.scss";

export default function Submit({ isUserBrowser }) {
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
