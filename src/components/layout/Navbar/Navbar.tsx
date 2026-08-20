import { useState } from "react";
import { css, cx } from "styled-system/css";
import { CloverIcon } from "@/assets/icons/CloverIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { button } from "styled-system/recipes";
import { ButtonSize, ButtonVariant } from "@/types/button.types";
import { DrawerState } from "@/types/navigation.types";
import {
  BRAND_NAME,
  FIND_HELP_HREF,
  FIND_HELP_LABEL,
  GET_STARTED_HREF,
  GET_STARTED_LABEL,
} from "@/constants/navigation.constants";
import { HamburgerToggle } from "./HamburgerToggle";
import { NavLinks } from "./NavLinks";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [drawerState, setDrawerState] = useState<DrawerState>(DrawerState.Closed);

  const toggleDrawer = () => {
    setDrawerState((current) =>
      current === DrawerState.Open ? DrawerState.Closed : DrawerState.Open,
    );
  };

  const closeDrawer = () => setDrawerState(DrawerState.Closed);

  return (
    <header
      className={css({
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "50",
        py: { base: "6", md: "10" },
        backgroundImage: "linear-gradient(to bottom, rgba(241, 241, 241, 0.8), transparent)",
        backdropFilter: "blur(2px)",
      })}
    >
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          maxWidth: "7xl",
          mx: "auto",
          px: "6",
          alignItems: "center",
        })}
      >
        <div
          className={css({
            gridColumn: { base: "span 8", md: "1 / span 3" },
            display: "flex",
            alignItems: "center",
            gap: "2.5",
          })}
        >
          <CloverIcon className={css({ width: "7", height: "7" })} />
          <span
            className={css({
              fontFamily: "display",
              fontSize: "lg",
              fontWeight: "500",
              color: "ink.900",
            })}
          >
            {BRAND_NAME}
          </span>
        </div>

        <nav
          className={css({
            display: { base: "none", md: "flex" },
            gridColumn: "4 / span 6",
            justifyContent: "center",
            alignItems: "center",
            gap: "8",
          })}
        >
          <NavLinks />
        </nav>

        <div
          className={css({
            gridColumn: { base: "span 4", md: "10 / span 3" },
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "5",
          })}
        >
          <a
            href={FIND_HELP_HREF}
            className={css({
              display: { base: "none", lg: "inline-block" },
              fontSize: "sm",
              color: "ink.900",
              _hover: { color: "ink.500" },
              transition: "color 0.2s ease",
            })}
          >
            {FIND_HELP_LABEL}
          </a>

          <a
            href={GET_STARTED_HREF}
            className={cx(
              button({ variant: ButtonVariant.Solid, size: ButtonSize.Sm }),
              css({ display: { base: "none", sm: "inline-flex" } }),
            )}
          >
            {GET_STARTED_LABEL}
            <ArrowRightIcon className={css({ width: "3.5", height: "3.5" })} />
          </a>

          <HamburgerToggle state={drawerState} onToggle={toggleDrawer} />
        </div>
      </div>

      <MobileDrawer state={drawerState} onLinkClick={closeDrawer} />
    </header>
  );
}
