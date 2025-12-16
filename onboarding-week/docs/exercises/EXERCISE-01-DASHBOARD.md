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

Query And Mutation describes what type of operation you intend to do.
We use queries to fetch data, we use mutations to modify server-side data.

- How do variables work in GraphQL?

Variables in GraphQL allows you to pass dynamic data into queries so you can reuse the same query with different inputs.

- What is a schema and type system?

The schema is all the elements of my app. The system types these elements.

### 2. Apollo Client Basics (45-60 min)
**Why:** Apollo Client is your data-fetching library. You must understand how it works with React.

- 📄 **[Apollo Client Introduction](https://www.apollographql.com/docs/react/)** (10 min) - Read the overview
- 📄 **[Queries with useQuery](https://www.apollographql.com/docs/react/data/queries/)** (20 min) - Essential reading
- 📺 **[Apollo Client Tutorial](https://www.youtube.com/watch?v=YyUWW04HwKY)** (25 min) - Practical examples
- 📄 **[Loading and Error States](https://www.apollographql.com/docs/react/data/error-handling/)** (10 min)

**Key Concepts to Understand:**
- What does `useQuery` return?

useQuery returns an object containing the retrieved data, loading (a Boolean value that defines the status of the request), and error (if a resource error is detected).

- When does a query execute?

The request is made when the component that uses it is mounted, i.e. when the DOM is updated.

- How to handle loading and error states?

You can use the loading and error values to handle these two states.

- What is the Apollo cache?

When Apollo fetches query from the server, it automatically caches the result locally. 
This makes later executions of that same query extremely fast.

### 3. Data Visualization with Recharts (30-45 min)
**Why:** You'll build charts - understand the basics first.

- 📄 **[Recharts Documentation](https://recharts.org/en-US/guide)** (15 min) - Read "Getting Started"
- 📺 **[Recharts Tutorial](https://www.youtube.com/watch?v=3-H4AD6NzVc)** (20 min) - Build a simple chart
- 📄 **[Recharts Examples](https://recharts.org/en-US/examples)** (10 min) - Browse LineChart examples

**Key Concepts to Understand:**
- How to structure data for Recharts?

A rechart component must receive data that is an array of objects, where each object is a coordinate. This also depends on the chart being used.

- What is ResponsiveContainer?

In the case of rechart, it allows you to keep the correct proportion of the chart regardless of the page size (more often in cases where it is resized).

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

two methods are possible

Directly inside the props: Button({ variant }: { variant: string })
With a type defined above the component: 
type ButtonProps = { variant: string } /
Button({ variant }: ButtonProps)

- How to type useState?

By using the "<>" right after useState, you are typing the value that the state will hold.
Example: `const [list, setList] = useState<string[]>(["Hello", "World"]);`
Here it is an array of strings.

- How to type Apollo query results?

After Apollo's Hook with “<>,” you must then put the expected type inside. Example : useQuery<Todo[]>(...)

---

### ✅ Self-Check Before Starting

Answer these questions to verify your understanding:

1. Can you explain what a GraphQL query is in one sentence?

A GraphQL query allows you to specify the data you want to retrieve from the server directly from the client.

2. What three main things does `useQuery` return?

useQuery returns: data (the data), isLoading (loading status), and error (any errors).

3. What format does Recharts expect data to be in?

Array of object.

4. Why would you use `useMemo` when processing an array of metrics?

This allows metric values to be retained across multiple renderings without recalculating them. To change this value, you must change these dependencies.

5. How do you format a date to "2024-01-31" using date-fns?

format(new Date(), 'yyyy-MM-dd')

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
useQuery (from Apollo) is a hook that allows you to perform a query in GraphQL. 
It performs a query to the GraphQL server.
It returns: data (retrieved data), loading (true during loading), error (the error if there is one), refetch (function that allows to refetch, redo the query).

It executes:
- During the first render (after the component is mounted)
- If a variable value changes
- if there is a pollInterval
- if you use refetch

```

**Q: What is the difference between `loading`, `error`, and `data` returned by `useQuery`?**

Your answer:
```
- loading is a boolean, true = request is in progress, false = query finished.
- error contains the error if the request failed, otherwise null.
- data contains the data retrieved from the GraphQL server once the request is successful.

```

**Q: How would you refetch the data after the user clicks a "Refresh" button?**

Your answer:
```
You can use the reftech function provided by useQuery in a click handler.
example :

function handleRefetchClick() {
  refetch();
}

...

<button onClick={handleRefectClick}>

```

### 2. Data Processing

**Q: Why do we need to aggregate the metrics data? Why can't we just display the raw data from the API?**

Your answer:
```

If the data received contains too much information, you can “optimize the query result,” for example by summing the metrics.

Example: instead of displaying a list of results, you can sum them and display the total. This improves performance by reducing the amount of data to be displayed.

```

**Q: What is the purpose of using `reduce()` for calculations? Show a simple example.**

Your answer:
```

With the reduce method, you can calculate a sum and other types of grouping.

```

### 3. React & Performance

**Q: When should you use `useMemo` and why did we use it in this exercise?**

Your answer:
```
useMemo should be used to memoize expensive computations and prevent unnecessary recalculations on every render.

For the exercise, i use it to prevent infinite loops by keeping startDate and endDate stable in memory until the filter changes.

```

**Q: Why is it important to show loading and error states? What happens if you don't?**

Your answer:
```
By displaying loading and error states in the UI, users get visual feedback about the current state of the page. Without this, users have no information about the request status.

```

### 4. TypeScript

**Q: What is the benefit of having TypeScript types from GraphQL? Give an example from this exercise.**

Your answer:
```
By typing the graphql response directly into the useQuery<...> hook, you can take advantage of typescript (auto completion, error prevention, ensuring you are working on the correct data).
```

### 5. Code Quality

**Q: What potential bugs could happen if you don't use optional chaining (`data?.metrics`) when accessing query results?**

Your answer:
```
Without optional chaining "?", If data is undefined, it will crash the component because operations are then performed on invalid data.

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
In approach A, we assume that metrics always contains data, so if metrics has no data, the component crashes.
In approach B, using the optional chaining, if metrics is undefined, it returns 0 thanks to the || 0.

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
