# Exercise 03: Advanced Analytics & Data Visualization

## 📖 Required Reading & Learning Resources

**⚠️ IMPORTANT: Complete these learning materials BEFORE starting to code!**

This exercise introduces React Query and advanced data processing - invest time in understanding these concepts.

### 1. React Query (TanStack Query) Fundamentals (60-75 min)
**Why:** React Query is a powerful alternative to Apollo for data fetching. Different mental model than Apollo.

- 📺 **[React Query in 100 Seconds](https://www.youtube.com/watch?v=novnyCaa7To)** (2 min) - Quick intro
- 📄 **[React Query Overview](https://tanstack.com/query/latest/docs/framework/react/overview)** (20 min) - Official docs
- 📺 **[React Query Tutorial](https://www.youtube.com/watch?v=8K1N3fE-cDs)** (45 min) - Comprehensive guide
- 📄 **[React Query vs Apollo Client](https://blog.logrocket.com/react-query-vs-apollo-client/)** (15 min) - When to use each

**Key Concepts to Understand:**
- How is React Query different from Apollo?
- What is `staleTime` vs `cacheTime`?
- What is the `queryKey` and why is it important?
- How does automatic refetching work?

### 2. Advanced Data Visualization (45-60 min)
**Why:** Different chart types communicate different insights. Choose the right visualization.

- 📄 **[Data Visualization Best Practices](https://www.tableau.com/learn/articles/data-visualization)** (15 min)
- 📺 **[Choosing the Right Chart](https://www.youtube.com/watch?v=C07k0euBpr8)** (20 min)
- 📄 **[Recharts Advanced Examples](https://recharts.org/en-US/examples)** (15 min) - Browse BarChart, AreaChart, PieChart
- 🛠️ **Think About:** Which chart type best shows trends over time? Comparisons? Proportions?

**Key Concepts to Understand:**
- Line vs Bar vs Area charts - when to use each?
- How to make charts accessible?
- What makes a chart misleading?

### 3. Data Transformation & Processing (40-50 min)
**Why:** Raw API data rarely matches what charts need. Learn transformation patterns.

- 📄 **[Array Methods in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** (20 min) - Focus on: map, filter, reduce
- 📺 **[Functional Programming in JS](https://www.youtube.com/watch?v=e-5obm1G_FY)** (25 min) - map, filter, reduce explained
- 🛠️ **Practice:** Transform this data:
  ```javascript
  const data = [{date: '2024-01-01', revenue: 1000}, {date: '2024-01-02', revenue: 1500}];
  // Goal: [{month: 'Jan', total: 2500}]
  ```

**Key Concepts to Understand:**
- What does `reduce` do and when to use it?
- How to aggregate data by time periods?
- What is "data normalization"?

### 4. Performance Optimization Patterns (35-45 min)
**Why:** Data processing can be expensive. Optimize to keep UI responsive.

- 📄 **[React Re-rendering Guide](https://react.dev/learn/render-and-commit)** (15 min) - Official React docs
- 📺 **[React Performance Tips](https://www.youtube.com/watch?v=i793Qm6kv3U)** (20 min)
- 📄 **[When to useMemo](https://react.dev/reference/react/useMemo#should-you-add-usememo-everywhere)** (10 min) - Official guidance

**Key Concepts to Understand:**
- What causes React components to re-render?
- When is memoization actually useful?
- What is the cost of premature optimization?

### 5. Date Arithmetic & Comparisons (30-40 min)
**Why:** Week-over-Week and Month-over-Month require precise date calculations.

- 📄 **[date-fns Date Ranges](https://date-fns.org/v3.3.1/docs/startOfWeek)** (15 min) - Focus on: startOfWeek, endOfWeek, startOfMonth, endOfMonth
- 📺 **[Working with Dates in JavaScript](https://www.youtube.com/watch?v=zwTYG8aTOzc)** (20 min)
- 🛠️ **Practice:** Calculate WoW percentage change:
  ```javascript
  const thisWeek = 1000;
  const lastWeek = 800;
  const change = ((thisWeek - lastWeek) / lastWeek) * 100; // 25%
  ```

**Key Concepts to Understand:**
- How to calculate date ranges (this week, last week)?
- What is a percentage change formula?
- How to handle edge cases (division by zero)?

### 6. File Downloads in Browser (20-30 min)
**Why:** Export functionality uses Blob API and browser download patterns.

- 📄 **[Blob API](https://developer.mozilla.org/en-US/docs/Web/API/Blob)** (10 min) - MDN docs
- 📺 **[Download Files with JavaScript](https://www.youtube.com/watch?v=YhP4B8oqrTw)** (15 min)
- 🛠️ **Try:** Create and download a text file in browser console

**Key Concepts to Understand:**
- What is a Blob?
- How to programmatically trigger downloads?
- What is `URL.createObjectURL`?

### 7. Custom React Hooks (25-35 min)
**Why:** Custom hooks promote reusability and clean code separation.

- 📄 **[Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)** (15 min) - Official React docs
- 📺 **[Building Custom Hooks](https://www.youtube.com/watch?v=6ThXsUwLWvc)** (20 min)

**Key Concepts to Understand:**
- When should you extract a custom hook?
- What should a custom hook return?
- How to name custom hooks (must start with 'use')?

---

### ✅ Self-Check Before Starting

Answer these questions to verify your understanding:

1. What is the main difference between React Query and Apollo Client?
2. When would you use a line chart vs a bar chart?
3. Explain what `reduce()` does with an example.
4. What is the formula for calculating percentage change?
5. How do you create a downloadable file in the browser?
6. What is `staleTime` in React Query?

If you struggle with these, **go back to the learning materials**. Data processing and visualization require solid fundamentals.

---

## 📚 Learning Objectives

By completing this exercise, you will learn:

- **React Query (TanStack Query)** - Alternative to Apollo for data fetching with powerful caching
- **Advanced Data Visualization** - Multiple chart types (line, bar, pie)
- **Data Transformation** - Convert raw data into chart-ready formats
- **Period Comparisons** - Week-over-Week (WoW), Month-over-Month (MoM) calculations
- **Data Export** - Generate CSV and JSON files for download
- **Complex State Management** - Handle multiple filters and chart states
- **Performance Optimization** - Memoization for expensive calculations
- **Custom Hooks** - Create reusable data-fetching hooks

## 🎯 Goal

Build an advanced analytics page with multiple interactive charts showing different perspectives of the metrics data. Include time-period comparisons (WoW, MoM), export functionality, and smooth user interactions. This exercise teaches you how to work with React Query instead of Apollo Client and handle complex data visualizations.

## 🛠️ Technologies & Concepts Used

- **React Query (TanStack Query v5)** - Data fetching and caching
- **Recharts** - Data visualization library (install if not already: `npm install recharts`)
- **date-fns** - Advanced date calculations
- **Custom Hooks** - Reusable data-fetching logic
- **useMemo / useCallback** - Performance optimization
- **File Download** - Browser APIs for CSV/JSON export
- **TypeScript** - Type-safe data transformations

## 📋 Requirements

### 1. Multiple Chart Types

Create at least 3 different visualizations:

#### A. Revenue Trend (Line Chart)
- X-axis: Time (dates)
- Y-axis: Revenue
- Multiple time ranges: 7 days, 30 days, 90 days
- Smooth line with gradient fill

#### B. User Growth (Bar Chart)
- X-axis: Time periods (days/weeks)
- Y-axis: Number of users
- Color-coded bars
- Show growth compared to previous period

#### C. Conversion Rate (Area Chart or Pie Chart)
- Show conversion rate trends over time
- OR: Pie chart showing distribution of successful vs unsuccessful conversions

### 2. Period Comparisons

Add comparison cards showing:
- **Week-over-Week (WoW)** - Current week vs previous week (% change)
- **Month-over-Month (MoM)** - Current month vs previous month (% change)
- Display with trend indicators (↑ green or ↓ red)

Example:
```
Revenue WoW: +12.5% ↑
Revenue MoM: +8.3% ↑
Users WoW: +5.2% ↑
```

### 3. Export Functionality

Add export buttons:
- **Export as CSV** - Downloads metrics data as CSV file
- **Export as JSON** - Downloads metrics data as JSON file
- Include current date range in filename (e.g., `metrics-2024-01-01-to-2024-01-31.csv`)

### 4. Data Fetching with React Query

Use React Query instead of Apollo Client:
- Create custom hook: `useMetrics(startDate, endDate)`
- Implement caching strategy (5 min stale time)
- Show loading spinner
- Handle errors with retry logic
- Display "Last updated: X minutes ago"

### 5. Interactive Filters

Add filter controls:
- Date range selector (dropdown or date pickers)
- Metric selector (Revenue, Users, Conversion, Growth)
- Chart type toggle (for metrics that can be shown multiple ways)

### 6. Responsive Design

- Charts adapt to screen size
- Mobile: Stack charts vertically
- Desktop: Show 2 columns
- Maintain readability on all devices

## ✅ Definition of Done

Check off each item when complete:

- [ ] 3+ different chart types implemented and displaying data
- [ ] React Query hook created and working
- [ ] WoW and MoM comparisons calculated and displayed correctly
- [ ] CSV export generates valid file with current data
- [ ] JSON export generates valid file with current data
- [ ] Date range filter updates all charts
- [ ] Metric selector changes displayed metric across charts
- [ ] Loading states shown during data fetch
- [ ] Error handling with user-friendly messages
- [ ] "Last updated" timestamp displayed
- [ ] Charts are responsive on mobile and desktop
- [ ] No console errors or TypeScript errors
- [ ] Data transformations are memoized for performance
- [ ] Code is clean and well-organized

## 💡 Hints & Resources

### React Query Setup

```typescript
import { useQuery } from '@tanstack/react-query';
import { apolloClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const GET_METRICS = gql`
  query GetMetrics($startDate: String, $endDate: String, $organizationId: ID!) {
    metrics(startDate: $startDate, endDate: $endDate, organizationId: $organizationId) {
      id
      date
      revenue
      users
      conversion
      growth
    }
  }
`;

// Custom hook using React Query
function useMetrics(startDate: string, endDate: string, organizationId: string) {
  return useQuery({
    queryKey: ['metrics', startDate, endDate, organizationId],
    queryFn: async () => {
      const { data } = await apolloClient.query({
        query: GET_METRICS,
        variables: { startDate, endDate, organizationId },
      });
      return data.metrics;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}

// Usage in component
const { data: metrics, isLoading, error, dataUpdatedAt } = useMetrics(
  startDate,
  endDate,
  organizationId
);
```

### Period Comparison Calculations

```typescript
import { subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';

// Week-over-Week
const currentWeekStart = startOfWeek(new Date());
const currentWeekEnd = endOfWeek(new Date());
const prevWeekStart = startOfWeek(subDays(currentWeekStart, 7));
const prevWeekEnd = endOfWeek(subDays(currentWeekEnd, 7));

const currentWeekRevenue = metricsCurrentWeek.reduce((sum, m) => sum + m.revenue, 0);
const prevWeekRevenue = metricsPrevWeek.reduce((sum, m) => sum + m.revenue, 0);

const wowChange = ((currentWeekRevenue - prevWeekRevenue) / prevWeekRevenue) * 100;

// Month-over-Month (similar logic with startOfMonth/endOfMonth)
```

### Chart Data Transformation

```typescript
import { useMemo } from 'react';
import { format } from 'date-fns';

const chartData = useMemo(() => {
  return metrics?.map((metric) => ({
    date: format(new Date(metric.date), 'MMM dd'),
    revenue: metric.revenue,
    users: metric.users,
    conversion: metric.conversion,
  })) || [];
}, [metrics]);
```

### Multiple Chart Examples

```tsx
// 1. Line Chart with Gradient
<ResponsiveContainer width="100%" height={300}>
  <LineChart data={chartData}>
    <defs>
      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Line
      type="monotone"
      dataKey="revenue"
      stroke="#3b82f6"
      fill="url(#colorRevenue)"
    />
  </LineChart>
</ResponsiveContainer>

// 2. Bar Chart
<BarChart data={chartData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="users" fill="#10b981" />
</BarChart>

// 3. Area Chart
<AreaChart data={chartData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="date" />
  <YAxis />
  <Tooltip />
  <Area
    type="monotone"
    dataKey="conversion"
    stroke="#8b5cf6"
    fill="#8b5cf6"
    fillOpacity={0.3}
  />
</AreaChart>
```

### CSV Export

```typescript
function exportToCSV(metrics: Metric[]) {
  const headers = ['Date', 'Revenue', 'Users', 'Conversion', 'Growth'];
  const rows = metrics.map(m => [
    format(new Date(m.date), 'yyyy-MM-dd'),
    m.revenue,
    m.users,
    m.conversion,
    m.growth,
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `metrics-${format(new Date(), 'yyyy-MM-dd')}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}
```

### JSON Export

```typescript
function exportToJSON(metrics: Metric[]) {
  const jsonContent = JSON.stringify(metrics, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `metrics-${format(new Date(), 'yyyy-MM-dd')}.json`;
  link.click();
  URL.revokeObjectURL(url);
}
```

### Last Updated Display

```typescript
import { formatDistanceToNow } from 'date-fns';

const lastUpdated = dataUpdatedAt
  ? formatDistanceToNow(dataUpdatedAt, { addSuffix: true })
  : 'Never';

<p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
```

## 🚫 Common Pitfalls

1. **Not memoizing chart data** - Causes re-renders and performance issues
2. **Wrong date calculations for WoW/MoM** - Use date-fns helper functions
3. **CSV with wrong encoding** - Make sure to handle special characters
4. **Not handling empty data** - Charts break with no data
5. **Forgetting React Query cache** - Duplicate network requests
6. **Hardcoded date ranges** - Make dynamic based on current date
7. **Chart not responsive** - Always wrap in ResponsiveContainer
8. **Wrong Y-axis scale** - Large numbers need formatting
9. **Not rounding percentages** - Show 2 decimal places max
10. **Export button doesn't work on mobile** - Test on all devices

## 🧪 How to Test

### Manual Testing Steps:

1. **Login** to the app (admin@acme.com / password123)
2. **Navigate** to Analytics page
3. **Check charts** - Do all 3 charts render with data?
4. **Test filters** - Change date range, do charts update?
5. **Check comparisons** - Are WoW/MoM calculations reasonable?
6. **Test CSV export** - Click export, open file, verify data
7. **Test JSON export** - Click export, open file, verify structure
8. **Check loading** - Refresh page, see loading spinner?
9. **Test error** - Turn off internet, check error message
10. **Check responsive** - Resize browser, do charts adapt?
11. **Check performance** - Open React DevTools, look for unnecessary re-renders
12. **Last updated** - Does timestamp show and update correctly?

### Expected Behavior:

- WoW change: Between -20% to +20%
- MoM change: Between -15% to +25%
- Charts should be smooth without gaps
- Export files should have all current data
- Loading should take < 1 second (cached)

## 📝 Validation Quiz

After completing this exercise, answer these questions **in your own words**:

### 1. React Query vs Apollo Client

**Q: What are the main differences between React Query and Apollo Client? When would you use each?**

Your answer:
```

Apollo Client allows you to make requests directly to a GraphQL backend. With React Query, you can make requests to GraphQL but also to APIs.

If our backend is GraphQL, we should use Apollo.
And if we need to potentially use other types of backends, we should use React Query.

```

**Q: Explain how React Query's caching works. What is `staleTime` and `cacheTime`?**

Your answer:
```
When React Query fetches data, it stores it in cache. You can identify a query using its queryKey.

So if you refetch the data, it first checks the cache to see if the data is already there.

- staleTime: How long data remains “fresh” (no need to refetch).
- cacheTime: How long data remains in cache before being deleted.
```

**Q: Why did we use React Query for this page instead of Apollo Client?**

Your answer:
```
In the case of the app, we combined React Query and Apollo. We use React Query to manage the cache, but we perform the GraphQL query with Apollo.
```

### 2. Data Transformation

**Q: Why is it important to memoize data transformations with `useMemo`? What happens without it?**

Your answer:
```
useMemo allows you to avoid recalculating between renders. So imagine you perform a calculation that depends on data.

In this case, you will perform the calculation only when the value of data changes.
```

**Q: Show an example of how you transformed the raw metrics data into chart-ready format.**

Your answer:
```
In the exercises, I used it to perform a reduce on the metrics values. With this, on each re-render i don't have to recalculate the reduce.
```

### 3. Period Comparisons

**Q: Explain how you calculated Week-over-Week (WoW) percentage change. Show the formula.**

Your answer:
```
To calculate the week-over-week variation, I compared the sum of the metrics for the current week with that of the previous week, then applied the formula: (current - previous) / previous * 100
```

**Q: What edge cases did you need to handle in period comparisons? (e.g., division by zero)**

Your answer:
```
Certain mathematical rules must be checked, such as division by 0, because this returns an infinite number and is therefore invalid with the data that is supposed to be displayed in the statistics.

I check this using the following condition : if (!currentMetrics || !prevMetrics || currentMetrics.length === 0 || prevMetrics.length === 0) return null;
```

### 4. Data Visualization

**Q: What factors did you consider when choosing which chart type to use for each metric?**

Your answer:
```
For trends over time, I used LineChart to show changes across dates. For comparing values, I used BarChart to make differences between metrics more visible.
```

**Q: How did you make the charts responsive? What Recharts features did you use?**

Your answer:
```
I used the ResponsiveContainer component. It automatically adjusts the chart size based on the parent container width and height.
```

### 5. Export Functionality

**Q: Explain the process of generating and downloading a CSV file in the browser.**

Your answer:
```
First, you need to define the file structure as a large string that groups all the values you want to export. In the case of CSV, you need to create the headers, then create the list of data, all separated by commas.

Once the string is ready, you need to create a Blob (binary data in memory). However, to allow downloading this blob, you need to create a link to it and in JavaScript click on this link, which triggers the download. Finally, after the click, you need to delete the link.
```

**Q: What are the differences between CSV and JSON exports? When would a user prefer each?**

Your answer:
```
CSV has a simpler structure, it is simply data separated by commas.
JSON, is more structured. The data is organized as key–value pairs (and also arrays).

For graphical or spreadsheet data, CSV is preferable because we just need to display columns without any real structure.
As soon as we want to work with more organized data, JSON should be considered.
```

### 6. Performance Optimization

**Q: What performance optimizations did you implement in this exercise? Why are they important?**

Your answer:
```
I mainly used useMemo to avoid recalculating metrics transformations on every render.

I also used useQuery to automatically cache the fetched data and prevent unnecessary requests to the server.

These optimizations are important because they reduce computational load and network requests

```

**Q: How does React Query help with performance compared to fetching data on every render?**

Your answer:
```
React Query caches the fetched data automatically, so it doesn't need to be fetched again on every render.
```

### 7. Custom Hooks

**Q: What is the benefit of creating a custom `useMetrics` hook instead of calling `useQuery` directly in components?**

Your answer:
```
We can reuse this hook in deferent components. i used it in the Charts and Cards
```

**Q: Show the signature of your custom hook and explain what it returns.**

Your answer:
```
Signature : export default function useMetrics(startDate: string, endDate: string, organizationId: string)
return : It returns a useQuery from React Query, so we can use this hook like a use query but with custom parameters.
```

---

## 🎓 Trainer Review

**Trainer Name:** _______________
**Review Date:** _______________

**Code Review Checklist:**
- [ ] Multiple chart types implemented correctly
- [ ] React Query custom hook working
- [ ] WoW/MoM calculations are accurate
- [ ] CSV export generates valid files
- [ ] JSON export works correctly
- [ ] Data transformations are memoized
- [ ] Charts are responsive
- [ ] Loading and error states handled
- [ ] Code is performant (no unnecessary re-renders)
- [ ] Code is clean and well-organized
- [ ] TypeScript types are proper

**Quiz Review:**
- [ ] Understands React Query vs Apollo differences
- [ ] Explains caching strategies correctly
- [ ] Can calculate period comparisons
- [ ] Understands data visualization choices
- [ ] Knows performance optimization techniques

**Feedback:**
```
[Trainer feedback here]
```

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Needs Revision | ⬜ Completed

---

**Previous Exercise:** [Exercise 02 - Team Management](./EXERCISE-02-TEAM-MANAGEMENT.md)
**Next Exercise:** [Exercise 04 - Settings](./EXERCISE-04-SETTINGS.md)