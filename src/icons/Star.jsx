import * as React from "react";

const SvgStar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 20 20"
    className={props.className}
    {...props}
  >
    <path
      // الافتراضي إن الـ fill بتاخد اللون الأصفر، ولو بعت 'none' هتفضيها
      fill={props.fill || "#FFB950"}
      // الـ stroke هيكون مش موجود (undefined) كقيمة افتراضية عشان ميظهرش إطار لو مش طالبين
      stroke={props.stroke}
      strokeWidth={props.strokeWidth || "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.782 3.7a1.066 1.066 0 0 1 1.842 0l1.456 2.5c.15.259.403.443.695.506l2.828.612a1.065 1.065 0 0 1 .57 1.751l-1.928 2.158c-.2.224-.296.52-.266.818l.291 2.879a1.066 1.066 0 0 1-1.49 1.083l-2.648-1.167a1.07 1.07 0 0 0-.859 0l-2.648 1.167a1.066 1.066 0 0 1-1.49-1.083l.291-2.88a1.07 1.07 0 0 0-.265-.817L3.233 9.07a1.065 1.065 0 0 1 .57-1.75l2.826-.613c.293-.063.545-.247.696-.506z"
    />
  </svg>
);

export default SvgStar;
