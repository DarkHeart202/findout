export default function MusicIcon({
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
      <path
        d="M5.19771 14.2973C6.63315 14.2973 7.79679 13.1335 7.79679 11.6978C7.79679 10.2622 6.63315 9.09833 5.19771 9.09833C3.76228 9.09833 2.59863 10.2622 2.59863 11.6978C2.59863 13.1335 3.76228 14.2973 5.19771 14.2973Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.7959 11.6976V1.29962L12.3443 3.89911"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
