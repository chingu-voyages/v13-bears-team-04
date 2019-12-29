import React from "react";
import SubmitFormBodyTypes from "./submitformbodytypes";
import SubmitFormBodyContent from "./submitformbodycontent";
import SubmitFormBodyActions from "./submitformbodyactions";
import SubmitFormBodyNotify from "./submitformbodynotify";

const SubmitFormBody = () => (
  <div className="submit__form__body">
    <SubmitFormBodyTypes />
    <SubmitFormBodyContent />
    <SubmitFormBodyActions />
    <SubmitFormBodyNotify />
  </div>
);

export default SubmitFormBody;
