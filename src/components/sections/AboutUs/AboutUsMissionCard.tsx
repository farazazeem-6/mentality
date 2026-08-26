import { motion } from "motion/react";
import { css } from "styled-system/css";
import { FADE_UP_DELAYED_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import {
  ABOUT_US_MISSION_LABEL,
  ABOUT_US_MISSION_TEXT,
  ABOUT_US_STAT_USERS_LABEL,
  ABOUT_US_STAT_USERS_VALUE,
  ABOUT_US_STAT_YEAR_LABEL,
  ABOUT_US_STAT_YEAR_VALUE,
} from "@/constants/aboutUs.constants";

export function AboutUsMissionCard() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_DELAYED_TRANSITION}
      className={css({
        gridColumn: { base: "span 12", md: "8 / span 5" },
        bg: "ink.900",
        borderRadius: "16px",
        p: { base: "8", md: "10" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10",
      })}
    >
      <div>
        <span
          className={css({
            fontSize: "xs",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "brand.green",
          })}
        >
          {ABOUT_US_MISSION_LABEL}
        </span>
        <p
          className={css({
            fontFamily: "display",
            fontWeight: "500",
            fontSize: "xl",
            color: "white",
            lineHeight: "1.5",
            mt: "3",
          })}
        >
          {ABOUT_US_MISSION_TEXT}
        </p>
      </div>

      <div className={css({ display: "flex", gap: "8" })}>
        <div>
          <p
            className={css({
              fontFamily: "display",
              fontWeight: "500",
              fontSize: "2xl",
              color: "white",
            })}
          >
            {ABOUT_US_STAT_YEAR_VALUE}
          </p>
          <p className={css({ fontSize: "sm", color: "white/60", mt: "1" })}>
            {ABOUT_US_STAT_YEAR_LABEL}
          </p>
        </div>
        <div>
          <p
            className={css({
              fontFamily: "display",
              fontWeight: "500",
              fontSize: "2xl",
              color: "white",
            })}
          >
            {ABOUT_US_STAT_USERS_VALUE}
          </p>
          <p className={css({ fontSize: "sm", color: "white/60", mt: "1" })}>
            {ABOUT_US_STAT_USERS_LABEL}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
