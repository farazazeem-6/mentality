import { css } from "styled-system/css";
import { HeroBackground } from "./HeroBackground";
import { HeroHeading } from "./HeroHeading";
import { SearchPill } from "./SearchPill";
import { EdgeAnchors } from "./EdgeAnchors";

export function Hero() {
  return (
    <section
      className={css({
        position: "relative",
        minHeight: { base: "110vh", sm: "140vh" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "hidden",
        bg: "bg.base",
      })}
    >
      <HeroBackground />

      <div
        className={css({
          maxWidth: "7xl",
          width: "100%",
          mx: "auto",
          px: { base: "8", md: "16", lg: "20" },
          position: "relative",
          zIndex: "10",
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          columnGap: { base: "4", md: "8" },
          pt: { base: "32", sm: "40" },
        })}
      >
        <div
          className={css({
            gridColumn: { base: "span 12", md: "2 / span 10" },
          })}
        >
          <HeroHeading />
          <SearchPill />
        </div>
      </div>

      <EdgeAnchors />
    </section>
  );
}
