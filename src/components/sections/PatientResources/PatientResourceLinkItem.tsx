import { motion } from "motion/react";
import { css } from "styled-system/css";
import { FADE_UP_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import type { ResourceLink } from "@/types/section.types";

type PatientResourceLinkItemProps = {
  readonly resource: ResourceLink;
};

export function PatientResourceLinkItem({ resource }: PatientResourceLinkItemProps) {
  return (
    <motion.a
      href={resource.href}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_TRANSITION}
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "4",
        bg: "white",
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "black/[0.05]",
        boxShadow: "sm",
        p: "6",
        textDecoration: "none",
        transition: "background 0.2s ease",
        _hover: { bg: "ink.900/[0.02]" },
      })}
    >
      <div>
        <h3
          className={css({
            fontFamily: "display",
            fontWeight: "500",
            fontSize: "md",
            color: "ink.900",
          })}
        >
          {resource.label}
        </h3>
        <p
          className={css({
            fontSize: "sm",
            color: "ink.500",
            mt: "1.5",
          })}
        >
          {resource.description}
        </p>
      </div>
      <span
        className={css({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "9",
          height: "9",
          borderRadius: "full",
          bg: "ink.900/[0.05]",
          color: "ink.900",
          flexShrink: "0",
        })}
      >
        <ArrowRightIcon className={css({ width: "4", height: "4" })} />
      </span>
    </motion.a>
  );
}
