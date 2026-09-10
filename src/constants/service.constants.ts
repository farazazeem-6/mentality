import { SectionIcon } from "@/types/section.types";
import type { ServiceCard } from "@/types/section.types";

export * from "@/constants/site.constants";

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
