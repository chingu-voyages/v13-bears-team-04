import React from "react";
import Layout from "../../components/Layout";
import SubmitForm from "./submitform";
import SubmitRules from "./submitrules";
import SubmitText from "./submittext";
import "./submit.scss";

export default function Submit() {
  return (
    <Layout cx="submit-container">
      <Layout.Column cx="submit__left">
        <SubmitForm />
      </Layout.Column>

      <Layout.Column>
        <SubmitRules />
        <SubmitText />
        {/* <StaticFooter /> */}
      </Layout.Column>
    </Layout>
  );
}
