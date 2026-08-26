import type { SVGProps } from "react";

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M21 11.5C21 16.1944 16.9706 20 12 20C10.6866 20 9.44004 19.7383 8.3 19.264L4 20L5.2 16.5C4.44 15.2 4 13.9 4 11.5C4 6.80558 8.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
