import { motion } from "motion/react";
import { css } from "styled-system/css";
import { FADE_UP_DELAYED_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import { SEARCH_PLACEHOLDER } from "@/constants/hero.constants";
import { ChevronRightIcon } from "@/assets/icons/ChevronRightIcon";

export function SearchPill() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={FADE_UP_VARIANTS}
      transition={FADE_UP_DELAYED_TRANSITION}
      className={css({
        bg: "white",
        borderRadius: "6px",
        border: "1px solid",
        borderColor: "black/[0.05]",
        p: "1",
        pl: "4",
        display: "flex",
        alignItems: "center",
        boxShadow: "sm",
        maxWidth: "md",
        width: "100%",
        mt: "8",
      })}
    >
      <input
        type="text"
        placeholder={SEARCH_PLACEHOLDER}
        className={css({
          bg: "transparent",
          border: "none",
          outline: "none",
          flex: "1",
          fontFamily: "sans",
          fontSize: "sm",
          color: "ink.900",
          py: "2.5",
          px: "2",
          borderRadius: "4px",
          transition: "background 0.2s ease",
          _placeholder: { color: "ink.500" },
          _focus: { bg: "ink.900/[0.03]" },
        })}
      />
      <button
        type="button"
        aria-label="Submit search"
        className={css({
          bg: "ink.900",
          color: "white",
          width: "9",
          height: "9",
          borderRadius: "full",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
          flexShrink: "0",
          _hover: { bg: "black" },
          transition: "background 0.2s ease",
        })}
      >
        <ChevronRightIcon className={css({ width: "4", height: "4" })} />
      </button>
    </motion.div>
  );
}
