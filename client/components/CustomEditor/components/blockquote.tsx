import React from "react";
import { BlockQuoteTypes } from "./types";

const BlockQuote = ({ attributes, children }: BlockQuoteTypes) => (
  <blockquote {...attributes}>{children}</blockquote>
);

export default BlockQuote;
