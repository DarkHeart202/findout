export default function Container({
  children,
  className = "",

  pxsm = "6",
  pxlg = "8",
}) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-${pxsm} lg:${pxlg} ${className}`}
    >
      {children}
    </div>
  );
}
