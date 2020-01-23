import React from "react";
import { MarkButton, BlockButton } from "./buttons";

const Divider = () => <div className="slate__toolbar__options__divider" />;

const ToolbarOpts = () => (
  <div className="slate__toolbar__options">
    <MarkButton format="bold" icon="bold" />
    <MarkButton format="italic" icon="italic" />
    <MarkButton format="underline" icon="underline" />
    <MarkButton format="strike" icon="strikethrough" />
    <MarkButton format="code" icon="code" />
    <Divider />
    <BlockButton format="heading" icon="heading" />
    <BlockButton format="block-quote" icon="quote-left" />
    <BlockButton format="numbered-list" icon="list-ol" />
    <BlockButton format="bulleted-list" icon="list-ul" />
    <BlockButton format="code-block" icon={["square", "code"]} />
  </div>
);

export default ToolbarOpts;
