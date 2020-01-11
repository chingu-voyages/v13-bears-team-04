import React from "react";
import Leaf from "./leaf";
import { CodeTypes } from "./types";

const Code = (props: CodeTypes) => (
  <code {...props.attributes}>
    <Leaf {...props} />
  </code>
);

export default Code;
