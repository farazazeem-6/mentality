# CLAUDE.md

Rules for working in this repository.

## Stack

- Vite + React 19 + TypeScript
- Panda CSS for styling (no Tailwind, no CSS-in-JS runtime libraries)
- `motion/react` for animation
- Package manager: `pnpm`

## Project structure

- `src/components/ui/` — generic reusable components (e.g. `Button`, `Pill`). Each lives in its own folder with a component file and an `index.ts` barrel export.
- `src/components/layout/` — structural chrome shared across pages (e.g. `Navbar`).
- `src/components/sections/` — page-specific sections (e.g. `Hero`). Large sections are split into small sub-components in the same folder.
- `src/constants/` — all copy, URLs, labels, and other literal values. Named `<domain>.constants.ts`.
- `src/types/` — shared `type` and `enum` declarations. Named `<domain>.types.ts`.
- `src/styles/recipes/` — Panda `defineRecipe` definitions for multi-variant components, wired into `panda.config.ts` under `theme.extend.recipes`.
- `src/assets/icons/` — inline SVG icon components.

## Rules

1. **No hardcoded strings in components.** Copy, labels, URLs, and other literal values belong in `src/constants/`, not inline in JSX.
2. **No `any`.** Use precise types or generics. If a type is genuinely unknown, model it explicitly rather than escaping to `any`.
3. **Prefer `enum` and `type` over inline unions scattered across files.** Shared enums/types live in `src/types/`.
4. **No duplicated code.** Extract a shared component, hook, or util instead of copy-pasting JSX or logic. Three or more repeated lines is a signal to extract.
5. **Reusable UI gets variants, not forks.** If a component needs a visual variant, add it as a variant on the Panda recipe (`src/styles/recipes/`) rather than creating a near-duplicate component.
6. **Styling goes through Panda CSS.** Use the generated `css`, `cx`, and recipe functions from `styled-system/*`. Don't hand-write CSS files or use inline `style` props except for values that must be computed at runtime.
7. **One component per file, named after the component.** Folders get an `index.ts` barrel so imports read `@/components/ui/Button` rather than reaching into the file directly.
8. **Path aliases**: import app code via `@/*` and generated Panda output via `styled-system/*`. Avoid relative `../../..` chains across top-level folders.
9. **Keep components small and single-purpose.** If a component's JSX return exceeds ~80 lines, split it into sub-components in the same folder.
10. **No unfinished or speculative code.** Don't add props, variants, or abstractions for hypothetical future use — only what the current task needs.

## Commands

- `pnpm dev` — start the dev server
- `pnpm build` — typecheck (`tsc -b`) and build
- `pnpm lint` — run ESLint
- `npx panda codegen` — regenerate `styled-system/*` after changing `panda.config.ts` or adding recipes
