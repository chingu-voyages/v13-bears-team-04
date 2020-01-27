import React from "react";
import { ColorProps } from "./types";

function SvgClassicIcon(props: ColorProps) {
  const { primary, ...rest } = props;

  return (
    <svg viewBox="0 0 20 20" fill={primary || "#0079D3"} {...rest}>
      <path d="M1.75 6.6V1.75h16.5V6.6zm0 5.83V7.57h16.5v4.86zm0 5.82V13.4h16.5v4.85z" />
    </svg>
  );
}

export default SvgClassicIcon;
