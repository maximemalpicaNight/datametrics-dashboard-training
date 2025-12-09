'use client';

import { useState, useEffect } from 'react';

// TODO: Exercise 1 - Create useToggle custom hook
// function useToggle(initialValue = false) {
//   const [value, setValue] = useState(initialValue);
//   const toggle = () => setValue(!value);
//   return [value, toggle] as const;
// }

// TODO: Exercise 2 - Create useLocalStorage custom hook
// function useLocalStorage(key: string, initialValue: string) {
//   const [value, setValue] = useState(() => {
//     const saved = localStorage.getItem(key);
//     return saved || initialValue;
//   });
//
//   useEffect(() => {
//     localStorage.setItem(key, value);
//   }, [key, value]);
//
//   return [value, setValue] as const;
// }

// TODO: Exercise 3 - Create useDebounce custom hook
// function useDebounce(value: string, delay: number) {
//   const [debouncedValue, setDebouncedValue] = useState(value);
//
//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);
//
//     return () => clearTimeout(timeoutId);
//   }, [value, delay]);
//
//   return debouncedValue;
// }

export default function CustomHooksPractice() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Custom Hooks Practice</h1>
        <p className="text-gray-600">
          Practice extracting reusable logic into custom hooks
        </p>
      </div>

      {/* Exercise 1: useToggle */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 1: useToggle Hook</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a reusable hook for boolean toggles.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div className="bg-white p-4 rounded border">
            <p className="text-gray-500 text-sm mb-3">TODO: Implement useToggle hook and use it here</p>
            {/*
              Expected implementation:
              const [isOn, toggleIsOn] = useToggle(false);

              return (
                <div>
                  <p>Light is: {isOn ? '💡 ON' : '⚫ OFF'}</p>
                  <button onClick={toggleIsOn}>Toggle Light</button>
                </div>
              );
            */}
          </div>
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded text-sm">
          <p className="font-semibold text-blue-900 mb-1">💡 Why create this hook?</p>
          <p className="text-blue-800 text-xs">
            Boolean toggles are common (modals, dropdowns, visibility). Extract once, reuse everywhere!
          </p>
        </div>
      </section>

      {/* Exercise 2: useLocalStorage */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 2: useLocalStorage Hook</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a hook that syncs state with localStorage.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div className="bg-white p-4 rounded border">
            <p className="text-gray-500 text-sm mb-3">TODO: Implement useLocalStorage hook</p>
            {/*
              Expected implementation:
              const [name, setName] = useLocalStorage('userName', '');

              return (
                <div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                  <p className="text-xs mt-2 text-gray-500">
                    Refresh page - your name persists!
                  </p>
                </div>
              );
            */}
          </div>
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded text-sm">
          <p className="font-semibold text-blue-900 mb-1">💡 Why create this hook?</p>
          <p className="text-blue-800 text-xs">
            Syncing state with localStorage is repetitive. This hook handles loading, saving, and state management.
          </p>
        </div>
      </section>

      {/* Exercise 3: useDebounce */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 3: useDebounce Hook</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a hook that delays updating a value.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div className="bg-white p-4 rounded border">
            <p className="text-gray-500 text-sm mb-3">TODO: Implement useDebounce hook</p>
            {/*
              Expected implementation:
              const [searchTerm, setSearchTerm] = useState('');
              const debouncedSearch = useDebounce(searchTerm, 500);

              useEffect(() => {
                if (debouncedSearch) {
                  console.log('Searching for:', debouncedSearch);
                  // Fetch search results here
                }
              }, [debouncedSearch]);

              return (
                <div>
                  <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                  />
                  <p className="text-xs mt-2">
                    Debounced value: {debouncedSearch}
                  </p>
                </div>
              );
            */}
          </div>
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded text-sm">
          <p className="font-semibold text-blue-900 mb-1">💡 Why create this hook?</p>
          <p className="text-blue-800 text-xs">
            Prevents excessive API calls while user types. Waits for user to stop typing before triggering action.
          </p>
        </div>
      </section>

      {/* Exercise 4: Use all three hooks */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 4: Combine Your Hooks</h2>
        <p className="text-sm text-gray-600 mb-4">
          Build a mini search interface using all three custom hooks.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="bg-white p-4 rounded border">
            <p className="text-gray-500 text-sm">TODO: Create search UI using useToggle, useLocalStorage, useDebounce</p>
            {/*
              Expected:
              - useToggle for "Advanced Search" panel visibility
              - useLocalStorage to remember last search term
              - useDebounce to delay search while typing

              const [showAdvanced, toggleAdvanced] = useToggle(false);
              const [savedSearch, setSavedSearch] = useLocalStorage('lastSearch', '');
              const [query, setQuery] = useState(savedSearch);
              const debouncedQuery = useDebounce(query, 500);
            */}
          </div>
        </div>
      </section>

      {/* Custom hooks rules */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Custom Hooks Rules</h2>
        <div className="bg-white rounded-lg border p-6">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <p className="font-semibold">Must start with "use"</p>
                <p className="text-gray-600 text-xs">
                  React knows it's a hook: <code className="bg-gray-100 px-1">useToggle</code>, <code className="bg-gray-100 px-1">useLocalStorage</code>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <p className="font-semibold">Can use other hooks</p>
                <p className="text-gray-600 text-xs">
                  Custom hooks can call useState, useEffect, other custom hooks
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <p className="font-semibold">Extract reusable logic</p>
                <p className="text-gray-600 text-xs">
                  If logic repeats in multiple components, extract to custom hook
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✗</span>
              <div>
                <p className="font-semibold">Don't call conditionally</p>
                <p className="text-gray-600 text-xs">
                  Same rules as built-in hooks - must be at top level
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Expected Results */}
      <section className="border-t pt-6 bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-900 mb-2">✅ Expected Results:</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• useToggle: Light toggles on/off</li>
          <li>• useLocalStorage: Input persists after refresh</li>
          <li>• useDebounce: Debounced value updates after 500ms</li>
          <li>• Exercise 4: All hooks work together</li>
        </ul>
        <div className="mt-3 p-3 bg-yellow-100 rounded">
          <p className="font-semibold text-yellow-900 mb-1">💡 When to create custom hooks?</p>
          <ul className="text-xs text-yellow-800 space-y-1">
            <li>• Logic used in 2+ components</li>
            <li>• Stateful logic that can be abstracted</li>
            <li>• Side effects that can be reused</li>
            <li>• Makes components cleaner and easier to read</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
