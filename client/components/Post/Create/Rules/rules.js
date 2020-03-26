import React from "react";
import SubmitRulesIcon from "./rulesicon";
import SubmitRulesItem from "./rulesitem";

const SubmitRules = () => (
  <div className="submit__rules">
    <div className="submit__rules__header">
      <SubmitRulesIcon />
      Posting to Reddit
    </div>
    <ol className="submit__rules__list">
      <SubmitRulesItem text="Remember the human" />
      <SubmitRulesItem text="Behave like you would in real life" />
      <SubmitRulesItem text="Look for the original source of content" />
      <SubmitRulesItem text="Search for duplicates before posting" />
      <SubmitRulesItem text="Read the community’s rules" />
    </ol>
  </div>
);

export default SubmitRules;
