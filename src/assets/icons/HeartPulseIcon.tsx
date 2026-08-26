import type { SVGProps } from "react";

export function HeartPulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 20C12 20 3.5 15.1 3.5 9.3C3.5 6.5 5.7 4.5 8.3 4.5C9.9 4.5 11.3 5.3 12 6.5C12.7 5.3 14.1 4.5 15.7 4.5C18.3 4.5 20.5 6.5 20.5 9.3C20.5 10 20.36 10.66 20.12 11.28"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.5H11L12.5 8.5L14 14L15.5 11.5H17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
