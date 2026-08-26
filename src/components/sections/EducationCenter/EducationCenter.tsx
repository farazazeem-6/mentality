import { css } from "styled-system/css";
import { EducationCenterHeading } from "./EducationCenterHeading";
import { ArticleCards } from "./ArticleCards";

export function EducationCenter() {
  return (
    <section
      id="education-center"
      className={css({
        position: "relative",
        width: "100%",
        bg: "white",
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
        })}
      >
        <EducationCenterHeading />
        <ArticleCards />
      </div>
    </section>
  );
}
