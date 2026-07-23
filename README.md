# Online Judge

A full-stack online judge (write code in-browser, run it against test cases, get a verdict).

## Structure

- `client/` — React + TypeScript frontend (Vite, Tailwind, Monaco, React Query)
- `server/` — Express + TypeScript API and judging worker (Prisma/Postgres, BullMQ/Redis)
- `shared/` — Zod schemas and TypeScript types shared by both

## Local development

Prerequisites: Node.js 22+, Docker Desktop, Git.

```bash
npm install
```

Setup instructions per package are added as each piece comes online (database in `server/prisma`, Docker sandbox images in `server/docker`, etc.) — see the project plan for the full milestone sequence.
