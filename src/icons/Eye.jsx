import * as React from "react";
const SvgEye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 20 20"
    className={props.className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.471 9.943a.66.66 0 0 1 0-.482 7.54 7.54 0 0 1 2.88-3.351 8.1 8.1 0 0 1 4.35-1.259 8.1 8.1 0 0 1 4.351 1.259 7.54 7.54 0 0 1 2.88 3.35c.061.156.061.327 0 .483a7.54 7.54 0 0 1-2.88 3.35 8.1 8.1 0 0 1-4.35 1.26 8.1 8.1 0 0 1-4.35-1.26 7.54 7.54 0 0 1-2.88-3.35"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.702 12.127a2.425 2.425 0 1 0 0-4.85 2.425 2.425 0 0 0 0 4.85"
    />
  </svg>
);
export default SvgEye;
