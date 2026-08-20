import { defineConfig } from "@pandacss/dev";
import { buttonRecipe } from "./src/styles/recipes/button.recipe";
import { pillRecipe } from "./src/styles/recipes/pill.recipe";

export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  exclude: [],

  jsxFramework: "react",

  strictTokens: false,

  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            green: { value: "#9fff00" },
          },
          bg: {
            base: { value: "#EDEEF5" },
          },
          ink: {
            900: { value: "#1a1a1a" },
            500: { value: "#8e8e8e" },
          },
        },
        fonts: {
          sans: { value: "'Inter', ui-sans-serif, system-ui, sans-serif" },
          display: { value: "'Outfit', ui-sans-serif, system-ui, sans-serif" },
        },
      },
      recipes: {
        button: buttonRecipe,
        pill: pillRecipe,
      },
    },
  },

  globalCss: {
    body: {
      bg: "bg.base",
      color: "zinc.900",
      fontFamily: "sans",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      margin: 0,
    },
    "*::selection": {
      bg: "brand.green",
      color: "black",
    },
  },

  outdir: "styled-system",
});
