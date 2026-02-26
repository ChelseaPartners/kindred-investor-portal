# Kindred Capital — Investor Portal

A professional real estate investment management platform built with Next.js 15, Supabase, and Tailwind CSS.

## Architecture

The app is organized into three interfaces using Next.js route groups:

- **`(marketing)`** — Public-facing marketing site (landing, about, portfolio, contact)
- **`(portal)`** — Authenticated investor portal (dashboard, properties, financials, documents, reports)
- **`(admin)`** — Internal admin console (property management, investor management, file uploads, report publishing)

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Database & Auth**: Supabase (Postgres, Row Level Security, Auth)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **File Parsing**: xlsx (Excel), pdf-parse (PDF)
- **Package Manager**: pnpm

## Getting Started

1. Clone the repo and install dependencies:

```bash
pnpm install
```

2. Copy the environment template and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

3. Run the Supabase migration against your project (via the Supabase dashboard SQL editor or CLI):

```
supabase/migrations/00001_initial_schema.sql
```

4. Start the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    (marketing)/     # Public marketing pages
    (portal)/        # Investor portal (auth required)
    (admin)/         # Admin console (admin role required)
    auth/            # Login & auth callback
    api/             # API routes (upload, parse, PDF generation)
  components/
    ui/              # Reusable UI primitives (Button, Card, Input, etc.)
    marketing/       # Marketing site components
    portal/          # Investor portal components
    admin/           # Admin console components
    charts/          # Chart components (NOI, occupancy, revenue)
  lib/
    supabase/        # Supabase clients (browser, server, admin, middleware)
    parsing/         # Financial file parsing (Excel, PDF, field mapping)
    utils.ts         # Utility functions (cn, formatCurrency, etc.)
    constants.ts     # App constants and route definitions
    types.ts         # TypeScript type definitions
supabase/
  migrations/        # Database migration files
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `NEXT_PUBLIC_APP_URL` | App URL (default: `http://localhost:3000`) |
