import { motion } from "motion/react";
import { css } from "styled-system/css";
import { FADE_UP_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import {
  HERO_HEADING_LINE_1_ACCENT,
  HERO_HEADING_LINE_1_MUTED,
  HERO_HEADING_LINE_2_MUTED,
  HERO_HEADING_LINE_3_PREFIX,
  HERO_HEADING_LINE_3_SUFFIX,
} from "@/constants/hero.constants";
import { DotIndicator } from "@/components/ui/DotIndicator";

export function HeroHeading() {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_TRANSITION}
      className={css({
        fontFamily: "display",
        fontWeight: "500",
        fontSize: { base: "3xl", sm: "5xl", md: "6xl", lg: "7xl" },
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
      })}
    >
      <span className={css({ color: "ink.900" })}>{HERO_HEADING_LINE_1_ACCENT} </span>
      <span className={css({ color: "ink.500" })}>{HERO_HEADING_LINE_1_MUTED}</span>
      <br />
      <span className={css({ color: "ink.500" })}>{HERO_HEADING_LINE_2_MUTED}</span>
      <br />
      <span className={css({ color: "ink.500" })}>{HERO_HEADING_LINE_3_PREFIX}</span>
      <DotIndicator />
      <span className={css({ color: "ink.500" })}>{HERO_HEADING_LINE_3_SUFFIX}</span>
    </motion.h1>
  );
}
