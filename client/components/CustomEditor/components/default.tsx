import React from "react";
import { DefaultTypes } from "./types";

const Default = ({ attributes, children }: DefaultTypes) => (
  <p {...attributes}>{children}</p>
);

export default Default;
