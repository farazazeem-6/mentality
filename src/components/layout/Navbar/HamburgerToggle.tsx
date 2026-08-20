import { motion } from "motion/react";
import { css } from "styled-system/css";
import { DrawerState } from "@/types/navigation.types";

type HamburgerToggleProps = {
  readonly state: DrawerState;
  readonly onToggle: () => void;
};

export function HamburgerToggle({ state, onToggle }: HamburgerToggleProps) {
  const isOpen = state === DrawerState.Open;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      className={css({
        display: { base: "inline-flex", md: "none" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5",
        width: "10",
        height: "10",
        cursor: "pointer",
        border: "none",
        bg: "transparent",
      })}
    >
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        className={css({
          display: "block",
          width: "6",
          height: "0.5",
          bg: "ink.900",
          borderRadius: "full",
        })}
      />
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        className={css({
          display: "block",
          width: "6",
          height: "0.5",
          bg: "ink.900",
          borderRadius: "full",
        })}
      />
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        className={css({
          display: "block",
          width: "6",
          height: "0.5",
          bg: "ink.900",
          borderRadius: "full",
        })}
      />
    </button>
  );
}
