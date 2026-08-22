import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    fontFamily: "sans",
    fontWeight: "500",
    borderRadius: "full",
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
  },
  variants: {
    variant: {
      solid: {
        bg: "ink.900",
        color: "white",
        _hover: { bg: "black" },
      },
      ghost: {
        bg: "transparent",
        color: "ink.900",
        _hover: { color: "ink.500" },
      },
    },
    size: {
      sm: {
        fontSize: "sm",
        px: "7",
        py: "3",
      },
      md: {
        fontSize: "sm",
        px: "5",
        py: "2.5",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
