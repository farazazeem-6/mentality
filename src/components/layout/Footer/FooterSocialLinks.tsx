import { css } from "styled-system/css";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { InstagramIcon } from "@/assets/icons/InstagramIcon";
import { LinkedInIcon } from "@/assets/icons/LinkedInIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { SocialPlatform, type SocialLink } from "@/types/navigation";

type FooterSocialLinksProps = {
  readonly links: readonly SocialLink[];
};

const SOCIAL_ICONS: Record<SocialPlatform, typeof TwitterIcon> = {
  [SocialPlatform.Twitter]: TwitterIcon,
  [SocialPlatform.Instagram]: InstagramIcon,
  [SocialPlatform.LinkedIn]: LinkedInIcon,
  [SocialPlatform.Facebook]: FacebookIcon,
};

export function FooterSocialLinks({ links }: FooterSocialLinksProps) {
  return (
    <div className={css({ display: "flex", alignItems: "center", gap: "3" })}>
      {links.map((link) => {
        const Icon = SOCIAL_ICONS[link.platform];
        return (
          <a
            key={link.platform}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "9",
              height: "9",
              borderRadius: "full",
              border: "1px solid",
              borderColor: "white/10",
              color: "white/70",
              _hover: { color: "brand.green", borderColor: "brand.green" },
              transition: "color 0.2s ease, border-color 0.2s ease",
            })}
          >
            <Icon className={css({ width: "4", height: "4" })} />
          </a>
        );
      })}
    </div>
  );
}
