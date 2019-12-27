import React from "react";
import SubmitFormBodyContentTitle from "./submitformbodycontenttitle";
import SubmitFormBodyContentNotify from "./submitformbodycontentnotify";

const SubmitFormBodyContent = () => (
  <div className="submit__form__body__content">
    <SubmitFormBodyContentTitle />
    {/* the content here depends on what type is chosen */}
    {/* buttons */}
    <SubmitFormBodyContentNotify />
  </div>
);

export default SubmitFormBodyContent;
