import { css } from "styled-system/css";
import { NAV_LINKS } from "@/constants/navigation.constants";

type NavLinksProps = {
  readonly className?: string;
  readonly onLinkClick?: () => void;
};

export function NavLinks({ className, onLinkClick }: NavLinksProps) {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={
            className ??
            css({
              fontSize: "sm",
              textTransform: "capitalize",
              color: "ink.900",
              _hover: { color: "ink.500" },
              transition: "color 0.2s ease",
            })
          }
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
