import { motion } from "motion/react";
import { css } from "styled-system/css";
import { FADE_UP_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import type { ArticleCard } from "@/types/section.types";

type ArticleCardItemProps = {
  readonly article: ArticleCard;
};

export function ArticleCardItem({ article }: ArticleCardItemProps) {
  return (
    <motion.a
      href={article.href}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_TRANSITION}
      className={css({
        display: "flex",
        flexDirection: "column",
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
      <span
        className={css({
          fontSize: "xs",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "ink.500",
        })}
      >
        {article.category}
      </span>
      <h3
        className={css({
          fontFamily: "display",
          fontWeight: "500",
          fontSize: "lg",
          color: "ink.900",
          lineHeight: "1.4",
          mt: "3",
          flex: "1",
        })}
      >
        {article.title}
      </h3>
      <span
        className={css({
          fontSize: "sm",
          color: "ink.500",
          mt: "6",
        })}
      >
        {article.readTime}
      </span>
    </motion.a>
  );
}
