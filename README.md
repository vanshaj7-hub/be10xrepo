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
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend |

Without these variables, the contact form still works in development but logs submissions to the server console instead of sending email.

## Editing content

All portfolio content lives in a single file:

```
src/data/portfolio.ts
```

Update:

- `siteConfig` — name, title, email, tagline, location
- `aboutContent` — bio and design philosophy
- `skillCategories` — skills grouped by category
- `projects` — case studies (cover image, problem, process, outcomes)
- `experiences` — work history timeline
- `socialLinks` — LinkedIn, Behance, Dribbble, email
- `testimonials` — optional quotes

Replace placeholder images in `public/images/` or update URLs in `portfolio.ts`.

Add your resume PDF to `public/resume.pdf`.

## Project structure

```
src/
  app/              # Next.js App Router (layout, page, API)
  components/       # UI sections and layout
  data/             # Portfolio content (edit this)
  hooks/            # Color mode, scroll, motion hooks
  lib/              # Form validation schemas
  theme/            # MUI light/dark themes
public/             # Static assets, favicon, OG image
```

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
