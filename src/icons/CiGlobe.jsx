import * as React from "react";
const SvgCiGlobe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12h5m4-9a9 9 0 1 0 0 18m-4-9h8m-8 0c0 4.97 1.79 9 4 9m-4-9c0-4.97 1.79-9 4-9m0 18c2.21 0 4-4.03 4-9m-4-9a9 9 0 0 1 0 18m0-18c2.21 0 4 4.03 4 9m0 0h5"
    />
  </svg>
);
export default SvgCiGlobe;
