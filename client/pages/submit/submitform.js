import React from "react";
import SubmitFormHeading from "./submitformheading";
import SubmitFormSelect from "./submitformselect";
import SubmitFormBody from "./submitformbody";

export default function SubmitForm() {
  // function handleSubmit() {
  //   console.log("processing...");
  // }

  return (
    <div className="submit__form">
      <SubmitFormHeading />
      <SubmitFormSelect />
      <SubmitFormBody />
    </div>
  );
}
