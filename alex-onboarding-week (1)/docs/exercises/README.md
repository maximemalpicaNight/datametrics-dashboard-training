# DataMetrics Dashboard - Training Exercises

Welcome to the DataMetrics Dashboard training program! This document outlines the **5 exercises** (Exercise 00-04) you'll complete during your onboarding week.

## 📅 Training Schedule

**Duration:** 1 week (5 days)
**Format:** Hands-on exercises with validation quizzes
**Goal:** Build real-world features while learning JavaScript/TypeScript, React, Next.js, GraphQL, and professional patterns

## 🎯 Learning Path

Each exercise builds upon the previous one, progressively introducing new concepts:

---

### Day 0: Exercise 00 - JS/TS & React Fundamentals ⭐ **START HERE**
**File:** [EXERCISE-00-FUNDAMENTALS.md](./EXERCISE-00-FUNDAMENTALS.md)

**What You'll Learn:**
- Modern JavaScript (ES6+): arrow functions, array methods, destructuring, spread
- TypeScript essentials: types, interfaces, typing React components
- Thinking in React: mental model, component design, when to create components
- React Hooks deep dive: useState, useEffect, custom hooks, Rules of Hooks
- Props vs State: understanding the difference, lifting state up
- React Hook Form basics
- Array methods in React: map, filter, reduce for rendering lists

**In-App Practice Exercises:** Navigate to `/practice` to complete hands-on exercises:
- [/practice/arrays](/practice/arrays) - Array methods practice
- [/practice/typescript](/practice/typescript) - TypeScript typing practice
- [/practice/components](/practice/components) - Component design practice
- [/practice/state](/practice/state) - useState practice
- [/practice/effects](/practice/effects) - useEffect practice
- [/practice/props-state](/practice/props-state) - Props vs State practice
- [/practice/hooks](/practice/hooks) - Custom hooks practice

**Practice Project:** Build a simple Todo app to solidify concepts

**Estimated Time:** 8 hours (pure learning + practice)

**⚠️ CRITICAL:** This is your foundation. Do NOT skip to Exercise 01 until you complete this and get trainer approval.

---

### Day 1-2: Exercise 01 - Dashboard Overview
**File:** [EXERCISE-01-DASHBOARD.md](./EXERCISE-01-DASHBOARD.md)

**What You'll Build:** Main dashboard with metrics cards and charts

**What You'll Learn:**
- GraphQL queries with Apollo Client
- Data fetching and loading states
- Data aggregation and calculations
- Chart integration (Recharts)
- Date filtering

**Estimated Time:** 8-12 hours

---

### Day 2-3: Exercise 02 - Team Management
**File:** [EXERCISE-02-TEAM-MANAGEMENT.md](./EXERCISE-02-TEAM-MANAGEMENT.md)

**What You'll Build:** Team management page with CRUD operations

**What You'll Learn:**
- GraphQL mutations
- Create, Read, Update, Delete patterns
- Role-based access control (RBAC)
- Form handling
- Confirmation dialogs
- Apollo cache updates

**Estimated Time:** 6-10 hours

---

### Day 3-4: Exercise 03 - Advanced Analytics
**File:** [EXERCISE-03-ANALYTICS.md](./EXERCISE-03-ANALYTICS.md)

**What You'll Build:** Analytics page with multiple charts and comparisons

**What You'll Learn:**
- React Query (TanStack Query)
- Advanced data visualization
- Data transformations
- Period comparisons (WoW, MoM)
- CSV/JSON export
- Performance optimization (useMemo)

**Estimated Time:** 8-12 hours

---

### Day 4-5: Exercise 04 - Settings & Profile
**File:** [EXERCISE-04-SETTINGS.md](./EXERCISE-04-SETTINGS.md)

**What You'll Build:** User settings page with profile editing

**What You'll Learn:**
- Form validation with Zod
- Controlled components
- Error handling UX
- Success feedback patterns
- Type-safe forms
- Form state management

**Estimated Time:** 4-8 hours

---

## 🔧 GitHub Setup (Before Starting)

Before you begin the exercises, set up GitHub collaboration:

### 1. Initialize Git Repository

If not already initialized:
```bash
git init
git add .
git commit -m "Initial commit: DataMetrics Dashboard training project"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `datametrics-dashboard-training` (or your preferred name)
3. **Important:** Choose **Private** repository (contains training materials)
4. Don't initialize with README (we already have one)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/datametrics-dashboard-training.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 4. Invite Trainer as Collaborator

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Collaborators** in the left sidebar
4. Click **Add people**
5. Search for and invite: **`tahirNight`**
6. Select **Write** access (allows trainer to review code and leave comments)

### 5. Inform Your Trainer

Send a message to your trainer with:
- Repository URL
- Confirmation that `tahirNight` was invited

### 6. Working with Git During Training

**Create one branch per exercise:**

```bash
# Starting Exercise 01
git checkout -b exercise-01-dashboard
# ... work on exercise ...
git add .
git commit -m "Complete Exercise 01: Dashboard implementation"
git push -u origin exercise-01-dashboard
```

**After completing each exercise, create a Pull Request:**

1. Go to your GitHub repository
2. Click **"Pull requests"** tab
3. Click **"New pull request"**
4. Select your exercise branch (e.g., `exercise-01-dashboard`) → `main`
5. Fill out the PR template (auto-populated)
6. Tag trainer: `@tahirNight`
7. Submit PR

**PR Review Process:**
- Trainer reviews your code and quiz answers
- Addresses comments/requests changes if needed
- Trainer approves when ready
- **Do NOT merge** - trainer will merge after approval
- Move to next exercise only after PR is approved

**Best Practices:**
- One PR per exercise
- Complete quiz in exercise document before creating PR
- Push commits frequently while working
- Respond to review comments promptly

---

## 📋 How to Use These Exercises

### 1. Read the Exercise Document
Each exercise document contains:
- **Learning Objectives** - What you'll learn
- **Requirements** - What to build
- **Definition of Done** - Completion checklist
- **Hints & Resources** - Code examples and tips
- **Common Pitfalls** - What to avoid
- **Testing Steps** - How to verify your work

### 2. Build the Feature
- Start with the empty page shell (already in the codebase)
- Follow the requirements
- Reference the hints when stuck
- Test as you go
- Check off items in Definition of Done

### 3. Complete the Validation Quiz
After finishing the code:
- Answer all questions **in your own words**
- Don't copy-paste from documentation
- Explain concepts as if teaching someone else
- Show code examples from your implementation

### 4. Create Pull Request
After completing code and quiz:
- Push your branch to GitHub
- Create a Pull Request using the template
- Tag trainer (@tahirNight)
- Wait for review

### 5. Trainer Review
Your trainer will:
- Review your code via PR
- Check your quiz answers in exercise document
- Leave comments/feedback
- Request changes if needed
- Approve and merge when ready

## ✅ Completion Criteria

To complete the training program:

1. **All 5 exercises completed** (Exercise 00-04) with working features
2. **All in-app practice exercises** in `/practice` completed (Exercise 00)
3. **All validation quizzes answered** demonstrating understanding
4. **Trainer approval** on each exercise
5. **No critical bugs** or console errors
6. **Code quality** meets team standards
7. **GitHub repository** set up with trainer invited

## 🎓 Validation Quiz Philosophy

The validation quizzes are designed to ensure you **understand** what you built, not just copied code.

### Why We Use Quizzes:
- Prevent "AI did my homework" syndrome
- Force you to articulate your understanding
- Identify knowledge gaps early
- Build ability to explain technical concepts
- Prepare you for code reviews and pair programming

### How to Answer:
- ✅ **Do:** Explain in your own words
- ✅ **Do:** Use examples from your code
- ✅ **Do:** Describe the "why" not just the "what"
- ❌ **Don't:** Copy-paste from documentation
- ❌ **Don't:** Use AI to answer quiz questions
- ❌ **Don't:** Skip questions (write "I don't know" if stuck)

### Example of Good vs Bad Answers:

**Question:** What does `useQuery` return?

❌ **Bad Answer:** "The useQuery hook returns an object containing loading, error, and data properties"

✅ **Good Answer:** "useQuery gives you three main things: First, 'loading' which is true while the request is happening - I use this to show a spinner. Second, 'error' which contains any error message if the request failed - I display this to the user. And 'data' which has the actual results from GraphQL. In my dashboard, I check if loading is true first, then check for errors, and finally render the data if it exists."

## 📊 Progress Tracking

Use this checklist to track your progress:

- [ ] **GitHub Setup**
  - [ ] Repository created and pushed
  - [ ] Trainer (tahirNight) invited as collaborator
  - [ ] Trainer notified with repo URL

- [ ] **Exercise 00: JS/TS & React Fundamentals** ⭐ **START HERE**
  - [ ] All learning materials completed (8 hours)
  - [ ] In-app practice exercises completed (/practice)
  - [ ] Todo app built
  - [ ] Quiz answered
  - [ ] Trainer approved

- [ ] Exercise 01: Dashboard Overview
  - [ ] Learning resources completed (3-4 hours)
  - [ ] Code completed
  - [ ] Quiz answered
  - [ ] Trainer approved

- [ ] Exercise 02: Team Management
  - [ ] Learning resources completed (3-4 hours)
  - [ ] Code completed
  - [ ] Quiz answered
  - [ ] Trainer approved

- [ ] Exercise 03: Analytics
  - [ ] Learning resources completed (3.5-4.5 hours)
  - [ ] Code completed
  - [ ] Quiz answered
  - [ ] Trainer approved

- [ ] Exercise 04: Settings
  - [ ] Learning resources completed (3-3.5 hours)
  - [ ] Code completed
  - [ ] Quiz answered
  - [ ] Trainer approved

## 🆘 Getting Help

### When You're Stuck:

1. **Read the hints section** - Most common issues are covered
2. **Check common pitfalls** - You might be making a known mistake
3. **Review the test steps** - Sometimes clarifies the requirement
4. **Search documentation** - Links provided in each exercise
5. **Ask your trainer** - But try for 30 minutes first
6. **Use AI assistants carefully** - Understand, don't just copy

### Good Questions to Ask:
- "I'm getting error X, I tried Y, what am I missing?"
- "Is this approach correct or should I use pattern Z?"
- "Can you explain why we use X instead of Y?"

### Questions to Avoid:
- "Can you do this for me?"
- "What's the answer to quiz question 3?"
- "Here's an AI-generated solution, is it good?"

## 🔍 Code Review Standards

Your code will be reviewed for:

### Functionality
- ✅ All requirements met
- ✅ Features work as specified
- ✅ No bugs or crashes
- ✅ Loading and error states handled

### Code Quality
- ✅ TypeScript types used properly
- ✅ No `any` types without justification
- ✅ Clean, readable code
- ✅ Consistent naming conventions
- ✅ Components are focused and reusable

### Best Practices
- ✅ Error handling implemented
- ✅ Loading states shown
- ✅ Data validated before use
- ✅ GraphQL queries optimized
- ✅ Performance optimizations where needed

### No-Gos (Automatic Revision Required)
- ❌ Console errors or warnings
- ❌ Unused imports or variables
- ❌ TypeScript errors suppressed with `@ts-ignore`
- ❌ Hardcoded values that should be dynamic
- ❌ Security issues (exposing sensitive data)

## 📚 Additional Resources

### Documentation Links
- [Next.js 15 Docs](https://nextjs.org/docs)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [React Query](https://tanstack.com/query/latest)
- [Prisma](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Zod](https://zod.dev/)
- [Recharts](https://recharts.org/en-US/)

### Recommended Reading
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [React Patterns](https://reactpatterns.com/)
- [TypeScript Cheatsheet](https://www.typescriptlang.org/cheatsheets)

## 🎉 After Completion

Once you complete all 5 exercises (00-04):

1. **Code Review Session** - Deep dive with your trainer
2. **Refactoring Workshop** - Improve your code together
3. **Next Steps Discussion** - Plan your continued learning
4. **Team Introduction** - Join the main development team
5. **First Real Task** - Start contributing to production code!

## 💬 Feedback

After completing the training:
- Fill out the training feedback form
- Suggest improvements to exercises
- Share what helped you learn best
- Help improve the program for future trainees

---

**Good luck with your training! 🚀**

Remember: The goal isn't just to build features, but to **understand** how they work so you can build anything in the future.

If you have questions, ask your trainer or check the main [README.md](../../README.md) for setup instructions.
