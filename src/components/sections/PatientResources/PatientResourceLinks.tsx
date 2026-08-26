import { css } from "styled-system/css";
import { PATIENT_RESOURCE_LINKS } from "@/constants/patientResources.constants";
import { PatientResourceLinkItem } from "./PatientResourceLinkItem";

export function PatientResourceLinks() {
  return (
    <div
      className={css({
        gridColumn: { base: "span 12", md: "6 / span 7" },
        display: "grid",
        gridTemplateColumns: { base: "1fr", sm: "repeat(2, 1fr)" },
        gap: "5",
        alignContent: "start",
      })}
    >
      {PATIENT_RESOURCE_LINKS.map((resource) => (
        <PatientResourceLinkItem key={resource.label} resource={resource} />
      ))}
    </div>
  );
}
