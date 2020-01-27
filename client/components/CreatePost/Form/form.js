import React from "react";
import SubmitFormHeading from "./formheading";
import SubmitFormSelect from "./formselect";
import SubmitFormBody from "./formbody";

const SubmitForm = () => (
  <div className="submit__form">
    <SubmitFormHeading />
    <SubmitFormSelect />
    <SubmitFormBody />
  </div>
);

export default SubmitForm;
