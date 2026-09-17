import type { NavLink } from "@/types/navigation";

export const BRAND_NAME = "mėntality";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "service", href: "#service" },
  { label: "patient resources", href: "#patient-resources" },
  { label: "about us", href: "#about-us" },
  { label: "education center", href: "#education-center" },
  { label: "contact us", href: "#contact-us" },
];

export const FIND_HELP_LABEL = "Find help";
export const FIND_HELP_HREF = "#contact-us";

export const GET_STARTED_LABEL = "Get started";
export const GET_STARTED_HREF = "#contact-us";

export * from "@/constants/site.constants";
