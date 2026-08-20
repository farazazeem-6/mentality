import { css } from "styled-system/css";
import { HERO_VIDEO_URL } from "@/constants/hero.constants";

export function HeroBackground() {
  return (
    <div
      className={css({
        position: "absolute",
        top: { base: "15vh", sm: "20vh" },
        left: "0",
        width: "100%",
        height: { base: "95vh", sm: "120vh" },
        zIndex: "0",
        pointerEvents: "none",
      })}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className={css({
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "1",
        })}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>
      <div
        className={css({
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: { base: "24", sm: "32" },
          backgroundImage: "linear-gradient(to bottom, {colors.bg.base}, transparent)",
        })}
      />
    </div>
  );
}
