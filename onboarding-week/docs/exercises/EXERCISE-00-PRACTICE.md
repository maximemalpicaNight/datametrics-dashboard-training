# Exercise 00: Practical In-App Exercises

This document contains hands-on practice exercises to complement the learning materials in [EXERCISE-00-FUNDAMENTALS.md](./EXERCISE-00-FUNDAMENTALS.md).

## 📍 Location

All practice exercises are located in the `/practice` route of your app.

**Access:** Navigate to [http://localhost:3000/practice](http://localhost:3000/practice) after starting the dev server.

## 🎯 How to Use These Exercises

1. **Complete the reading/video materials first** from Exercise 00
2. **Then do the corresponding practice exercise** in the app
3. **Check your work** by running the app and testing your code
4. **Move to the next section** only when you understand the concept

These are **starter exercises** - we provide the setup, you write the logic.

---

## Part 1: Array Methods Practice

**File:** `app/practice/arrays/page.tsx`

**What to practice:**
- Using `map()` to transform and render lists
- Using `filter()` to show filtered data
- Using `reduce()` to calculate totals

**Exercises:**
1. Display a list of products with `map()`
2. Filter products by price range
3. Calculate total price with `reduce()`

**Expected outcome:** Working product list with filtering and total calculation

---

## Part 2: TypeScript Practice

**File:** `app/practice/typescript/page.tsx`

**What to practice:**
- Typing component props
- Creating type definitions
- Using optional properties
- Type inference

**Exercises:**
1. Add proper types to a UserCard component
2. Type a product list component
3. Create a type for form data

**Expected outcome:** No TypeScript errors, proper autocomplete in your editor

---

## Part 3: Component Design Practice

**File:** `app/practice/components/page.tsx`

**What to practice:**
- When to create a new component
- Component composition
- Reusable components
- Single responsibility

**Exercises:**
1. Refactor a monolithic component into smaller pieces
2. Create a reusable Badge component
3. Extract a StatusIndicator component

**Expected outcome:** Clean component structure with reusable pieces

---

## Part 4: useState Practice

**File:** `app/practice/state/page.tsx`

**What to practice:**
- Managing local state with useState
- Updating state correctly
- State with different data types (string, number, boolean, array, object)

**Exercises:**
1. Build a counter with increment/decrement
2. Create a form with controlled inputs
3. Toggle visibility of content
4. Manage a list of items (add/remove)

**Expected outcome:** Interactive components that respond to user actions

---

## Part 5: useEffect Practice

**File:** `app/practice/effects/page.tsx`

**What to practice:**
- Understanding when useEffect runs
- Dependency arrays
- Cleanup functions
- Data fetching patterns

**Exercises:**
1. Fetch data on component mount
2. Update document title based on state
3. Set up and clean up a timer
4. Sync state with localStorage

**Expected outcome:** Side effects that run at the right time without infinite loops

---

## Part 6: Props vs State Practice

**File:** `app/practice/props-state/page.tsx`

**What to practice:**
- Passing props from parent to child
- Lifting state up
- Understanding data flow
- When to use props vs state

**Exercises:**
1. Pass data down through props
2. Lift state from child to parent
3. Share state between siblings

**Expected outcome:** Understanding of unidirectional data flow

---

## Part 7: Custom Hooks Practice

**File:** `app/practice/hooks/page.tsx`

**What to practice:**
- Extracting reusable logic into custom hooks
- Naming conventions (must start with "use")
- Returning values from hooks

**Exercises:**
1. Create a `useToggle` hook
2. Create a `useLocalStorage` hook
3. Create a `useDebounce` hook

**Expected outcome:** Reusable logic that can be shared across components

---

## ✅ Practice Completion Checklist

- [ ] Arrays: All exercises working, list renders correctly
- [ ] TypeScript: No type errors, proper types added
- [ ] Components: Code is well-organized and reusable
- [ ] State: All interactive features work
- [ ] Effects: Side effects run correctly, no infinite loops
- [ ] Props/State: Data flows correctly between components
- [ ] Hooks: Custom hooks work and are reusable

---

## 💡 Tips

- **Don't rush** - Understanding is more important than speed
- **Test as you go** - Check the browser after each change
- **Read error messages** - They often tell you exactly what's wrong
- **Use console.log** - Debug by logging values
- **Ask questions** - If stuck for 30+ minutes, ask your trainer

---

## 🔄 After Completing Practice

1. Review your code with your trainer
2. Explain what each exercise taught you
3. Complete the main Exercise 00 self-assessment quiz
4. Get approval before moving to Exercise 01

---

**Remember:** These exercises are deliberately simple. The goal is to build muscle memory and understanding, not to create complex features.
