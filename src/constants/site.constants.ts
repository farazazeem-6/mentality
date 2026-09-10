import type { Transition, Variants } from "motion/react";

import { SocialPlatform, type NavLink, type SocialLink } from "@/types/navigation.types";
import type { ArticleCard, ResourceLink, ServiceCard, StatItem } from "@/types/section.types";
import { SectionIcon } from "@/types/section.types";

export const GOOGLE_FONTS_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap";

export const BRAND_NAME = "mėntality";

export const NAV_LINKS: readonly NavLink[] = [
  { label: "service", href: "#service" },
  { label: "patient resources", href: "#patient-resources" },
  { label: "about us", href: "#about-us" },
  { label: "education center", href: "#education-center" },
];

export const FIND_HELP_LABEL = "Find help";
export const FIND_HELP_HREF = "#find-help";

export const GET_STARTED_LABEL = "Get started";
export const GET_STARTED_HREF = "#get-started";

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

export const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4";

export const HERO_HEADING_LINE_1_ACCENT = "Remix: Mentality offers";
export const HERO_HEADING_LINE_1_MUTED = "information";
export const HERO_HEADING_LINE_2_MUTED = "and resources to help you manage";
export const HERO_HEADING_LINE_3_PREFIX = "your";
export const HERO_HEADING_LINE_3_SUFFIX = "mental wellbeing.";

export const SEARCH_PLACEHOLDER = "Ask me anything...";

export const LANGUAGE_OPTION_PRIMARY = "pl";
export const LANGUAGE_OPTION_SECONDARY = "en";

export const HERO_YEAR_LABEL = "2024";
export const HERO_TAGLINE_LABEL = "mental health tools";

export const SERVICE_EYEBROW = "service";
export const SERVICE_HEADING_ACCENT = "Support, shaped";
export const SERVICE_HEADING_MUTED = "around how you actually feel.";
export const SERVICE_DESCRIPTION =
  "From a quick check-in to ongoing guidance, mentality meets you where you are with tools built for real, everyday mental wellbeing.";

export const SERVICE_CARDS: readonly ServiceCard[] = [
  {
    icon: SectionIcon.Talk,
    title: "Talk it through",
    description: "Chat with our AI companion anytime you need to think out loud.",
  },
  {
    icon: SectionIcon.Guide,
    title: "Guided plans",
    description: "Personalized routines that adapt as your needs change week to week.",
  },
  {
    icon: SectionIcon.Community,
    title: "Community circles",
    description: "Join moderated groups with people navigating similar experiences.",
  },
  {
    icon: SectionIcon.Crisis,
    title: "Crisis support",
    description: "Fast access to a real person, day or night, when things feel urgent.",
  },
];

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

export const ABOUT_US_EYEBROW = "about us";
export const ABOUT_US_HEADING_ACCENT = "Built by people who";
export const ABOUT_US_HEADING_MUTED = "understand the weight of it.";
export const ABOUT_US_DESCRIPTION =
  "mentality started with a simple belief: mental health support should be as easy to reach as anything else in your life. We bring together clinicians, technologists, and people with lived experience to build tools that actually help.";

export const ABOUT_US_MISSION_LABEL = "Our mission";
export const ABOUT_US_MISSION_TEXT =
  "To make thoughtful, evidence-based mental health support available to anyone who needs it, without the wait and without the stigma.";

export const ABOUT_US_STAT_YEAR_VALUE = "2024";
export const ABOUT_US_STAT_YEAR_LABEL = "founded";
export const ABOUT_US_STAT_USERS_VALUE = "120k+";
export const ABOUT_US_STAT_USERS_LABEL = "people supported";

export const EDUCATION_CENTER_EYEBROW = "education center";
export const EDUCATION_CENTER_HEADING_ACCENT = "Learn at your";
export const EDUCATION_CENTER_HEADING_MUTED = "own pace.";
export const EDUCATION_CENTER_DESCRIPTION =
  "Clear, well-researched articles on anxiety, sleep, relationships, and more — written with clinicians, for real life.";

export const EDUCATION_CENTER_VIEW_ALL_LABEL = "View all articles";
export const EDUCATION_CENTER_VIEW_ALL_HREF = "#education-articles";

export const EDUCATION_ARTICLES: readonly ArticleCard[] = [
  {
    category: "Anxiety",
    title: "Understanding the physical signs of anxiety",
    readTime: "5 min read",
    href: "#article-anxiety-signs",
  },
  {
    category: "Sleep",
    title: "Why your sleep schedule affects your mood more than you think",
    readTime: "6 min read",
    href: "#article-sleep-mood",
  },
  {
    category: "Relationships",
    title: "Setting boundaries without the guilt",
    readTime: "4 min read",
    href: "#article-boundaries",
  },
];

export const FADE_UP_TRANSITION: Transition = {
  duration: 0.8,
};

export const FADE_UP_DELAYED_TRANSITION: Transition = {
  duration: 0.8,
  delay: 0.15,
};

export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export const DRAWER_TRANSITION: Transition = {
  duration: 0.35,
  ease: [0.16, 1, 0.3, 1],
};
