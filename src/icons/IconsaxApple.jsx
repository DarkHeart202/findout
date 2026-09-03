import * as React from "react";
const SvgIconsaxApple = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 24 24"
    className={props.className}
    {...props}
  >
    <g clipPath="url(#iconsax-apple_svg__a)">
      <mask
        id="iconsax-apple_svg__b"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M23.402 0H.002v23.4h23.4z" />
      </mask>
      <g
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        mask="url(#iconsax-apple_svg__b)"
      >
        <path d="M19.67 19.728c.67-1.022.92-1.544 1.43-2.69-3.768-1.43-4.37-6.8-.647-8.854-1.135-1.43-2.735-2.259-4.245-2.259-1.09 0-1.839.284-2.509.545-.567.216-1.078.409-1.713.409-.682 0-1.283-.216-1.919-.443-.692-.25-1.419-.51-2.327-.51-1.691 0-3.496 1.032-4.642 2.803-1.612 2.497-1.328 7.174 1.271 11.169.93 1.43 2.18 3.03 3.803 3.053.68.012 1.123-.193 1.611-.408.557-.25 1.158-.522 2.214-.522 1.055-.012 1.646.272 2.202.522.477.215.908.42 1.578.408 1.646-.022 2.962-1.793 3.893-3.223M15.969.25c.182 1.249-.33 2.486-.999 3.348-.715.931-1.964 1.658-3.167 1.612-.215-1.203.34-2.44 1.022-3.269.76-.908 2.043-1.612 3.144-1.691" />
      </g>
    </g>
    <defs>
      <clipPath id="iconsax-apple_svg__a">
        <path fill="#fff" d="M0 0h23.4v23.4H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconsaxApple;
