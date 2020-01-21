import React from "react";
import { LinkTypes } from "./types";

const Link = ({ attributes, children, element }: LinkTypes) => (
  <a href={element.url} {...attributes} rel="noopener noreferrer">
    {children}
  </a>
);

export default Link;
