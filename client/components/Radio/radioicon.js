import React from "react";
import clsx from "clsx";

const RadioIcon = ({ isChecked, svgCx }) => {
  // create className
  const cx = clsx(svgCx, "radio", { "radio--checked": isChecked });

  // create inside of SVG
  const emptyPath = `M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667`;
  const fullPath = `M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667`;
  const path = isChecked ? fullPath : emptyPath;

  return (
    <svg
      className={cx}
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g fill="inherit">
        <path
          d={`${path} Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z`}
        />
      </g>
    </svg>
  );
};

export default RadioIcon;
