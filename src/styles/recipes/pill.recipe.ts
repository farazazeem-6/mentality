import { defineRecipe } from "@pandacss/dev";

export const pillRecipe = defineRecipe({
  className: "pill",
  base: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "full",
    fontFamily: "sans",
  },
  variants: {
    variant: {
      glass: {
        bg: "white/40",
        backdropFilter: "blur(12px)",
        border: "1px solid",
        borderColor: "white/50",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
      },
      solid: {
        bg: "white",
        border: "1px solid",
        borderColor: "black/[0.05]",
        boxShadow: "sm",
      },
    },
    size: {
      sm: {
        px: "4",
        py: "2",
        fontSize: "xs",
        gap: "2",
      },
      md: {
        px: "5",
        py: "2.5",
        fontSize: "sm",
        gap: "3",
      },
    },
  },
  defaultVariants: {
    variant: "glass",
    size: "sm",
  },
});
