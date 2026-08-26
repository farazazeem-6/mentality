import { motion } from "motion/react";
import { css } from "styled-system/css";
import { FADE_UP_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import type { ServiceCard } from "@/types/section.types";
import { SERVICE_ICON_MAP } from "./serviceIconMap";

type ServiceCardItemProps = {
  readonly card: ServiceCard;
};

export function ServiceCardItem({ card }: ServiceCardItemProps) {
  const Icon = SERVICE_ICON_MAP[card.icon];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_TRANSITION}
      className={css({
        bg: "white",
        borderRadius: "12px",
        border: "1px solid",
        borderColor: "black/[0.05]",
        boxShadow: "sm",
        p: "6",
        display: "flex",
        flexDirection: "column",
        gap: "4",
      })}
    >
      <span
        className={css({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "11",
          height: "11",
          borderRadius: "full",
          bg: "brand.green/[0.25]",
          color: "ink.900",
          flexShrink: "0",
        })}
      >
        <Icon className={css({ width: "5", height: "5" })} />
      </span>
      <h3
        className={css({
          fontFamily: "display",
          fontWeight: "500",
          fontSize: "lg",
          color: "ink.900",
        })}
      >
        {card.title}
      </h3>
      <p
        className={css({
          fontSize: "sm",
          color: "ink.500",
          lineHeight: "1.6",
        })}
      >
        {card.description}
      </p>
    </motion.div>
  );
}
