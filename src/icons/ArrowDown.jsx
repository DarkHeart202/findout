import * as React from "react";

const SvgArrowDown = ({ className = "", strokeWidth = 1.2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 15 15"
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      d="m.6 6.881 6.881 6.345 6.345-6.88"
    />
  </svg>
);

export default SvgArrowDown;
