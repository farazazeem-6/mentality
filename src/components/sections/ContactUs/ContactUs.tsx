import { motion } from "motion/react";
import { css } from "styled-system/css";
import { button } from "styled-system/recipes";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { FADE_UP_TRANSITION, FADE_UP_VARIANTS } from "@/constants/animation.constants";
import {
  CONTACT_US_DESCRIPTION,
  CONTACT_US_EYEBROW,
  CONTACT_US_EMAIL,
  CONTACT_US_EMAIL_HREF,
  CONTACT_US_HEADING_ACCENT,
  CONTACT_US_HEADING_MUTED,
  CONTACT_US_HOURS,
  CONTACT_US_PHONE,
  CONTACT_US_PHONE_HREF,
  CONTACT_US_PRIMARY_ACTION_HREF,
  CONTACT_US_PRIMARY_ACTION_LABEL,
  CONTACT_US_SECONDARY_ACTION_HREF,
  CONTACT_US_SECONDARY_ACTION_LABEL,
} from "@/constants/site.constants";
import { ButtonSize, ButtonVariant } from "@/types/button.types";

const contactItems = [
  { label: "Email", value: CONTACT_US_EMAIL, href: CONTACT_US_EMAIL_HREF },
  { label: "Phone", value: CONTACT_US_PHONE, href: CONTACT_US_PHONE_HREF },
  { label: "Hours", value: CONTACT_US_HOURS, href: "#contact-us" },
];

export function ContactUs() {
  return (
    <section
      id="contact-us"
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
          rowGap: "8",
          alignItems: "center",
        })}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={FADE_UP_VARIANTS}
          transition={FADE_UP_TRANSITION}
          className={css({
            gridColumn: { base: "span 12", md: "1 / span 6" },
          })}
        >
          <span
            className={css({
              fontSize: "xs",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "ink.500",
            })}
          >
            {CONTACT_US_EYEBROW}
          </span>
          <h2
            className={css({
              fontFamily: "display",
              fontWeight: "500",
              fontSize: { base: "3xl", sm: "4xl", md: "5xl" },
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              mt: "3",
            })}
          >
            <span className={css({ color: "ink.900" })}>{CONTACT_US_HEADING_ACCENT} </span>
            <span className={css({ color: "ink.500" })}>{CONTACT_US_HEADING_MUTED}</span>
          </h2>
          <p
            className={css({
              fontSize: "md",
              color: "ink.500",
              maxWidth: "lg",
              mt: "5",
              lineHeight: "1.6",
            })}
          >
            {CONTACT_US_DESCRIPTION}
          </p>

          <div
            className={css({
              display: "flex",
              flexWrap: "wrap",
              gap: "4",
              mt: "8",
            })}
          >
            <a
              href={CONTACT_US_PRIMARY_ACTION_HREF}
              className={button({ variant: ButtonVariant.Solid, size: ButtonSize.Md })}
            >
              {CONTACT_US_PRIMARY_ACTION_LABEL}
            </a>
            <a
              href={CONTACT_US_SECONDARY_ACTION_HREF}
              className={button({ variant: ButtonVariant.Ghost, size: ButtonSize.Md })}
            >
              {CONTACT_US_SECONDARY_ACTION_LABEL}
              <ArrowRightIcon className={css({ width: "3.5", height: "3.5" })} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={FADE_UP_VARIANTS}
          transition={{ ...FADE_UP_TRANSITION, delay: 0.12 }}
          className={css({
            gridColumn: { base: "span 12", md: "7 / span 6" },
          })}
        >
          <div
            className={css({
              bg: "white",
              borderRadius: "3xl",
              border: "1px solid",
              borderColor: "rgba(26, 26, 26, 0.08)",
              boxShadow: "0 30px 60px -40px rgba(26, 26, 26, 0.35)",
              p: { base: "6", md: "8" },
            })}
          >
            <div className={css({ display: "grid", gap: "4" })}>
              {contactItems.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "3",
                    px: "4",
                    py: "3.5",
                    borderRadius: "2xl",
                    background: "rgba(237, 238, 245, 0.7)",
                    color: "ink.900",
                    transition: "all 0.2s ease",
                    _hover: { transform: "translateY(-1px)", background: "rgba(237, 238, 245, 1)" },
                  })}
                >
                  <span
                    className={css({
                      fontSize: "xs",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "ink.500",
                    })}
                  >
                    {label}
                  </span>
                  <span
                    className={css({
                      fontSize: "sm",
                      fontWeight: "500",
                      color: "ink.900",
                      textAlign: "right",
                    })}
                  >
                    {value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
