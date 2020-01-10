import React from "react";
import { CodeTypes } from "./types";

const Code = ({ attributes, children }: CodeTypes) => (
  <pre {...attributes}>
    <code>{children}</code>
  </pre>
);

export default Code;
