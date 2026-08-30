import { SocialPlatform, type NavLink, type SocialLink } from "@/types/navigation.types";

export const FOOTER_TAGLINE = "Information and resources to help you manage your mental wellbeing.";

export const FOOTER_COLUMN_EXPLORE_LABEL = "Explore";
export const FOOTER_COLUMN_EXPLORE_LINKS: readonly NavLink[] = [
  { label: "service", href: "#service" },
  { label: "patient resources", href: "#patient-resources" },
  { label: "about us", href: "#about-us" },
  { label: "education center", href: "#education-center" },
];

export const FOOTER_COLUMN_SUPPORT_LABEL = "Support";
export const FOOTER_COLUMN_SUPPORT_LINKS: readonly NavLink[] = [
  { label: "find help", href: "#find-help" },
  { label: "crisis line", href: "#crisis-line" },
  { label: "contact us", href: "#contact-us" },
];

export const FOOTER_SOCIAL_LABEL = "Follow us";
export const FOOTER_SOCIAL_LINKS: readonly SocialLink[] = [
  { platform: SocialPlatform.Twitter, label: "Twitter", href: "#" },
  { platform: SocialPlatform.Instagram, label: "Instagram", href: "#" },
  { platform: SocialPlatform.LinkedIn, label: "LinkedIn", href: "#" },
  { platform: SocialPlatform.Facebook, label: "Facebook", href: "#" },
];

export const FOOTER_COPYRIGHT = "© 2024 mentality. All rights reserved.";
