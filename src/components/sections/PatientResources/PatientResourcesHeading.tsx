import { motion } from "motion/react";
import { css } from "styled-system/css";
import { FADE_UP_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import {
  PATIENT_RESOURCES_DESCRIPTION,
  PATIENT_RESOURCES_EYEBROW,
  PATIENT_RESOURCES_HEADING_ACCENT,
  PATIENT_RESOURCES_HEADING_MUTED,
} from "@/constants/patientResources.constants";

export function PatientResourcesHeading() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_TRANSITION}
    >
      <span
        className={css({
          fontSize: "xs",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "ink.500",
        })}
      >
        {PATIENT_RESOURCES_EYEBROW}
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
        <span className={css({ color: "ink.900" })}>{PATIENT_RESOURCES_HEADING_ACCENT} </span>
        <span className={css({ color: "ink.500" })}>{PATIENT_RESOURCES_HEADING_MUTED}</span>
      </h2>
      <p
        className={css({
          fontSize: "md",
          color: "ink.500",
          maxWidth: "sm",
          mt: "5",
          lineHeight: "1.6",
        })}
      >
        {PATIENT_RESOURCES_DESCRIPTION}
      </p>
    </motion.div>
  );
}
