import React from "react";
import clsx from "clsx";
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
      fontFamily: leaf.code ? "monospace" : "inherit",
      backgroundColor: leaf.code ? "#eee" : "inherit",
      padding: leaf.code ? "3px" : "inherit",
      fontWeight: leaf.bold ? "bold" : "normal",
      fontStyle: leaf.italic ? "italic" : "normal",
      textDecoration: clsx(
        { "line-through": leaf.strike },
        { underline: leaf.underline }
      ),
      ...spoilerStyles,
    }}
    onClick={toggleSpoiler}
  >
    {children}
  </span>
);

export default Leaf;
