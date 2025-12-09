# Exercise 01: Dashboard Overview with Metrics

## 📖 Required Reading & Learning Resources

**⚠️ IMPORTANT: Complete these learning materials BEFORE starting to code!**

Understanding these concepts is crucial. Don't skip straight to coding - invest time in learning first.

### 1. GraphQL Fundamentals (60-90 min)
**Why:** You need to understand queries, variables, and how GraphQL differs from REST.

- 📺 **[GraphQL in 100 Seconds](https://www.youtube.com/watch?v=eIQh02xuVw4)** (2 min) - Quick overview
- 📄 **[GraphQL Queries and Mutations](https://graphql.org/learn/queries/)** (20 min) - Official docs, essential reading
- 📺 **[GraphQL Crash Course](https://www.youtube.com/watch?v=qux4-yWeZvo)** (35 min) - In-depth tutorial
- 🛠️ **Practice:** Open your app's GraphQL endpoint at `http://localhost:3000/api/graphql` and try writing queries in the playground

**Key Concepts to Understand:**
- What is a query vs mutation?
- How do variables work in GraphQL?
- What is a schema and type system?

### 2. Apollo Client Basics (45-60 min)
**Why:** Apollo Client is your data-fetching library. You must understand how it works with React.

- 📄 **[Apollo Client Introduction](https://www.apollographql.com/docs/react/)** (10 min) - Read the overview
- 📄 **[Queries with useQuery](https://www.apollographql.com/docs/react/data/queries/)** (20 min) - Essential reading
- 📺 **[Apollo Client Tutorial](https://www.youtube.com/watch?v=YyUWW04HwKY)** (25 min) - Practical examples
- 📄 **[Loading and Error States](https://www.apollographql.com/docs/react/data/error-handling/)** (10 min)

**Key Concepts to Understand:**
- What does `useQuery` return?
- When does a query execute?
- How to handle loading and error states?
- What is the Apollo cache?

### 3. Data Visualization with Recharts (30-45 min)
**Why:** You'll build charts - understand the basics first.

- 📄 **[Recharts Documentation](https://recharts.org/en-US/guide)** (15 min) - Read "Getting Started"
- 📺 **[Recharts Tutorial](https://www.youtube.com/watch?v=3-H4AD6NzVc)** (20 min) - Build a simple chart
- 📄 **[Recharts Examples](https://recharts.org/en-US/examples)** (10 min) - Browse LineChart examples

**Key Concepts to Understand:**
- How to structure data for Recharts?
- What is ResponsiveContainer?
- Basic chart components (LineChart, XAxis, YAxis, Tooltip)

### 4. Date Manipulation with date-fns (20-30 min)
**Why:** You'll filter data by dates and format timestamps.

- 📄 **[date-fns Documentation](https://date-fns.org/docs/Getting-Started)** (10 min)
- 📄 **[Common date-fns Functions](https://date-fns.org/v3.3.1/docs/format)** (10 min) - Focus on: `format`, `subDays`, `startOfDay`, `endOfDay`
- 🛠️ **Practice:** Open browser console and try:
  ```javascript
  import { format, subDays } from 'date-fns';
  format(new Date(), 'yyyy-MM-dd');
  format(subDays(new Date(), 30), 'yyyy-MM-dd');
  ```

### 5. TypeScript with React & GraphQL (30-40 min)
**Why:** Type safety prevents bugs and improves developer experience.

- 📄 **[TypeScript with React](https://react.dev/learn/typescript)** (15 min) - Official React TypeScript guide
- 📄 **[Typing GraphQL Responses](https://www.apollographql.com/docs/react/development-testing/static-typing/)** (15 min)

**Key Concepts to Understand:**
- How to type React component props?
- How to type useState?
- How to type Apollo query results?

---

### ✅ Self-Check Before Starting

Answer these questions to verify your understanding:

1. Can you explain what a GraphQL query is in one sentence?
2. What three main things does `useQuery` return?
3. What format does Recharts expect data to be in?
4. Why would you use `useMemo` when processing an array of metrics?
5. How do you format a date to "2024-01-31" using date-fns?

If you can't answer these, **go back and review the materials above**. Don't proceed until you understand the fundamentals.

---

## 📚 Learning Objectives

By completing this exercise, you will learn:

- **GraphQL Queries** - How to fetch data using Apollo Client's `useQuery` hook
- **Data Aggregation** - Calculate totals, averages, and trends from raw data
- **Component Composition** - Build reusable metric card components
- **Loading & Error States** - Handle async data fetching UX patterns
- **Date Manipulation** - Use date-fns to filter and format dates
- **Data Visualization** - Integrate charting libraries (Recharts/Chart.js)
- **React Hooks** - Manage state with useState, useEffect
- **TypeScript Types** - Work with GraphQL-generated types

## 🎯 Goal

Build a fully functional dashboard page that displays key business metrics (Revenue, Users, Conversion Rate, Growth) with visual charts and date filtering capabilities. This is the main landing page users see after login.

## 🛠️ Technologies & Concepts Used

- **Apollo Client** - GraphQL client for data fetching (`@apollo/client`)
- **GraphQL** - Query language for your API
- **date-fns** - Date manipulation library (already installed)
- **Recharts** - Data visualization library (you need to install: `npm install recharts`)
- **React** - UI framework with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Styling

## 📋 Requirements

### 1. Metric Cards (4 cards across the top)
Display these metrics for the last 30 days:
- **Total Revenue** - Sum of all revenue
- **Total Users** - Sum of all users
- **Average Conversion** - Average conversion rate
- **Average Growth** - Average growth percentage

Each card should show:
- Large number (formatted)
- Label
- Trend indicator (↑ or ↓ with color)

### 2. Line Chart
- X-axis: Dates
- Y-axis: Revenue
- Show last 30 days by default
- Tooltip on hover showing exact values

### 3. Date Range Filter
- Date picker or preset buttons (7d, 30d, 90d)
- Update both cards and chart when changed
- Default: Last 30 days

### 4. Loading State
- Show skeleton loaders or spinner while fetching data
- Disable interactions during loading

### 5. Error Handling
- Display error message if query fails
- Provide "Retry" button
- Don't crash the app

## ✅ Definition of Done

Check off each item when complete:

- [ ] Metric cards display correct aggregated data for last 30 days
- [ ] All numbers are formatted correctly (currency, percentages, commas)
- [ ] Line chart renders with date on X-axis and revenue on Y-axis
- [ ] Date range filter updates both cards and chart
- [ ] Loading state shows before data appears
- [ ] Error state displays user-friendly message with retry option
- [ ] No console errors or TypeScript errors
- [ ] Page is responsive on mobile and desktop
- [ ] Code is clean with proper TypeScript types
- [ ] GraphQL query uses variables for date filtering


## 📝 Validation Quiz

After completing this exercise, answer these questions **in your own words** (no copy-paste from docs):

### 1. GraphQL & Apollo Client

**Q: Explain how the `useQuery` hook works. What does it return and when does it execute?**

Your answer:
```
[Write your explanation here]
```

**Q: What is the difference between `loading`, `error`, and `data` returned by `useQuery`?**

Your answer:
```
[Write your explanation here]
```

**Q: How would you refetch the data after the user clicks a "Refresh" button?**

Your answer:
```
[Write your explanation here]
```

### 2. Data Processing

**Q: Why do we need to aggregate the metrics data? Why can't we just display the raw data from the API?**

Your answer:
```
[Write your explanation here]
```

**Q: What is the purpose of using `reduce()` for calculations? Show a simple example.**

Your answer:
```
[Write your explanation here]
```

### 3. React & Performance

**Q: When should you use `useMemo` and why did we use it in this exercise?**

Your answer:
```
[Write your explanation here]
```

**Q: Why is it important to show loading and error states? What happens if you don't?**

Your answer:
```
[Write your explanation here]
```

### 4. TypeScript

**Q: What is the benefit of having TypeScript types from GraphQL? Give an example from this exercise.**

Your answer:
```
[Write your explanation here]
```

### 5. Code Quality

**Q: What potential bugs could happen if you don't use optional chaining (`data?.metrics`) when accessing query results?**

Your answer:
```
[Write your explanation here]
```

**Q: Explain the difference between these two approaches:**
```typescript
// Approach A
const total = metrics.reduce((sum, m) => sum + m.revenue, 0);

// Approach B
const total = metrics?.reduce((sum, m) => sum + m.revenue, 0) || 0;
```

Your answer:
```
[Write your explanation here]
```

---

## 🎓 Trainer Review

**Trainer Name:** _______________
**Review Date:** _______________

**Code Review Checklist:**
- [ ] Code is clean and well-organized
- [ ] TypeScript types are properly used
- [ ] Error handling is implemented
- [ ] Loading states are shown
- [ ] Data calculations are correct
- [ ] UI is responsive
- [ ] No console errors

**Quiz Review:**
- [ ] Demonstrates understanding of GraphQL/Apollo
- [ ] Explains data processing correctly
- [ ] Understands React hooks and performance
- [ ] Can identify potential bugs

**Feedback:**
```
[Trainer feedback here]
```

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Needs Revision | ⬜ Completed

---

**Next Exercise:** [Exercise 02 - Team Management](./EXERCISE-02-TEAM-MANAGEMENT.md)
