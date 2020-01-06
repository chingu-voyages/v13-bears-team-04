import React from "react";
import ToolbarOpts from "./toolbaropts";
import Button from "../../../Button";

type Options = {
  showRichOptions: boolean;
  toggleShowRichOptions: () => void;
};

const Toolbar = ({ showRichOptions, toggleShowRichOptions }: Options) => {
  return (
    <div className="editor__toolbar">
      {showRichOptions ? (
        <ToolbarOpts />
      ) : (
        <div className="editor__toolbar__mdheader">Markdown</div>
      )}
      <Button
        inverted
        size="tight"
        handleClick={toggleShowRichOptions}
        cx="editor__toolbar__toggler"
        text={`Switch to ${
          showRichOptions ? "markdown" : "Fancy Pants Editor"
        }`}
      />
    </div>
  );
};

export default Toolbar;
