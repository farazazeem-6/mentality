import type { SVGProps } from "react";

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M3.5 19C3.5 15.9624 5.96243 13.5 9 13.5C12.0376 13.5 14.5 15.9624 14.5 19"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M15.5 5.5C17.1569 5.5 18.5 6.84315 18.5 8.5C18.5 10.1569 17.1569 11.5 15.5 11.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M17 13.75C19.0261 14.1927 20.5 15.9036 20.5 19"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
