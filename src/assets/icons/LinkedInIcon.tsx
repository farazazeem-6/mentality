import type { SVGProps } from "react";

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.5 10v6.25M7.5 7.5v.01M11.25 16.25V10M11.25 12.75c0-1.52 1.23-2.75 2.75-2.75s2.5 1 2.5 2.75v3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
