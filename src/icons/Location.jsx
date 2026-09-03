import * as React from "react";
const SvgLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 15 15"
    className={props.className}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.932}
      clipPath="url(#Location_svg__a)"
    >
      <path d="m3.728 8.04 2.799 3.732a1.164 1.164 0 0 0 1.866 0l2.799-3.732a4.662 4.662 0 1 0-7.464 0" />
      <path d="M8.625 5.245a1.166 1.166 0 1 1-2.33 0 1.166 1.166 0 0 1 2.33 0M5.129 14.337H9.79" />
    </g>
    <defs>
      <clipPath id="Location_svg__a">
        <path fill="#fff" d="M0 0h14.92v14.92H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocation;
