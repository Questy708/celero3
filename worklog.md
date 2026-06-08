---
Task ID: 1
Agent: Main Agent
Task: Import/clone the celero2 project from GitHub into the existing Next.js project

Work Log:
- Cloned the repository from https://github.com/Questy708/celero2
- Explored the full project structure - it's a comprehensive xCelero Labs venture platform
- Adapted Prisma schema from PostgreSQL to SQLite for our environment
- Pushed schema to database with `bun run db:push`
- Copied all artemis source files: router, components, pages, data
- Copied all API routes (health, capital, programs, applications, careers, admin, forum)
- Copied lib files (auth.ts, env.ts) and middleware.ts
- Updated layout.tsx with xCelero fonts (Inter, Space Grotesk, JetBrains Mono) and metadata
- Updated globals.css with xCelero brand colors, custom CSS animations, and theming
- Updated page.tsx to use the Artemis hash-based SPA router
- Copied public assets (images, favicon, etc.)
- Added environment variables (ADMIN_PASSWORD, ADMIN_SECRET)
- Installed missing packages (react-markdown, remark-gfm, rehype-katex, katex, remark-math, @types/katex, @types/react-syntax-highlighter)
- Seeded database with sample data (10 subscribers, 10 inquiries, 10 applications, 10 job apps, 10 program apps)
- Verified with Agent Browser: Home, Ventures, Capital, Programs, Insights, About, Admin, Town Square pages all render correctly
- Search functionality (⌘K) works correctly
- API health endpoint returns connected status
- Lint passes cleanly

Stage Summary:
- Successfully imported the entire xCelero Labs project
- All 20+ pages working via hash-based SPA router
- Database seeded with sample data
- API routes functional
- Admin dashboard accessible at #/admin
- Town Square community forum at #/townsquare
