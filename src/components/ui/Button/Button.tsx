import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "styled-system/css";
import { button } from "styled-system/recipes";
import { ButtonSize, ButtonVariant } from "@/types/button.types";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly children: ReactNode;
};

export function Button({
  variant = ButtonVariant.Solid,
  size = ButtonSize.Md,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={cx(button({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}
