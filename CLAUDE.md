# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

A Next.js (App Router) companion web app for a "Battle Game" project. It's a data-preview/testing frontend: it fetches unit ("mech") data from a separate Node.js API and renders it. Per `README.md`, it's meant to run alongside a separate node-js repo that provides the data, and is early-stage (no auth yet; TODOs include app-driven unit stat updates and authentication).

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next`'s core-web-vitals + typescript configs). Note: as of Next.js 16, `next build` no longer runs the linter automatically — run `npm run lint` separately.
- `npx tsc --noEmit` — type-check only (no test runner is configured in this repo)

## Architecture

- **App Router** (`app/`): `app/layout.tsx` is the root layout (Geist fonts, global styles). `app/page.tsx` is the home page and the only real route. `app/page_.tsx` is the original unmodified `create-next-app` boilerplate page kept for reference — it is not wired into routing (the App Router only picks up `page.tsx`).
- **Components** (`src/components/`): plain presentational components (`Header`, `Footer`, `UnitTable`). `UnitTable` is an async Server Component that awaits data fetching directly in the component body (no client-side fetching library).
- **Data layer** (`src/server/getMechs.ts`): server-only fetch helper. `getMechs()` hits a hardcoded `http://localhost:8080/mechs` endpoint (the sibling node-js API), swallows errors internally (catches and `console.error`s, returning `undefined` rather than throwing), and returns typed `UnitType[]` data. Callers must handle the `undefined` case.
- **Path aliases** (`tsconfig.json`): `@/*` → `src/*`, plus explicit `@/components`, `@/styles`, `@/server` aliases. These are defined as `paths` relative to the tsconfig location (no `baseUrl` — it was intentionally removed since TypeScript 6 deprecates `baseUrl`; see `node_modules/next/dist/lib/typescript/getTypeScriptConfiguration.js` for Next's own migration handling of this).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` (see `postcss.config.mjs`), with theme tokens defined in `app/globals.css` using `@theme inline` (supports light/dark via `prefers-color-scheme`). `src/styles/` exists as an alias target but is currently empty.

## Important notes

- This repo pins a pre-release/ahead-of-training-data version of Next.js (`16.2.10`). Per `AGENTS.md`, conventions and APIs may not match what you already know — consult the docs vendored at `node_modules/next/dist/docs/` before relying on training data, and watch for deprecation notices (e.g. the `baseUrl` situation above).
- There is no test suite configured yet.
