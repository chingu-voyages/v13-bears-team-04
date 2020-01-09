import React from "react";
import SubmitFormHeading from "./submitformheading";
import SubmitFormSelect from "./submitformselect";
import SubmitFormBody from "./submitformbody";

const SubmitForm = () => (
  <div className="submit__form">
    <SubmitFormHeading />
    <SubmitFormSelect />
    <SubmitFormBody />
  </div>
);

export default SubmitForm;
