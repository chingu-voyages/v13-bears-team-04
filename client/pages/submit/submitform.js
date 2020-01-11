import React from "react";
import SubmitFormHeading from "./submitformheading";
import SubmitFormSelect from "./submitformselect";
import SubmitFormBody from "./submitformbody";

const SubmitForm = ({ isUserBrowser }) => (
  <div className="submit__form">
    <SubmitFormHeading />
    <SubmitFormSelect />
    <SubmitFormBody isUserBrowser={isUserBrowser} />
  </div>
);

export default SubmitForm;
