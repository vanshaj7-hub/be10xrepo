# Product Designer Portfolio

A hyper-modern personal portfolio built with **Next.js 15**, **Material UI v6**, and **TypeScript**. Features a light-first design with dark mode toggle, project case study modals, and a contact form powered by Resend.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) |
| `CONTACT_TO_EMAIL` | Your email — receives form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend (falls back to `onboarding@resend.dev` if omitted) |
| `NEXT_PUBLIC_SITE_URL` | Production URL for Open Graph metadata (e.g. `https://yourdomain.com`) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (e.g. `https://xxxx.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable key (`sb_publishable_...`) from Settings → API Keys |

Without `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, the contact form still works in development but logs submissions to the server console instead of sending email.

When Supabase is configured, contact form submissions are saved to the `contact_submissions` table before optional email delivery.

## Editing content

All portfolio content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts):

- `siteConfig` — name, title, email, tagline, location, avatar
- `sectionCopy` — section titles and subtitles (including dynamic experience years)
- `aboutContent` — bio and design philosophy
- `skillCategories` — skills grouped by category
- `projects` — case studies (cover image, problem, process, outcomes)
- `experiences` — work history timeline
- `socialLinks` — LinkedIn, Behance, Dribbble, email
- `testimonials` — optional quotes
- `formMessages` — contact form success/error copy

Types are defined in [`src/data/portfolio.types.ts`](src/data/portfolio.types.ts).

Replace placeholder images by updating URLs in `portfolio.ts`, or add files under `public/images/` and reference them locally.

**Resume:** Add your PDF to `public/resume.pdf` for the Resume button to work. Until then, the link will 404.

## Project structure

```
src/
  app/                    # Next.js App Router (layout, page, API)
  components/
    contact/              # ContactForm (client)
    layout/               # Header, Footer, NavLinks, Section, etc.
    projects/             # ProjectCard, ProjectModal (client)
    sections/             # Page sections (Skills & Experience are server components)
  data/                   # portfolio.ts + portfolio.types.ts
  hooks/                  # useColorMode, useScrollSpy, useReducedMotion
  lib/                    # motion, scroll, validation, escapeHtml, supabase
  theme/                  # MUI themes, tokens, shared sx helpers
supabase/
  migrations/             # SQL migrations (apply via Supabase MCP or dashboard)
public/
  images/                 # Optional local assets
  favicon.svg, og-image.svg
```

## Architecture

| Layer | Server | Client |
|-------|--------|--------|
| `page.tsx` | Yes | — |
| `Skills`, `Experience`, `Section`, `WaveDivider` | Yes | — |
| `Header`, `Hero`, `About`, `Projects`, `Contact`, forms | — | Yes (hooks, motion, interactivity) |

Shared utilities:
- [`src/lib/motion.tsx`](src/lib/motion.tsx) — Framer Motion presets
- [`src/theme/sx.ts`](src/theme/sx.ts) — brand shadows, card hover, scroll offsets
- [`src/lib/scroll.ts`](src/lib/scroll.ts) — smooth scroll to sections

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Deploy to Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

## Tech stack

- Next.js 15 (App Router)
- Material UI v6 + Emotion
- Framer Motion (subtle animations)
- React Hook Form + Zod
- Resend (contact email)
- Supabase (contact form persistence)

## Supabase setup

This project connects to Supabase using the publishable key from your Cursor MCP configuration.

1. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
2. Apply the migration in [`supabase/migrations/20250614000000_create_contact_submissions.sql`](supabase/migrations/20250614000000_create_contact_submissions.sql):
   - **Via MCP:** Restart Cursor (Settings → Tools & MCP), then ask the agent to run `apply_migration` for the contact table.
   - **Via dashboard:** Open Supabase → SQL Editor, paste the migration SQL, and run it.
3. View submissions in Supabase → Table Editor → `contact_submissions`.

**Cursor MCP config** (`.cursor/mcp.json`) should use separate `command` and `args` with `--apiUrl`, `--apiKey`, and `--schema`. For full database tooling (migrations, SQL, types), you can switch to the [hosted Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp) at `https://mcp.supabase.com/mcp?project_ref=YOUR_PROJECT_REF`.

## License

Private — for personal portfolio use.
