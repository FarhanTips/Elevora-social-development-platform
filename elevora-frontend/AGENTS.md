<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Elevora Frontend

Single Next.js 16.4.3 app (App Router) in `elevora-frontend/`. The git root is the **parent** directory (`5. Assignment 08/`); run all npm commands from `elevora-frontend/`, but expect `git` to be run from the parent.

## Commands

- `npm run dev` — dev server (Turbopack). Also rewrites the generated block above; don't delete it from diffs.
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`), no path args needed.
- No test or typecheck script. Typecheck with `npx tsc --noEmit` — but route types (`LayoutProps<"/">` in `src/app/layout.tsx`) live in `.next/types`, so run `npm run dev` or `npm run build` once first or tsc will fail on missing generated types.
- `npm run build` — full verification (typechecks too).

## Stack quirks

- **React Compiler is on** (`reactCompiler: true` in `next.config.ts`): don't add `useMemo`/`useCallback`/`React.memo` manually.
- **Tailwind v4, CSS-first**: no `tailwind.config.*`. Theme tokens live in `@theme inline` in `src/app/globals.css`. CSS is compiled via the `@tailwindcss/turbopack` loader rule in `next.config.ts`.
- **shadcn v4, style `base-nova`** (`components.json`): primitives come from **`@base-ui/react`, not Radix**. Add components with `npx shadcn add <name>`; they land in `src/components/ui/`.
- **`cn` is the `cn` npm package**, re-exported from `src/lib/utils.ts` — not the usual `clsx` + `tailwind-merge` helper. Generated ui components import it as `import { cn } from "cn"`; app code uses `@/lib/utils`.
- Path alias `@/*` → `src/*`. App code lives in `src/app/`, shared components in `src/components/shared/` (camelCase filenames, e.g. `navBar.tsx`), images in `src/assets/`.
- `cacheComponents` and `partialPrefetching` are explicitly disabled in `next.config.ts` — don't enable them casually.

## Repo state

Early scaffolding: only `/` and layout/navbar exist. No tests, no CI, no env files (`.env*` is gitignored). README is stock create-next-app and references `app/page.tsx`, which is actually `src/app/page.tsx`.
