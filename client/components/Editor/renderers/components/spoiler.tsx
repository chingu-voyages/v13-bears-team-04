import React, { useState } from "react";
import Leaf from "./leaf";
import { SpoilerTypes } from "./types";

const Spoiler = (props: SpoilerTypes) => {
  const [show, setShow] = useState(false);

  const spoilerStyles = {
    borderRadius: "3px",
    background: show ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,1)",
    cursor: "pointer",
  };

  return (
    <Leaf
      {...props}
      spoilerStyles={spoilerStyles}
      toggleSpoiler={() => setShow(state => !state)}
    />
  );
};

export default Spoiler;
