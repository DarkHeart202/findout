import * as React from "react";
const SvgArrowBtn = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 14"
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.9 7.9a.9.9 0 1 0 0-1.8v1.8M.264 6.364a.9.9 0 0 0 0 1.272l5.727 5.728a.9.9 0 0 0 1.273-1.273L2.173 7l5.091-5.091A.9.9 0 1 0 5.991.636zM18.9 7v-.9H.9v1.8h18z"
    />
  </svg>
);
export default SvgArrowBtn;
