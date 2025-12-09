'use client';

import { useState, useEffect } from 'react';

export default function EffectsPractice() {
  // TODO: Exercise 1 - Fetch data on mount
  // Hint: useEffect(() => { fetch and set data }, []);

  // TODO: Exercise 2 - Update document title
  // Hint: useEffect(() => { document.title = ... }, [dependency]);

  // TODO: Exercise 3 - Timer with cleanup
  // Hint: useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []);

  // TODO: Exercise 4 - Sync with localStorage
  // Hint: useEffect(() => { localStorage.setItem(...) }, [value]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">useEffect Practice</h1>
        <p className="text-gray-600">
          Practice side effects, dependencies, and cleanup functions
        </p>
      </div>

      {/* Exercise 1: Fetch on mount */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 1: Fetch Data on Mount</h2>
        <p className="text-sm text-gray-600 mb-4">
          Fetch user data when component mounts. Show loading state.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500">TODO: Fetch from https://jsonplaceholder.typicode.com/users/1</p>
          {/*
            Expected implementation:
            const [user, setUser] = useState(null);
            const [loading, setLoading] = useState(true);

            useEffect(() => {
              fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(res => res.json())
                .then(data => {
                  setUser(data);
                  setLoading(false);
                });
            }, []); // Empty array = run once on mount

            if (loading) return <p>Loading...</p>;
            return <div>{user.name} - {user.email}</div>;
          */}
        </div>
      </section>

      {/* Exercise 2: Update document title */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 2: Update Document Title</h2>
        <p className="text-sm text-gray-600 mb-4">
          Update browser tab title based on counter value.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500">TODO: Create counter and update document.title</p>
          {/*
            Expected implementation:
            const [count, setCount] = useState(0);

            useEffect(() => {
              document.title = `Count: ${count}`;
            }, [count]); // Runs when count changes

            return (
              <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            );
          */}
        </div>
      </section>

      {/* Exercise 3: Timer with cleanup */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 3: Timer with Cleanup</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a timer that increments every second. Clean up on unmount.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500">TODO: Create timer with setInterval and cleanup</p>
          {/*
            Expected implementation:
            const [seconds, setSeconds] = useState(0);

            useEffect(() => {
              const intervalId = setInterval(() => {
                setSeconds(s => s + 1);
              }, 1000);

              // Cleanup function - runs when component unmounts
              return () => {
                clearInterval(intervalId);
              };
            }, []); // Empty array = set up once

            return <p>Timer: {seconds}s</p>;
          */}
        </div>
      </section>

      {/* Exercise 4: Sync with localStorage */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 4: Sync State with localStorage</h2>
        <p className="text-sm text-gray-600 mb-4">
          Save input value to localStorage. Load it on mount.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500">TODO: Create input that persists to localStorage</p>
          {/*
            Expected implementation:
            const [text, setText] = useState('');

            // Load from localStorage on mount
            useEffect(() => {
              const saved = localStorage.getItem('myText');
              if (saved) setText(saved);
            }, []);

            // Save to localStorage when text changes
            useEffect(() => {
              localStorage.setItem('myText', text);
            }, [text]);

            return (
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
              />
            );
          */}
        </div>
      </section>

      {/* Exercise 5: Dependency array practice */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 5: Understanding Dependencies</h2>
        <p className="text-sm text-gray-600 mb-4">
          Fix the infinite loop bugs in these examples.
        </p>
        <div className="bg-red-50 p-6 rounded-lg space-y-4">
          <div>
            <p className="font-semibold text-red-900 mb-2">❌ Bug 1: Infinite Loop</p>
            <pre className="text-xs bg-red-100 p-3 rounded overflow-x-auto">
{`// This causes infinite loop!
const [data, setData] = useState([]);

useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(result => setData(result));
}); // Missing dependency array!

// Fix: Add empty array []`}
            </pre>
          </div>

          <div>
            <p className="font-semibold text-red-900 mb-2">❌ Bug 2: Stale Closure</p>
            <pre className="text-xs bg-red-100 p-3 rounded overflow-x-auto">
{`// This won't update when userId changes!
const [user, setUser] = useState(null);

useEffect(() => {
  fetchUser(userId).then(setUser);
}, []); // Missing userId in dependencies!

// Fix: Add [userId]`}
            </pre>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="border-t pt-6 bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-900 mb-2">✅ Expected Results:</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Data loads on component mount</li>
          <li>• Browser tab title updates with counter</li>
          <li>• Timer increments every second</li>
          <li>• Input value persists after page refresh</li>
          <li>• No infinite loops or console warnings</li>
        </ul>
        <div className="mt-3 p-3 bg-yellow-100 rounded">
          <p className="font-semibold text-yellow-900 mb-1">💡 Dependency Array Rules:</p>
          <ul className="text-xs text-yellow-800 space-y-1">
            <li>• No array = runs after every render (dangerous!)</li>
            <li>• Empty <code>[]</code> = runs once on mount</li>
            <li>• <code>[value]</code> = runs when value changes</li>
            <li>• Return function = cleanup (runs on unmount)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
