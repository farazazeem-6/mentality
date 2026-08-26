import { css } from "styled-system/css";
import { AboutUsContent } from "./AboutUsContent";
import { AboutUsMissionCard } from "./AboutUsMissionCard";

export function AboutUs() {
  return (
    <section
      id="about-us"
      className={css({
        position: "relative",
        width: "100%",
        bg: "bg.base",
        py: { base: "20", md: "28" },
      })}
    >
      <div
        className={css({
          maxWidth: "7xl",
          width: "100%",
          mx: "auto",
          px: { base: "8", md: "16", lg: "20" },
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          columnGap: { base: "4", md: "8" },
          rowGap: "10",
          alignItems: "center",
        })}
      >
        <AboutUsContent />
        <AboutUsMissionCard />
      </div>
    </section>
  );
}
