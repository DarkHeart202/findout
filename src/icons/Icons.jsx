import * as React from "react";
const SvgIcons = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 18 18"
    className={props.className}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.097}
      clipPath="url(#Icons_svg__a)"
    >
      <path d="m4.385 9.458 3.292 4.39a1.37 1.37 0 0 0 2.196 0l3.292-4.39a5.484 5.484 0 1 0-8.78 0" />
      <path d="M10.146 6.17a1.371 1.371 0 1 1-2.742 0 1.371 1.371 0 0 1 2.742 0M6.033 16.864h5.484" />
    </g>
    <defs>
      <clipPath id="Icons_svg__a">
        <path fill="#fff" d="M0 0h17.55v17.55H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcons;
