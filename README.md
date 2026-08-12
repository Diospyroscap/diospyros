# Diospyros Capital

Single-page marketing site built with Next.js 16, React 19, and TypeScript.

## Requirements

- Node.js 24.x
- npm (the committed `package-lock.json` is the source of truth)

## Local development

```powershell
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

`SITE_URL` is optional locally. Set it to the canonical production origin, including
`https://`, when you need local metadata to use the production URL.

## Commands

```powershell
npm run dev        # Start the development server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
npm run build      # Create the production build
npm run start      # Serve the production build
npm run check      # Run lint, typecheck, and build
```

## Project structure

```text
src/
  app/          # App Router entry point, metadata, fonts, and global styles
  components/   # Page sections and small motion components
  content/      # Editable site copy and local asset paths
  lib/          # Shared motion utilities
public/
  images/       # Optimized background images
  logos/        # SVG brand assets
  og.jpg        # Social sharing image
```

## Deploy to Vercel from GitHub

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project** and import the GitHub repository.
3. Keep the detected **Next.js** framework preset and default settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node.js version: `24.x`
4. Deploy, then attach the production domain under **Settings → Domains**.

No custom Vercel configuration is required. The site uses
`VERCEL_PROJECT_PRODUCTION_URL` for canonical and social metadata automatically.
You may set `SITE_URL=https://your-domain.example` in Vercel for Production and
Preview if you want to override that value. If system environment variables are
disabled for an existing Vercel project, either enable them or set `SITE_URL`.
