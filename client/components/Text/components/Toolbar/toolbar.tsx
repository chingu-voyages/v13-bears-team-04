import React from "react";
import ToolbarOpts from "./toolbaropts";
import Button from "../../../Button";
import { useCreatePost } from "../../../../contexts/createpost";

export default function Toolbar() {
  const { state, createPostDispatch } = useCreatePost();

  return (
    <div className="editor__toolbar">
      {state.isRich ? (
        <ToolbarOpts />
      ) : (
        <div className="editor__toolbar__mdheader">Markdown</div>
      )}
      <Button
        inverted
        size="tight"
        handleClick={() => createPostDispatch({ type: "TOGGLE_IS_RICH" })}
        cx="editor__toolbar__toggler"
        text={`Switch to ${state.isRich ? "markdown" : "Fancy Pants Editor"}`}
      />
    </div>
  );
}
