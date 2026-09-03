import * as React from "react";
const SvgFamiconsDiamondOutline = (props) => (
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
      strokeWidth={1.5}
      d="M2.25 8.25h19.5m-20.09.572L11.4 21.453a.76.76 0 0 0 1.202 0l9.739-12.63a.77.77 0 0 0 .044-.88l-3.303-5.332a.76.76 0 0 0-.646-.361H5.565a.76.76 0 0 0-.646.361L1.616 7.943a.77.77 0 0 0 .044.88"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.75 3 16.5 8.25m0 0-4.5-6-4.5 6m9 0L12 21 7.5 8.25M5.25 3 7.5 8.25"
    />
  </svg>
);
export default SvgFamiconsDiamondOutline;
