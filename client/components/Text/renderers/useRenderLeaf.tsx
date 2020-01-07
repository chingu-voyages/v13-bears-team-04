import React, { useCallback } from "react";
import { Spoiler, Leaf } from "../components";

const useRenderLeaf = () =>
  useCallback(
    props =>
      props.leaf.spoiler ? <Spoiler {...props} /> : <Leaf {...props} />,
    []
  );

export default useRenderLeaf;
