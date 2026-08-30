import { css } from "styled-system/css";
import { CloverIcon } from "@/assets/icons/CloverIcon";
import { BRAND_NAME } from "@/constants/navigation.constants";
import {
  FOOTER_COLUMN_EXPLORE_LABEL,
  FOOTER_COLUMN_EXPLORE_LINKS,
  FOOTER_COLUMN_SUPPORT_LABEL,
  FOOTER_COLUMN_SUPPORT_LINKS,
  FOOTER_COPYRIGHT,
  FOOTER_SOCIAL_LINKS,
  FOOTER_TAGLINE,
} from "@/constants/footer.constants";
import { FooterLinkColumn } from "./FooterLinkColumn";
import { FooterSocialLinks } from "./FooterSocialLinks";

export function Footer() {
  return (
    <footer className={css({ width: "100%", bg: "ink.900" })}>
      <div
        className={css({
          maxWidth: "7xl",
          width: "100%",
          mx: "auto",
          px: { base: "8", md: "16", lg: "20" },
          pt: { base: "16", md: "20" },
          pb: { base: "24", md: "28" },
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          columnGap: { base: "4", md: "8" },
          rowGap: "12",
        })}
      >
        <div
          className={css({
            gridColumn: { base: "span 12", md: "1 / span 5" },
            display: "flex",
            flexDirection: "column",
            gap: "4",
          })}
        >
          <div className={css({ display: "flex", alignItems: "center", gap: "2.5" })}>
            <CloverIcon color="white" className={css({ width: "7", height: "7" })} />
            <span
              className={css({
                fontFamily: "display",
                fontSize: "lg",
                fontWeight: "500",
                color: "white",
              })}
            >
              {BRAND_NAME}
            </span>
          </div>
          <p
            className={css({
              fontSize: "sm",
              color: "white/60",
              maxWidth: "xs",
              lineHeight: "1.6",
            })}
          >
            {FOOTER_TAGLINE}
          </p>
          <FooterSocialLinks links={FOOTER_SOCIAL_LINKS} />
        </div>

        <div
          className={css({
            gridColumn: { base: "span 6", md: "7 / span 3" },
          })}
        >
          <FooterLinkColumn label={FOOTER_COLUMN_EXPLORE_LABEL} links={FOOTER_COLUMN_EXPLORE_LINKS} />
        </div>

        <div
          className={css({
            gridColumn: { base: "span 6", md: "10 / span 3" },
          })}
        >
          <FooterLinkColumn label={FOOTER_COLUMN_SUPPORT_LABEL} links={FOOTER_COLUMN_SUPPORT_LINKS} />
        </div>

        <div
          className={css({
            gridColumn: "span 12",
            borderTop: "1px solid",
            borderColor: "white/10",
            pt: "8",
          })}
        >
          <span className={css({ fontSize: "xs", color: "white/40" })}>{FOOTER_COPYRIGHT}</span>
        </div>
      </div>
    </footer>
  );
}
