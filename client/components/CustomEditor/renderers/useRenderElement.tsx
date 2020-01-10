import React, { useCallback } from "react";
import { Code, Default } from "../components";

const useRenderElement = () =>
  useCallback(props => {
    switch (props.element.type) {
      case "code":
        return <Code {...props} />;
      default:
        return <Default {...props} />;
    }
  }, []);

export default useRenderElement;
