import { motion } from "motion/react";
import { css } from "styled-system/css";
import { FADE_UP_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import {
  SERVICE_DESCRIPTION,
  SERVICE_EYEBROW,
  SERVICE_HEADING_ACCENT,
  SERVICE_HEADING_MUTED,
} from "@/constants/service.constants";

export function ServiceHeading() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_TRANSITION}
      className={css({
        gridColumn: { base: "span 12", md: "1 / span 7" },
      })}
    >
      <span
        className={css({
          fontSize: "xs",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "ink.500",
        })}
      >
        {SERVICE_EYEBROW}
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
        <span className={css({ color: "ink.900" })}>{SERVICE_HEADING_ACCENT} </span>
        <span className={css({ color: "ink.500" })}>{SERVICE_HEADING_MUTED}</span>
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
        {SERVICE_DESCRIPTION}
      </p>
    </motion.div>
  );
}
