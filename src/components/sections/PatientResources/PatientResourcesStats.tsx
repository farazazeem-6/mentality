import { css } from "styled-system/css";
import { PATIENT_RESOURCES_STATS } from "@/constants/patientResources.constants";

export function PatientResourcesStats() {
  return (
    <div
      className={css({
        display: "flex",
        flexWrap: "wrap",
        gap: "8",
        mt: "10",
      })}
    >
      {PATIENT_RESOURCES_STATS.map((stat) => (
        <div key={stat.label}>
          <p
            className={css({
              fontFamily: "display",
              fontWeight: "500",
              fontSize: "3xl",
              color: "ink.900",
            })}
          >
            {stat.value}
          </p>
          <p
            className={css({
              fontSize: "sm",
              color: "ink.500",
              mt: "1",
            })}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
