import React from "react";
import { ColorProps } from "./types";

function SvgCompactIcon(props: ColorProps) {
  const { primary, ...rest } = props;

  return (
    <svg viewBox="0 0 20 20" fill={primary || "#0079D3"} {...rest}>
      <path d="M1.75 5V1.75h16.5V5zm0 4.43V6.18h16.5v3.2zm0 8.87v-3.2h16.5v3.2zm0-4.43v-3.2h16.5v3.2z" />
    </svg>
  );
}

export default SvgCompactIcon;
