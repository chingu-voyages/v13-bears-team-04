import React from "react";
import SubmitFormBodyTypes from "./formbodytypes";
import SubmitFormBodyContent from "./formbodycontent";
import SubmitFormBodyActions from "./formbodyactions";
import SubmitFormBodyNotify from "./formbodynotify";

const SubmitFormBody = ({ isUserBrowser }) => (
  <div className="submit__form__body">
    <SubmitFormBodyTypes />
    <SubmitFormBodyContent isUserBrowser={isUserBrowser} />
    <SubmitFormBodyActions />
    <SubmitFormBodyNotify />
  </div>
);

export default SubmitFormBody;
