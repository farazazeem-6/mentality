import type { Transition, Variants } from "motion/react";

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
