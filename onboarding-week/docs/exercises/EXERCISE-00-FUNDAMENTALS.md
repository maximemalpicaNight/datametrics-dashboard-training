# Exercise 00: JavaScript, TypeScript & React Fundamentals

## 📖 Required Reading & Learning Resources

**⚠️ CRITICAL: This is your foundation. Complete ALL materials before Exercise 01!**

This exercise is pure learning - no coding in the main project yet. You'll build understanding through tutorials, small experiments, and practice exercises. Budget 8 hours for this foundational work.

## 💻 In-App Practice Exercises

Each section includes **in-app practice exercises** at `/practice` to reinforce what you learn:

- **[/practice/arrays](/practice/arrays)** - Array methods (map, filter, reduce)
- **[/practice/typescript](/practice/typescript)** - TypeScript basics
- **[/practice/components](/practice/components)** - Component design
- **[/practice/state](/practice/state)** - useState hook
- **[/practice/effects](/practice/effects)** - useEffect hook
- **[/practice/props-state](/practice/props-state)** - Props vs State
- **[/practice/hooks](/practice/hooks)** - Custom hooks

**How to use:** Read the materials first, then practice in the app. Test your understanding with hands-on coding.

---

## Part 1: Modern JavaScript (ES6+) - 90 minutes

### 1.1 Arrow Functions & Array Methods (45 min)
**Why:** React components use arrow functions everywhere. Array methods (map, filter, reduce) are essential for rendering lists and processing data.

- 📺 **[JavaScript Array Methods](https://www.youtube.com/watch?v=R8rmfD9Y5-c)** (20 min) - map, filter, reduce, find
- 📄 **[MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** (15 min) - Scan the list, focus on: map, filter, reduce, find, some, every
- 🛠️ **Practice:** Open browser console and complete these:

```javascript
// 1. Transform array of numbers to doubled values
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2)

// 2. Filter only even numbers
const evens = numbers.filter(n => n % 2 === 0)

// 3. Sum all numbers using reduce
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

// 4. Transform array of users to just names
const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
const names = users.map(user => user.name)
```

**Key Concepts:**
 What does `map()` return? When do you use it in React?

The map method returns a new array where an operation has been performed on each element. The map method is used in JSX, for example, to display a list of data.

- Difference between `filter()` and `find()`?

The main difference is that filter returns an array based on a condition, while find returns the first element that matches the condition.

- What is `reduce()` and why is it powerful?

Reduce is a method that allows you to traverse an array using an accumulator (a value that will be available throughout the method) and the current value, which is the value.

**💻 In-App Practice:** After completing the reading, practice array methods in the app at [/practice/arrays](/practice/arrays)

### 1.2 Destructuring & Spread Operator (30 min)
**Why:** React props and state use destructuring constantly. Spread operator is crucial for immutable updates.

- 📺 **[Destructuring in 100 Seconds](https://www.youtube.com/watch?v=UgEaJBz3bjY)** (2 min)
- 📺 **[Destructuring & Spread](https://www.youtube.com/watch?v=NIq3qLaHCIs)** (15 min)
- 🛠️ **Practice:**

```javascript
// Object destructuring
const user = { name: 'Alice', age: 25, email: 'alice@example.com' };
const { name, age } = user

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second] = colors

// Spread operator - copy and add
const newUser = { ...user, country: 'USA' };
const newColors = [...colors, 'yellow'];
```

**Key Concepts:**
- How to destructure function parameters (props)?

You can destruct a function parameter using {}.

example :

function Car({color}) {
  return (
    <h2>My car is {color}!</h2>
  );
}

Here, we will only retrieve the color value passed as an argument.

- Why can't you modify state directly in React?

By directly modifying the value of a variable in React, React does not know that the value has been modified and therefore cannot render it. The only way to modify a state is via its internal setState function.

- How spread creates new objects/arrays?

Spread create a new array/objey by unpacking the original array/object and making a shallow copy. Which is a copy of the reference to the original object, modifying an embedded object in the copy will also affect the original, and vice versa.

### 1.3 Promises & Async/Await (15 min)
**Why:** Data fetching in React uses async operations.

- 📺 **[Async/Await in 100 Seconds](https://www.youtube.com/watch?v=vn3tm0quoqE)** (2 min)
- 📄 **[MDN Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)** (10 min)

**Key Concepts:**
- What is a Promise?

A promise represents that may be available now, in the future or never. In the cas of asynchronous operation it makes sense because, we do not know the return value during the operation, so we have to wait for the result and therefore use a promise. 

- async/await vs .then()

The async await will pause the function execution until the promise settles. With then(), the rest of the function will continue to execute but JavaScript won't execute the .then() callback until the promise settles.

---

## Part 2: TypeScript Essentials - 60 minutes

### 2.1 TypeScript Basics (30 min)
**Why:** This project uses TypeScript. Understanding types prevents bugs and improves DX.

- 📺 **[TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)** (2 min)
- 📺 **[TypeScript for React Developers](https://www.youtube.com/watch?v=TPACABQTHvM)** (25 min)

**Key Concepts:**
- Difference between `type` and `interface`?

A type can be used to type a primary type, for example: type Id = string | number

Interfaces only allow objects to be created, and they can also be merged (which types cannot do).

- What is type inference?

This comes from the compiler, which automatically deduces the type of a variable. For example, in the case of let x = 5, the compiler deduces that 5 is a Number, so the developer does not need to type this variable.
- When to use `any` (almost never!)

### 2.2 Typing React Components (30 min)
**Why:** You'll write typed React components in every exercise.

- 📄 **[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)** (20 min)
- 🛠️ **Practice:**

```typescript
// Type a simple component
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean; // optional
};

function Button({ label, onClick, disabled }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
}
```

**Key Concepts:**
- How to type component props?

To type a component props, you can use a type with the name of the component + props in order to have a clear syntax. Then you indicate the different parameters that the component will take.

Example:

type ButtonProps = {
label: string;
};


function Button({ label }: ButtonProps) {
return <button>{label}</button>;
}

- What is the `?` for optional props?

This makes the props optional, meaning that it is acceptable not to provide them in the component.

- How to type event handlers?

The event types are provided by React, so we don't need to type them ourselves.

For example, if we have a handleSubmit function that is triggered by the submit of a form <form onSubmit={handleSubmit}>," here we can type the function by directly using an react.FormEvent<HTMLFormElement> .

**💻 In-App Practice:** After completing the reading, practice TypeScript in the app at [/practice/typescript](/practice/typescript)

---

## Part 3: Thinking in React - 90 minutes

### 3.1 React Mental Model (45 min)
**Why:** Understanding React's philosophy is more important than memorizing APIs.

- 📄 **[Thinking in React](https://react.dev/learn/thinking-in-react)** (25 min) - **ESSENTIAL READING** - Official React docs
- 📺 **[React for Beginners](https://www.youtube.com/watch?v=E8lXC2mR6-k)** (20 min) - How React works

**Key Concepts to Understand:**
- What is the component tree?

The component tree allows React to structure the components of the entire application. Components are defined as nodes. We can therefore say that the root node is the app.js file.

The tree hierarchy consists of the top and bottom. At the top are the components closest to the root, which therefore influence performance, while the leaf components are at the bottom and are less likely to change, have less impact on performance, and are more likely to be re-rendered.

The component tree is linked by branches. These links in the code refer to an import, for example: import PageWrapper from "@/components/ui/Button".

- What does "declarative" mean?

This concept allows you to define what you want to display in the UI without focusing on how to do it. In the case of React, I can have a state that changes a color. Here, I only need to declare the state that allows me to display it. Outside of React, it takes care of applying the changes (re-rendering).

- One-way data flow: what does this mean?

Data can be passed from a parent component to a child component (via props), and this is done in one direction only, from the top of the hierarchy to the bottom. A changing value includes reactivity, and therefore a parent that sends reactivity to a child must take into account that its child will then have to render this component, which must be considered in terms of performance.

- UI = f(state) - explain this formula

UI = f(state) means that the user interface depends on the state of the application, the function f takes this state as a parameter and produces the corresponding UI, and each time the state changes, the UI is automatically recalculated from this function.

This equality shows that the interface visible at the present moment is the result of the state at that same moment with a function.

An example would be: component f takes the state and produces the interface.

### 3.2 Components: When and Why (45 min)
**Why:** Component design is an art. Learn when to create components vs when to keep code together.

- 📄 **[Component Composition](https://react.dev/learn/passing-props-to-a-component)** (20 min) - Official React docs

**Key Concepts:**
- When should you create a new component?

At first, when we notice repetitive logic in multiple components, we allow for reusability.

Example: create a reusable button component throughout my app, in which case I can reuse it throughout my codebase. no need to recode it.

We can also create a new component if our page includes several different logics, for example on a page we can have the Header, the Footer, Cards, etc., which each have different logic.

- What makes a component reusable?

A component must be autonomous and operate with its own internal logic, without its parents being able to affect that logic. This makes it rigid and not sensitive to break.

The parent component can modify a component through its props without breaking it, so a component must be designed to be customizable while still keeping a clear and specific goal.

Example: a Button component displays a button; however, its parent component can customize it.

- Component vs Container pattern (what's the difference?)

A component handles the display logic, while a container serves to wrap a more internal and applicative logic, for example in the case of global states with contexts. Here, we need to containerize our app so that the global state is available throughout the entire application.

- Single Responsibility Principle

A component must have a goal to achieve, which leads to a single reason to change if I want to make modifications to this code. So if I need to modify this component, it becomes easier because my component only achieves one goal.

Other advantages:
Makes unit testing easier
Makes maintenance easier
Reduces redundancy

**Practice: Analyze This UI**
```
Dashboard Page
├── Header (logo, user menu)
├── MetricCards (4 cards)
│   ├── Card (revenue)
│   ├── Card (users)
│   ├── Card (conversion)
│   └── Card (growth)
└── Chart (line chart)
```

Questions:
Questions:
- Which parts should be separate components? Why?

Header => Logo, Navbar, Login, Signup, ProfilePicture.

Card => CardTitle, CardDescription, CardStatistics

Chart => ChartTitle, ChartDescription, LineChart.

- Should MetricCard be one component or four?

I prefer a single component here because the MetricCards component retrieves the data (different data but using the same component) and maps it by reusing the Card component.

- When would you extract a component?

In the exercise, if the application needs to have multiple charts (PieChart, BarChart, LineChart), in this case it would be necessary to extract the different types of charts into components.


**💻 In-App Practice:** After completing the reading, practice component design in the app at [/practice/components](/practice/components)

---

## Part 4: React Hooks Deep Dive - 120 minutes

### 4.1 useState - Managing State (30 min)
**Why:** State is data that changes over time. useState is your tool for managing it.

- 📺 **[useState Hook Explained](https://www.youtube.com/watch?v=O6P86uwfdR0)** (15 min)
- 📄 **[useState Reference](https://react.dev/reference/react/useState)** (15 min) - Official docs

**Practice:**
```javascript
// Create a counter component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

/ Questions:
// - Why can't you do: count = count + 1?

/* 
Because the count is read-only and therefore immutable, this comes from React because changing the value of the variable in this way does not cause a re-render. To trigger a change in count, you must use setCount.
*


// - What does setCount(count + 1) return?

// setCount does not return anything; its purpose is to put the state change in the queue

// the current value without any modification, beacause the values is not already rendered.

// - How to update based on previous state?
/*
const [count, setCount] = useState(0);

function increment() {
  setCount(prevCount => prevCount + 1);
}

Here, I am sure that my state will be updated with the previous value; otherwise (if I spam the clicks, I risk having value jumps).

*/
```

**Key Concepts:**
- State vs variables: what's the difference?
- Why call setState instead of mutating?
- Functional updates: `setState(prev => prev + 1)`

**💻 In-App Practice:** After completing the reading, practice useState in the app at [/practice/state](/practice/state)

### 4.2 useEffect - Side Effects (35 min)
**Why:** useEffect handles data fetching, subscriptions, and DOM manipulations.

- 📺 **[useEffect Explained](https://www.youtube.com/watch?v=0ZJgIjIuY7U)** (20 min)
- 📄 **[useEffect Reference](https://react.dev/reference/react/useEffect)** (15 min) - Official docs

**Practice:**
```javascript
// Fetch data on component mount
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]); // dependency array

  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

// Questions:
// - What is the dependency array for?
// - What happens if you omit []?
// - When does useEffect run?
```

**Key Concepts:**
- What are "side effects"?
- Dependency array: why is it important?
- Cleanup functions (returning from useEffect)
- Common mistake: infinite loops

**💻 In-App Practice:** After completing the reading, practice useEffect in the app at [/practice/effects](/practice/effects)

### 4.3 Custom Hooks (30 min)
**Why:** Custom hooks let you extract reusable logic. Essential for clean code.

- 📺 **[Custom Hooks Explained](https://www.youtube.com/watch?v=6ThXsUwLWvc)** (20 min)
- 📄 **[Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)** (10 min)

**Practice:**
```javascript
// Create a custom hook for fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Use it
function MyComponent() {
  const { data, loading } = useFetch('/api/users');
  // ...
}
```

**Key Concepts:**
- When to extract a custom hook?
- Naming: must start with "use"
- What should a custom hook return?

**💻 In-App Practice:** After completing the reading, practice custom hooks in the app at [/practice/hooks](/practice/hooks)

### 4.4 Rules of Hooks (25 min)
**Why:** Hooks have rules. Break them = bugs.

- 📄 **[Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)** (15 min) - Official docs
- 🛠️ **Identify Mistakes:**

```javascript
// ❌ BAD: Hook inside condition
function Component() {
  if (someCondition) {
    const [state, setState] = useState(0); // WRONG!
  }
}

// ✅ GOOD: Hook at top level
function Component() {
  const [state, setState] = useState(0);
  if (someCondition) {
    // use state here
  }
}

// ❌ BAD: Hook in regular function
function normalFunction() {
  const [state, setState] = useState(0); // WRONG!
}

// ✅ GOOD: Hook in component or custom hook
function useCustomHook() {
  const [state, setState] = useState(0); // OK
  return state;
}
```

**Key Concepts:**
- Only call hooks at top level
- Only call hooks in React functions
- Why these rules exist (linked list!)

---

## Part 5: Props vs State - 30 minutes

### 5.1 Understanding the Difference (30 min)
**Why:** Knowing when to use props vs state is fundamental to React.

- 📺 **[Props vs State](https://www.youtube.com/watch?v=IYvD9oBCuJI)** (15 min)
- 📄 **[State: A Component's Memory](https://react.dev/learn/state-a-components-memory)** (15 min)

**Mental Model:**
```
Props:
- Data passed FROM parent TO child
- Read-only (immutable)
- Like function parameters

State:
- Data managed WITHIN component
- Can be changed (mutable via setState)
- Like local variables that trigger re-renders
```

**Practice: Identify Props vs State**
```javascript
// Which should be props? Which should be state?
function ProfileCard() {
  // User name - shown but never changes in this component
  // Like count - changes when user clicks button
  // Profile photo URL - passed from parent
  // isEditing - toggles edit mode
  // Submit button loading state - changes during save
}
```

**Key Concepts:**
- Lifting state up: when and why?
- Props flow down, events flow up
- Derived state: calculate from props/state

**💻 In-App Practice:** After completing the reading, practice props vs state in the app at [/practice/props-state](/practice/props-state)

---

## Part 6: React Hook Form - 30 minutes

### 6.1 Why Form Libraries? (30 min)
**Why:** Forms are hard. Libraries handle the complexity.

- 📺 **[React Hook Form Tutorial](https://www.youtube.com/watch?v=RkXv4AXXC_4)** (20 min)
- 📄 **[React Hook Form Docs](https://react-hook-form.com/get-started)** (10 min) - Scan the basics

**Key Concepts:**
- Controlled vs uncontrolled forms
- Why use a form library?
- Form validation
- Performance benefits

**Note:** You'll practice forms in Exercise 04, but understand the concept now.

---

## Part 7: Hands-On Practice - 60 minutes

### 7.1 Build a Simple Todo App (60 min)
**Why:** Apply everything you learned in one project.

**Requirements:**
1. Display list of todos
2. Add new todo (input + button)
3. Toggle todo complete/incomplete
4. Delete todo
5. Filter: All, Active, Completed

**Starter Code:**
```typescript
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Your code here

  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
}
```

**What to Practice:**
- useState for todos and filter
- Array methods: map (render), filter (by status)
- Event handlers: add, toggle, delete
- Controlled input for new todo
- Conditional rendering for filters

**Deliverable:** Working todo app (create a new file, don't modify the main project)

---

## ✅ Self-Assessment Quiz

After completing all sections, answer these questions **in your own words**:

### JavaScript/TypeScript
1. Explain what `map()` does and when to use it in React.
2. Why can't you do `state.push(item)` in React?
3. What is the spread operator and why is it important?
4. What's the difference between `type` and `interface` in TypeScript?

### Thinking in React
5. Explain "UI as a function of state" in one paragraph.
6. When should you create a new component vs keeping code in one component?
7. What is component composition and why is it important?

### React Hooks
8. What does `useState` return? Explain both values.
9. What is the dependency array in `useEffect` for?
10. What are the Rules of Hooks and why do they exist?
11. When should you create a custom hook?

### Props vs State
12. Explain the difference between props and state.
13. What does "lifting state up" mean and when do you do it?
14. Can a component modify its props? Why or why not?

### Array Methods in React
15. Show how to render a list of users using `map()`.
16. Show how to filter todos to only show completed ones.
17. How would you calculate the total price from an array of products?

---

## 📝 Completion Checklist

Mark these off as you complete each section:

- [ ] Completed all JavaScript ES6+ materials (90 min)
- [ ] Completed TypeScript essentials (60 min)
- [ ] Read "Thinking in React" official docs
- [ ] Completed all React hooks materials (120 min)
- [ ] Understand props vs state difference
- [ ] Learned about React Hook Form
- [ ] Built the Todo app (60 min)
- [ ] Answered all self-assessment questions
- [ ] Can explain concepts in own words

**Total Time:** ~8 hours

---

## 🎯 What's Next?

Once you've completed this exercise and can confidently answer the self-assessment questions:

1. **Review your Todo app** with your trainer
2. **Discuss your answers** to the self-assessment quiz
3. **Get approval** to move to Exercise 01

**If you struggle with any concepts:**
- Review the materials again
- Ask your trainer for clarification
- Don't move forward until you understand

**Remember:** This foundation is critical. Every subsequent exercise builds on these concepts. Invest time here to succeed later.

---

## 📚 Additional Resources (Optional)

If you want to go deeper:

- 📺 [Full React Course](https://www.youtube.com/watch?v=bMknfKXIFA8) - 11 hours (comprehensive)
- 📄 [React Docs](https://react.dev/learn) - Read the entire "Learn React" section
- 📄 [JavaScript.info](https://javascript.info/) - Deep dive into modern JavaScript
- 🎮 [TypeScript Playground](https://www.typescriptlang.org/play) - Practice TypeScript
- 📄 [Patterns.dev](https://www.patterns.dev/react) - Advanced React patterns

---

## 🎓 Trainer Review Section

**Trainee Name:** _______________
**Completion Date:** _______________

**Code Review (Todo App):**
- [ ] Uses hooks correctly
- [ ] State management is appropriate
- [ ] Array methods used properly
- [ ] Components are well-structured
- [ ] TypeScript types are correct
- [ ] No anti-patterns

**Quiz Review:**
- [ ] Understands JavaScript array methods
- [ ] Can explain React mental model
- [ ] Understands hooks and their rules
- [ ] Knows props vs state difference
- [ ] Can apply concepts in practice

**Feedback:**
```
[Trainer notes here]
```

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Needs Revision | ⬜ Approved for Exercise 01

---

**Next Step:** [Exercise 01 - Dashboard Overview](./EXERCISE-01-DASHBOARD.md)
