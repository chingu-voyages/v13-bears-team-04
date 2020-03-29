import React from "react";
import SubmitFormBodyTypes from "./formbodytypes";
import SubmitFormBodyContent from "./formbodycontent";
import SubmitFormBodyActions from "./formbodyactions";
import SubmitFormBodyNotify from "./formbodynotify";

const SubmitFormBody = () => (
  <div className="submit__form__body">
    <SubmitFormBodyTypes />
    <SubmitFormBodyContent />
    <SubmitFormBodyActions />
    <SubmitFormBodyNotify />
  </div>
);

export default SubmitFormBody;
