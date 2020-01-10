import React from "react";
import { LinkTypes } from "./types";

const Link = ({ attributes, children, element }: LinkTypes) => (
  <a href={element.url} {...attributes}>
    {children}
  </a>
);

export default Link;
