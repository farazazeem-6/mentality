import { css } from "styled-system/css";

export function DotIndicator() {
  return (
    <span
      className={css({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: { base: "16px", md: "42px", lg: "62px" },
        height: { base: "16px", md: "42px", lg: "62px" },
        border: "2px solid",
        borderColor: "ink.900",
        borderRadius: "full",
        verticalAlign: "middle",
        mx: "1",
      })}
    >
      <span
        className={css({
          width: "2",
          height: "2",
          borderRadius: "full",
          bg: "ink.900",
        })}
      />
    </span>
  );
}
