# DataMetrics Dashboard

A comprehensive Next.js training project for junior developers to learn modern full-stack development with Apollo Client, React Query, Prisma ORM, and TypeScript.

## Tech Stack

- **Next.js 15+** - App Router with React Server Components
- **TypeScript** - Strict mode enabled
- **Apollo Client** - GraphQL client with caching
- **React Query (TanStack Query v5)** - Server state management
- **Prisma ORM** - Type-safe database access
- **SQLite** - Local database
- **Tailwind CSS** - Utility-first styling
- **GraphQL** - API layer with Apollo Server

## Project Structure

```
datametrics-dashboard/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Landing page
│   ├── login/               # Login page (working)
│   ├── dashboard/           # Dashboard pages (shells for trainee)
│   ├── team/                # Team management (shell)
│   ├── analytics/           # Analytics page (shell)
│   ├── settings/            # Settings page (shell)
│   └── api/graphql/         # GraphQL API endpoint
├── components/
│   ├── ui/                  # Reusable UI components
│   └── providers/           # Context providers
├── lib/                     # Utility functions and clients
├── graphql/                 # GraphQL schema, resolvers, types
├── prisma/                  # Database schema and seed
└── public/                  # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- **No database installation needed!** SQLite is file-based and auto-created by Prisma

### Setup Instructions

> ⚠️ **Important:** Follow these steps in order. Do not skip step 2!

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **⚠️ REQUIRED: Create environment file:**
   ```bash
   cp .env.example .env
   ```

   This creates a `.env` file with the database configuration. **Without this file, the setup will fail.**

3. **Run database setup (generates Prisma client, creates SQLite DB file, seeds data):**
   ```bash
   npm run db:generate    # Generate Prisma client
   npm run db:push        # Create database schema (auto-creates prisma/dev.db)
   npm run db:seed        # Seed with test data
   ```

   💡 **What's happening here:**
   - `db:generate` - Creates TypeScript types from your Prisma schema
   - `db:push` - **Creates the SQLite database file** at `prisma/dev.db` (no separate DB installation needed!)
   - `db:seed` - Adds 5 users, 1 organization, and 90 days of metrics data

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Quick Start (All-in-One)

If you prefer, after step 2 above, you can run everything at once:
```bash
npm run db:generate && npm run db:push && npm run db:seed && npm run dev
```

## Login Credentials

All users have the password: `password123`

- **admin@acme.com** - Admin user (full permissions)
- **john@acme.com** - Member user
- **jane@acme.com** - Member user
- **bob@acme.com** - Viewer user (read-only)
- **alice@acme.com** - Member user

## Database

The project uses SQLite with Prisma ORM. The database file is created at `prisma/dev.db`.

### Models

- **Organization** - Company/organization details
- **User** - User accounts with roles (ADMIN, MEMBER, VIEWER)
- **TeamMember** - Links users to organizations with permissions
- **Metric** - Daily business metrics (revenue, users, conversion, growth)

### Seed Data

The seed script creates:
- 1 organization (Acme Corp)
- 5 users with different roles
- 5 team members
- 90 days of realistic metric data with trending patterns

To reseed the database:
```bash
npm run db:seed
```

## GraphQL API

The GraphQL API is available at `/api/graphql` with Apollo Server.

### Available Queries

```graphql
# Get current user
me: User

# Get metrics with optional date filtering
metrics(startDate: String, endDate: String, organizationId: ID!): [Metric!]!

# Get team members
teamMembers(organizationId: ID!): [TeamMember!]!

# Get user by ID
user(id: ID!): User
```

### Available Mutations

```graphql
# Login
login(email: String!, password: String!): AuthPayload!

# Team management (ADMIN only)
addTeamMember(email: String!, role: String!, organizationId: ID!): TeamMember!
updateTeamMember(id: ID!, role: String, permissions: JSON): TeamMember!
deleteTeamMember(id: ID!): Boolean!

# Update metrics (MEMBER+ only)
updateMetrics(data: [MetricInput!]!): [Metric!]!

# Update user profile
updateUser(id: ID!, data: UserInput!): User!
```

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:seed      # Seed database with data
npm run db:studio    # Open Prisma Studio (database GUI)
npm run setup        # Complete setup (install + generate + push + seed)
```

## Authentication

This project uses a **mock authentication system** for training purposes:
- JWT tokens are stored in localStorage
- Token validation is done client-side and in GraphQL resolvers
- **DO NOT use this authentication system in production**

## 📚 Training Exercises

This project includes **5 comprehensive training exercises** designed for junior developer onboarding. Each exercise has:

- Clear learning objectives with curated learning resources
- Detailed requirements and hints
- Definition of done checklist
- Validation quiz to ensure understanding
- Trainer review section

### 📖 [View All Exercises →](./docs/exercises/README.md)

### Quick Overview:

0. **[Exercise 00: JS/TS & React Fundamentals](./docs/exercises/EXERCISE-00-FUNDAMENTALS.md)** ⭐ **START HERE** (Day 0)
   - Modern JavaScript (ES6+), TypeScript essentials
   - Thinking in React, component design, hooks (useState, useEffect, custom hooks)
   - Props vs State, array methods
   - **In-app practice exercises** at `/practice` for hands-on learning
   - Practice: Build a Todo app

1. **[Exercise 01: Dashboard Overview](./docs/exercises/EXERCISE-01-DASHBOARD.md)** (Day 1-2)
   - GraphQL queries, data fetching, charts, date filtering
   - Build: Metrics dashboard with visualizations

2. **[Exercise 02: Team Management](./docs/exercises/EXERCISE-02-TEAM-MANAGEMENT.md)** (Day 2-3)
   - GraphQL mutations, CRUD operations, role-based access
   - Build: Team management with add/edit/delete

3. **[Exercise 03: Advanced Analytics](./docs/exercises/EXERCISE-03-ANALYTICS.md)** (Day 3-4)
   - React Query, advanced charts, data export, comparisons
   - Build: Analytics page with WoW/MoM and exports

4. **[Exercise 04: Settings & Profile](./docs/exercises/EXERCISE-04-SETTINGS.md)** (Day 4-5)
   - Zod validation, form handling, error UX
   - Build: User settings with profile editing

### 🎯 What Makes These Exercises Special:

- **Learn-First Approach** - 8+ hours of curated learning resources before each exercise
- **In-App Practice** - Hands-on exercises at `/practice` for Exercise 00 fundamentals
- **Validation Quizzes** - Ensure understanding, not just code copying
- **Real-world Patterns** - Production-ready code practices
- **Progressive Learning** - Each builds on previous knowledge
- **Trainer Reviews** - Code review checklists and feedback forms

### Getting Started:

1. Complete project setup (see above)
2. **Set up GitHub:**
   - Create private repo: `datametrics-dashboard-training`
   - Invite trainer as collaborator: `@tahirNight`
3. Read [docs/exercises/README.md](./docs/exercises/README.md)
4. **Start with Exercise 00** (JS/TS & React fundamentals) ⚠️ Don't skip!
5. For each exercise:
   - Create branch: `git checkout -b exercise-XX-name`
   - Complete learning resources first
   - Build the feature
   - Complete quiz
   - Create Pull Request
   - Wait for trainer approval before merging

**Estimated Total Time:** 47-66 hours (1.5 weeks)
- **Learning:** 21-24 hours (Exercise 00 + pre-exercise learning)
- **Coding:** 26-42 hours (building features)

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Docs](https://www.apollographql.com/docs/react/)
- [React Query (TanStack Query)](https://tanstack.com/query/latest)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Common Tasks

### Adding a New GraphQL Query

1. Add query to `graphql/schema.ts`
2. Implement resolver in `graphql/resolvers.ts`
3. Update types in `graphql/types.ts`
4. Use in components with Apollo's `useQuery` or `gql`

### Creating a New Page

1. Create file in `app/[route]/page.tsx`
2. Add route to sidebar navigation in `app/dashboard/layout.tsx`
3. Update middleware if route needs protection

### Adding a UI Component

1. Create component in `components/ui/[name].tsx`
2. Use Tailwind for styling
3. Export from component file
4. Import and use in pages

## Troubleshooting

**Database errors:**
```bash
rm prisma/dev.db
npm run db:push
npm run db:seed
```

**GraphQL errors:**
- Check browser console for details
- Verify token in localStorage
- Test queries in GraphQL Playground at `/api/graphql`

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## Notes for Trainers

This project is designed as a training tool:
- Empty page shells with clear instructions
- Working authentication and API layer
- Realistic seed data for immediate testing
- Comments indicate where trainees should implement features
- Basic UI components provided as starting points

## Security Note

⚠️ **This is a training project with mock authentication. DO NOT use in production:**
- Passwords are base64 encoded (not hashed)
- JWT tokens are simplistic
- No HTTPS enforcement
- No rate limiting
- No CSRF protection

For production apps, implement proper authentication with libraries like NextAuth.js, bcrypt for passwords, and secure token management.

## License

This project is created for educational purposes.
