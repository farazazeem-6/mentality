import { css } from "styled-system/css";
import { PatientResourcesHeading } from "./PatientResourcesHeading";
import { PatientResourcesStats } from "./PatientResourcesStats";
import { PatientResourceLinks } from "./PatientResourceLinks";

export function PatientResources() {
  return (
    <section
      id="patient-resources"
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
          rowGap: "10",
        })}
      >
        <div className={css({ gridColumn: { base: "span 12", md: "1 / span 5" } })}>
          <PatientResourcesHeading />
          <PatientResourcesStats />
        </div>
        <PatientResourceLinks />
      </div>
    </section>
  );
}
