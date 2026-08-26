import type { ResourceLink, StatItem } from "@/types/section.types";

export const PATIENT_RESOURCES_EYEBROW = "patient resources";
export const PATIENT_RESOURCES_HEADING_ACCENT = "Everything you need,";
export const PATIENT_RESOURCES_HEADING_MUTED = "in one place.";
export const PATIENT_RESOURCES_DESCRIPTION =
  "Practical resources for patients and the people supporting them — assessments, worksheets, and direct lines to help.";

export const PATIENT_RESOURCE_LINKS: readonly ResourceLink[] = [
  {
    label: "Self-assessment tools",
    description: "Short, validated screeners to help you understand what you're feeling.",
    href: "#self-assessment",
  },
  {
    label: "Care worksheets",
    description: "Printable guides for tracking mood, sleep, and daily habits.",
    href: "#worksheets",
  },
  {
    label: "Insurance & billing",
    description: "Plain-language answers about coverage, cost, and reimbursement.",
    href: "#billing",
  },
  {
    label: "Family & caregiver guide",
    description: "Support materials for the people around you, not just you.",
    href: "#caregiver-guide",
  },
];

export const PATIENT_RESOURCES_STATS: readonly StatItem[] = [
  { value: "24/7", label: "crisis line access" },
  { value: "40+", label: "self-guided tools" },
  { value: "98%", label: "patient satisfaction" },
];
