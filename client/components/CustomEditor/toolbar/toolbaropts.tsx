import React from "react";
import { MarkButton, BlockButton } from "./buttons";

const ToolbarOpts = () => (
  <div className="editor__toolbar__options">
    <MarkButton format="bold" icon="bold" />
    <MarkButton format="italic" icon="italic" />
    <MarkButton format="code" icon="code" />
    <BlockButton format="heading" icon="heading" />
    <BlockButton format="block-quote" icon="quote-left" />
    <BlockButton format="numbered-list" icon="list-ol" />
    <BlockButton format="bulleted-list" icon="list-ul" />
  </div>
);

export default ToolbarOpts;
