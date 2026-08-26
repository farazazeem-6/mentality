import { SectionIcon } from "@/types/section.types";
import type { ServiceCard } from "@/types/section.types";

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
