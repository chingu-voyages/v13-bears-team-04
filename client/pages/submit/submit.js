import React from "react";
import SubmitRules from "./submitrules";
import SubmitText from "./submittext";
import "./submit.scss";

export default function Submit() {
  return (
    <div className="submit-container">
      <div className="submit__left"></div>
      <div className="submit__right">
        <SubmitRules />
        <SubmitText />
        {/* <StaticFooter /> */}
      </div>
    </div>
  );
}
