import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "styled-system/css";
import { pill } from "styled-system/recipes";
import { PillSize, PillVariant } from "@/types/pill.types";

type PillProps = HTMLAttributes<HTMLDivElement> & {
  readonly variant?: PillVariant;
  readonly size?: PillSize;
  readonly children: ReactNode;
};

export function Pill({
  variant = PillVariant.Glass,
  size = PillSize.Sm,
  className,
  children,
  ...rest
}: PillProps) {
  return (
    <div className={cx(pill({ variant, size }), className)} {...rest}>
      {children}
    </div>
  );
}
