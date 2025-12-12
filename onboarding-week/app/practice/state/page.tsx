'use client';

import { useState } from 'react';

export default function StatePractice() {
  // TODO: Exercise 1 - Create counter state
  // Hint: const [count, setCount] = useState(0);``
  const [count, setCount] = useState(0);

  // TODO: Exercise 2 - Create form input state
  // Hint: const [name, setName] = useState('');
  const [name, setName] = useState('');

  // TODO: Exercise 3 - Create boolean toggle state
  // Hint: const [isVisible, setIsVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // TODO: Exercise 4 - Create array state for list items
  // Hint: const [items, setItems] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>(["coucou"]);
  const [inputValue, setInputValue] = useState("");

  const removeItem = (index: number) => {
    setItems(items.filter((_,i) => i !== index))
  }

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  }


  // TODO: Exercise 5 - Create object state for form
  // Hint: const [form, setForm] = useState({ email: '', message: '' });

  const [form, setForm] = useState({ email: '', message: '' });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">useState Practice</h1>
        <p className="text-gray-600">
          Practice managing different types of state with useState hook
        </p>
      </div>

      {/* Exercise 1: Counter */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 1: Counter</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a counter with increment, decrement, and reset buttons.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500 mb-4">TODO: Create counter state and buttons</p>
          {/*
            Expected UI:
            <div className="flex items-center gap-4">
              <button onClick={decrement}>-</button>
              <span className="text-3xl font-bold">{count}</span>
              <button onClick={increment}>+</button>
              <button onClick={reset}>Reset</button>
            </div>
          */}
          <div className="flex items-center gap-4">
              <button onClick={() => setCount(prev => prev--)}>-</button>
              <span className="text-3xl font-bold">{count}</span>
              <button onClick={() => setCount(prev => prev++)}>+</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
      </section>

      {/* Exercise 2: Controlled Input */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 2: Controlled Input</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a controlled input that displays what you type.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500 mb-4">TODO: Create input state and controlled input</p>
          {/*
            Expected UI:
            <div className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
                className="border rounded px-3 py-2 w-full"
              />
              <p>Hello, {name || 'stranger'}!</p>
            </div>
          */}
            <div className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
                className="border rounded px-3 py-2 w-full"
              />
              <p>Hello, {name || 'stranger'}!</p>
            </div>
        </div>
      </section>

      {/* Exercise 3: Toggle Visibility */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 3: Toggle Visibility</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a button that toggles content visibility.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500 mb-4">TODO: Create boolean state and toggle button</p>
          {/*
            Expected UI:
            <div className="space-y-3">
              <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Content
              </button>
              {isVisible && (
                <div className="bg-blue-50 p-4 rounded">
                  <p>🎉 This content is now visible!</p>
                </div>
              )}
            </div>
          */}
            <div className="space-y-3">
              <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide' : 'Show'} Content
              </button>
              {isVisible && (
                <div className="bg-blue-50 p-4 rounded">
                  <p>🎉 This content is now visible!</p>
                </div>
              )}
            </div>
        </div>
      </section>

      {/* Exercise 4: List Management */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 4: List Management (Array State)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Create a list where you can add and remove items.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500 mb-4">TODO: Create array state, input, add/remove functions</p>
          {/*
            Hints:
            - Add item: setItems([...items, newItem])
            - Remove item: setItems(items.filter((_, i) => i !== index))

            Expected UI:
            <div className="space-y-3">
              <div className="flex gap-2">
                <input value={inputValue} onChange={...} placeholder="Add item" />
                <button onClick={addItem}>Add</button>
              </div>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="flex justify-between bg-white p-2 rounded">
                    <span>{item}</span>
                    <button onClick={() => removeItem(index)}>Remove</button>
                  </li>
                ))}
              </ul>
            </div>
          */}
           <div className="space-y-3">
              <div className="flex gap-2">
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add item" />
                <button onClick={addItem}>Add</button>
              </div>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex justify-between bg-white p-2 rounded">
                  <span>{item}</span>
                  <button onClick={() => removeItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Exercise 5: Object State (Form) */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 5: Object State (Form Data)</h2>
        <p className="text-sm text-gray-600 mb-4">
          Manage form data with object state.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-500 mb-4">TODO: Create object state for form with email and message</p>
          {/*
            Hints:
            - Update property: setForm({ ...form, email: newValue })
            - Or use function: setForm(prev => ({ ...prev, email: newValue }))

            Expected UI:
            <div className="space-y-3">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message"
              />
              <div className="bg-white p-3 rounded">
                <p className="text-sm font-semibold">Form Data:</p>
                <pre className="text-xs">{JSON.stringify(form, null, 2)}</pre>
              </div>
            </div>
          */}
          <div className="space-y-3">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Message"
            />
            <div className="bg-white p-3 rounded">
              <p className="text-sm font-semibold">Form Data:</p>
              <pre className="text-xs">{JSON.stringify(form, null, 2)}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="border-t pt-6 bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-900 mb-2">✅ Expected Results:</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Counter increments/decrements correctly</li>
          <li>• Input shows what you type in real-time</li>
          <li>• Content toggles on button click</li>
          <li>• Can add items to list and remove them</li>
          <li>• Form data updates as you type</li>
        </ul>
        <div className="mt-3 p-3 bg-yellow-100 rounded">
          <p className="font-semibold text-yellow-900 mb-1">💡 Key Concepts:</p>
          <ul className="text-xs text-yellow-800 space-y-1">
            <li>• Never mutate state directly (no <code>count = count + 1</code>)</li>
            <li>• Always use setState function</li>
            <li>• For objects/arrays: create new copy with spread operator</li>
            <li>• State updates trigger re-renders</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
