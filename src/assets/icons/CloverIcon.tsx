import type { SVGProps } from "react";

export function CloverIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M16 16C16 11.5817 19.5817 8 24 8C24 12.4183 20.4183 16 16 16Z"
        fill="#1a1a1a"
      />
      <path
        d="M16 16C16 20.4183 12.4183 24 8 24C8 19.5817 11.5817 16 16 16Z"
        fill="#1a1a1a"
      />
      <path
        d="M16 16C11.5817 16 8 12.4183 8 8C12.4183 8 16 11.5817 16 16Z"
        fill="#1a1a1a"
      />
      <path
        d="M16 16C20.4183 16 24 19.5817 24 24C19.5817 24 16 20.4183 16 16Z"
        fill="#1a1a1a"
      />
      <circle cx="16" cy="16" r="2" fill="#1a1a1a" />
    </svg>
  );
}
