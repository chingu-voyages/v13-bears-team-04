import React from "react";
import { LeafTypes } from "./types";

const Leaf = ({
  attributes,
  children,
  leaf,
  spoilerStyles,
  toggleSpoiler,
}: LeafTypes) => (
  <span
    {...attributes}
    style={{
      fontWeight: leaf.bold ? "bold" : "normal",
      fontStyle: leaf.italic ? "italic" : "normal",
      textDecoration: leaf.strike ? "line-through" : "none",
      ...spoilerStyles,
    }}
    onClick={toggleSpoiler}
  >
    {children}
  </span>
);

export default Leaf;
