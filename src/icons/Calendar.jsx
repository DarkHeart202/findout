import * as React from "react";
const SvgCalendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 21 23"
    className={props.className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.848 8.524h18.715M14.864 12.625h.01M10.204 12.625h.01M5.535 12.625h.01M14.864 16.706h.01M10.204 16.706h.01M5.535 16.706h.01M14.445.75v3.455M5.964.75v3.455"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.65 2.408H5.76C2.676 2.408.75 4.126.75 7.283v9.502c0 3.207 1.926 4.965 5.01 4.965h8.88c3.094 0 5.01-1.728 5.01-4.885V7.283c.01-3.157-1.907-4.875-5-4.875"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalendar;
