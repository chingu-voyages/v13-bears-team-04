import React from "react";
import { ColorProps } from "./types";

function SvgLogoIcon(props: ColorProps) {
  const { primary, secondary, ...rest } = props;

  return (
    <svg viewBox="0 0 20 20" {...rest}>
      <circle fill={primary || "#FF4500"} cx={10} cy={10} r={10} />
      <path
        fill={secondary || "#FFF"}
        d="M16.67 10a1.46 1.46 0 00-2.47-1 7.12 7.12 0 00-3.85-1.23L11 4.65l2.14.45a1 1 0 10.13-.61L10.82 4a.31.31 0 00-.37.24l-.74 3.47a7.14 7.14 0 00-3.9 1.23 1.46 1.46 0 10-1.61 2.39 2.87 2.87 0 000 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a2.87 2.87 0 000-.44 1.46 1.46 0 00.81-1.33zm-10 1a1 1 0 111 1 1 1 0 01-1-1zm5.81 2.75a3.84 3.84 0 01-2.47.77 3.84 3.84 0 01-2.47-.77.27.27 0 01.38-.38A3.27 3.27 0 0010 14a3.28 3.28 0 002.09-.61.27.27 0 11.39.4zm-.18-1.71a1 1 0 111-1 1 1 0 01-1.01 1.04z"
      />
    </svg>
  );
}

export default SvgLogoIcon;
