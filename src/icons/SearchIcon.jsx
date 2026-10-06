import * as React from "react";
const SvgSearch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#5096FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20 20-3.111-3.111m2.222-5.333a7.555 7.555 0 1 1-15.11 0 7.555 7.555 0 0 1 15.11 0"
    />
  </svg>
);
export default SvgSearch;
