import React, { useCallback } from "react";
import { Leaf, Spoiler } from "./components";

export const useRenderElement = () =>
  useCallback(({ attributes, children, element }) => {
    switch (element.type) {
      case "heading":
        return <h2 {...attributes}>{children}</h2>;
      case "block-quote":
        return <blockquote {...attributes}>{children}</blockquote>;
      case "bulleted-list":
        return <ul {...attributes}>{children}</ul>;
      case "numbered-list":
        return <ol {...attributes}>{children}</ol>;
      case "list-item":
        return <li {...attributes}>{children}</li>;
      default:
        return <p {...attributes}>{children}</p>;
    }
  }, []);

export const useRenderLeaf = () =>
  useCallback(
    props =>
      props.leaf.spoiler ? <Spoiler {...props} /> : <Leaf {...props} />,
    []
  );
