import React from "react";
import { ColorProps } from "./types";

function SvgCardIcon(props: ColorProps) {
  const { primary, ...rest } = props;

  return (
    <svg viewBox="0 0 20 20" fill={primary || "#0079D3"} {...rest}>
      <path d="M1.75 9.38V1.75h16.5v7.63zm0 8.87v-7.63h16.5v7.63z" />
    </svg>
  );
}

export default SvgCardIcon;
