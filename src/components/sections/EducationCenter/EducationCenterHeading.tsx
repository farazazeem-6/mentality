import { motion } from "motion/react";
import { css, cx } from "styled-system/css";
import { button } from "styled-system/recipes";
import { FADE_UP_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import { ButtonVariant, ButtonSize } from "@/types/button.types";
import {
  EDUCATION_CENTER_DESCRIPTION,
  EDUCATION_CENTER_EYEBROW,
  EDUCATION_CENTER_HEADING_ACCENT,
  EDUCATION_CENTER_HEADING_MUTED,
  EDUCATION_CENTER_VIEW_ALL_HREF,
  EDUCATION_CENTER_VIEW_ALL_LABEL,
} from "@/constants/educationCenter.constants";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";

export function EducationCenterHeading() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_TRANSITION}
      className={css({
        gridColumn: "span 12",
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        alignItems: { base: "flex-start", md: "flex-end" },
        justifyContent: "space-between",
        gap: "6",
      })}
    >
      <div>
        <span
          className={css({
            fontSize: "xs",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "ink.500",
          })}
        >
          {EDUCATION_CENTER_EYEBROW}
        </span>
        <h2
          className={css({
            fontFamily: "display",
            fontWeight: "500",
            fontSize: { base: "3xl", sm: "4xl", md: "5xl" },
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            mt: "3",
          })}
        >
          <span className={css({ color: "ink.900" })}>{EDUCATION_CENTER_HEADING_ACCENT} </span>
          <span className={css({ color: "ink.500" })}>{EDUCATION_CENTER_HEADING_MUTED}</span>
        </h2>
        <p
          className={css({
            fontSize: "md",
            color: "ink.500",
            maxWidth: "lg",
            mt: "5",
            lineHeight: "1.6",
          })}
        >
          {EDUCATION_CENTER_DESCRIPTION}
        </p>
      </div>

      <a
        href={EDUCATION_CENTER_VIEW_ALL_HREF}
        className={cx(
          button({ variant: ButtonVariant.Ghost, size: ButtonSize.Md }),
          css({ flexShrink: "0" }),
        )}
      >
        {EDUCATION_CENTER_VIEW_ALL_LABEL}
        <ArrowRightIcon className={css({ width: "3.5", height: "3.5" })} />
      </a>
    </motion.div>
  );
}
