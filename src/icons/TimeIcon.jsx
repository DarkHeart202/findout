export default function TimeIcon({
  className = "w-4 h-4",
  strokeWidth = "1.55957",
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_612_12605)">
        <path
          d="M7.79653 14.2965C11.3851 14.2965 14.2942 11.387 14.2942 7.7978C14.2942 4.20865 11.3851 1.29907 7.79653 1.29907C4.20795 1.29907 1.29883 4.20865 1.29883 7.7978C1.29883 11.387 4.20795 14.2965 7.79653 14.2965Z"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.79688 3.89899V7.79823L10.396 9.09797"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_612_12605">
          <rect width="15.5945" height="15.597" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
