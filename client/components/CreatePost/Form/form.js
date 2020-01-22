import React from "react";
import SubmitFormHeading from "./formheading";
import SubmitFormSelect from "./formselect";
import SubmitFormBody from "./formbody";

const SubmitForm = ({ isUserBrowser }) => (
  <div className="submit__form">
    <SubmitFormHeading />
    <SubmitFormSelect />
    <SubmitFormBody isUserBrowser={isUserBrowser} />
  </div>
);

export default SubmitForm;
