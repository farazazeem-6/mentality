import { css } from "styled-system/css";
import type { NavLink } from "@/types/navigation.types";

type FooterLinkColumnProps = {
  readonly label: string;
  readonly links: readonly NavLink[];
};

export function FooterLinkColumn({ label, links }: FooterLinkColumnProps) {
  return (
    <div className={css({ display: "flex", flexDirection: "column", gap: "4" })}>
      <span
        className={css({
          fontSize: "xs",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "white/50",
        })}
      >
        {label}
      </span>
      <nav className={css({ display: "flex", flexDirection: "column", gap: "3" })}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={css({
              fontSize: "sm",
              textTransform: "capitalize",
              color: "white/80",
              _hover: { color: "brand.green" },
              transition: "color 0.2s ease",
            })}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
