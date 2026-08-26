import { css } from "styled-system/css";
import { SERVICE_CARDS } from "@/constants/service.constants";
import { ServiceCardItem } from "./ServiceCardItem";

export function ServiceCards() {
  return (
    <div
      className={css({
        gridColumn: "span 12",
        display: "grid",
        gridTemplateColumns: { base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
        gap: "5",
        mt: "12",
      })}
    >
      {SERVICE_CARDS.map((card) => (
        <ServiceCardItem key={card.title} card={card} />
      ))}
    </div>
  );
}
