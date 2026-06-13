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

Without `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, the contact form still works in development but logs submissions to the server console instead of sending email.

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
  lib/                    # motion, scroll, validation, escapeHtml
  theme/                  # MUI themes, tokens, shared sx helpers
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

## License

Private — for personal portfolio use.
