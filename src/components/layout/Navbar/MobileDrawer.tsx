import { AnimatePresence, motion } from "motion/react";
import { css } from "styled-system/css";
import { DRAWER_TRANSITION } from "@/constants/animation.constants";
import { DrawerState } from "@/types/navigation.types";
import { NavLinks } from "./NavLinks";

type MobileDrawerProps = {
  readonly state: DrawerState;
  readonly onLinkClick: () => void;
};

export function MobileDrawer({ state, onLinkClick }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {state === DrawerState.Open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={DRAWER_TRANSITION}
          className={css({
            display: { base: "block", md: "none" },
            overflow: "hidden",
            bg: "white/90",
            backdropFilter: "blur(12px)",
            borderBottomRadius: "2xl",
            mx: "4",
          })}
        >
          <nav
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "5",
              px: "8",
              py: "8",
            })}
          >
            <NavLinks
              onLinkClick={onLinkClick}
              className={css({
                fontSize: "md",
                textTransform: "lowercase",
                color: "ink.900",
              })}
            />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
