import * as React from "react";
const SvgVector = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 19 22"
    className={props.className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.732 7.172C17.61 2.226 13.295 0 9.505 0h-.01C5.716 0 1.392 2.216.268 7.161c-1.253 5.524 2.13 10.201 5.191 13.145a5.82 5.82 0 0 0 4.046 1.638 5.78 5.78 0 0 0 4.036-1.638c3.061-2.944 6.444-7.61 5.191-13.134m-9.227 5.363a3.371 3.371 0 1 1 0-6.743 3.371 3.371 0 0 1 0 6.743"
    />
  </svg>
);
export default SvgVector;
