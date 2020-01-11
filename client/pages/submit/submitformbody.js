import React from "react";
import SubmitFormBodyTypes from "./submitformbodytypes";
import SubmitFormBodyContent from "./submitformbodycontent";
import SubmitFormBodyActions from "./submitformbodyactions";
import SubmitFormBodyNotify from "./submitformbodynotify";

const SubmitFormBody = ({ isUserBrowser }) => (
  <div className="submit__form__body">
    <SubmitFormBodyTypes />
    <SubmitFormBodyContent isUserBrowser={isUserBrowser} />
    <SubmitFormBodyActions />
    <SubmitFormBodyNotify />
  </div>
);

export default SubmitFormBody;
