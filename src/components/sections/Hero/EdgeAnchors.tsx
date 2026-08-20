import { css } from "styled-system/css";
import { Pill } from "@/components/ui/Pill";
import {
  HERO_TAGLINE_LABEL,
  HERO_YEAR_LABEL,
  LANGUAGE_OPTION_PRIMARY,
  LANGUAGE_OPTION_SECONDARY,
} from "@/constants/hero.constants";

export function EdgeAnchors() {
  return (
    <>
      <div
        className={css({
          position: "absolute",
          top: "50%",
          right: { base: "4", md: "8", lg: "12" },
          transform: "translateY(-50%)",
          zIndex: "10",
          display: { base: "none", md: "block" },
        })}
      >
        <Pill>
          <span className={css({ color: "ink.900", fontWeight: "500" })}>
            {LANGUAGE_OPTION_PRIMARY}
          </span>
          <span className={css({ color: "ink.500", mx: "1" })}>—</span>
          <span className={css({ color: "ink.500" })}>{LANGUAGE_OPTION_SECONDARY}</span>
        </Pill>
      </div>

      <span
        className={css({
          position: "absolute",
          bottom: { base: "6", sm: "10" },
          left: { base: "6", md: "10", lg: "16" },
          zIndex: "10",
          fontSize: "xs",
          color: "ink.500",
        })}
      >
        {HERO_YEAR_LABEL}
      </span>

      <span
        className={css({
          position: "absolute",
          bottom: { base: "6", sm: "10" },
          right: { base: "6", md: "10", lg: "16" },
          zIndex: "10",
          fontSize: "xs",
          color: "ink.500",
        })}
      >
        {HERO_TAGLINE_LABEL}
      </span>
    </>
  );
}
