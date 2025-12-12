
'use client';

import { useState } from 'react';

// TODO: Exercise 1 - Pass props from parent to child
// This component receives props from parent
function UserGreeting(props: { name: string; age: number }) {
  return (
    <div className="bg-white p-4 rounded border">
      <div>name : {props.name}, age : {props.age} </div>
    </div>
  );
}

// TODO: Exercise 2 - Lift state up
// These two components need to share state - where should the state live?
function TemperatureInput({celsius, setCelsius} : {celsius : number, setCelsius : (value:number) => void} ) {
  
  return (
    <div className="space-y-2">
      <div>
        <label className="block text-sm font-medium mb-1">Celsius</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(Number(e.target.value))}
          className="border rounded px-3 py-2 w-full"
        />
      </div>
    </div>
  );
}

function TemperatureDisplay( ) {

  const [celsius, setCelsius] = useState(0);
  
  return (
    <div className="bg-blue-50 p-4 rounded">
      <div>
        <TemperatureInput celsius={celsius} setCelsius={setCelsius} />
      </div>
      <p className="text-sm">Temperature: {celsius}°C = {(celsius*9/5) + 32}°F</p>
    </div>
  );
}

// TODO: Exercise 3 - Events flow up, data flows down
// Child needs to tell parent about button clicks
function LikeButton( { onClikChildButton } : { onClikChildButton: ( data:number ) => void} ) {

  const [like, setLike] = useState(0);

  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {setLike(prev => prev + 1); onClikChildButton(like + 1) }}>
      ❤️ Like
    </button>
  );
}

function LikeCounter() {
  // TODO: This should show how many times LikeButton was clicked
  const [ChildButton, setChildButton] = useState(0);

  const handleChildButton = (data: number) => {
    setChildButton(data)
  }

  return (
    <div>
      <p className="text-sm text-gray-600">Likes: {ChildButton}</p>
      <LikeButton onClikChildButton={handleChildButton} />
    </div>
  );
}

export default function PropsStatePractice() {
  // TODO: Exercise 1 - Create state to pass as props
  const [userName, setUsername] = useState('Alice'); // Make this state so it can be changed
  const [userAge, setUserAge] = useState(25); // Make this state too

  // TODO: Exercise 2 - Lift temperature state here
  // Then pass it down to both components

  // TODO: Exercise 3 - Lift like count state here
  // Pass count to LikeCounter, pass increment function to LikeButton

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Props vs State Practice</h1>
        <p className="text-gray-600">
          Practice data flow: props down, events up, lifting state
        </p>
      </div>

      {/* Exercise 1: Props from parent to child */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 1: Props Flow Down</h2>
        <p className="text-sm text-gray-600 mb-4">
          Pass name and age as props. Add inputs to change them.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={userName}
                 onChange={(e) => setUsername(e.target.value)}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Age</label>
              <input
                type="number"
                placeholder="Age"
                value={userAge}
                onChange={(e) => setUserAge(Number(e.target.value))}
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          </div>
          <UserGreeting name={userName} age={userAge} />
        </div>
      </section>

      {/* Exercise 2: Lifting state up */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 2: Lifting State Up</h2>
        <p className="text-sm text-gray-600 mb-4">
          Move temperature state to parent so both components can access it.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <TemperatureDisplay />
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded text-sm">
          <p className="font-semibold text-blue-900 mb-1">💡 Hint:</p>
          <p className="text-blue-800 text-xs">
            Move celsius state to parent component. Pass value and setter as props.
            Formula: Fahrenheit = (Celsius × 9/5) + 32
          </p>
        </div>
      </section>

      {/* Exercise 3: Events flow up */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 3: Events Flow Up</h2>
        <p className="text-sm text-gray-600 mb-4">
          Share state between siblings by lifting it to parent.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <LikeCounter />
        </div>
        <div className="mt-3 p-3 bg-blue-50 rounded text-sm">
          <p className="font-semibold text-blue-900 mb-1">💡 Hint:</p>
          <p className="text-blue-800 text-xs">
            Create likes state in parent. Pass count to LikeCounter, pass increment function to LikeButton.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Props vs State Comparison</h2>
        <div className="bg-white rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Aspect</th>
                <th className="px-4 py-3 text-left font-semibold">Props</th>
                <th className="px-4 py-3 text-left font-semibold">State</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 font-medium">Where</td>
                <td className="px-4 py-3">Passed FROM parent</td>
                <td className="px-4 py-3">Managed WITHIN component</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Can change?</td>
                <td className="px-4 py-3">❌ Read-only (immutable)</td>
                <td className="px-4 py-3">✅ Yes (via setState)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Like</td>
                <td className="px-4 py-3">Function parameters</td>
                <td className="px-4 py-3">Local variables</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Example</td>
                <td className="px-4 py-3 text-xs font-mono">{'<Card title="Hello" />'}</td>
                <td className="px-4 py-3 text-xs font-mono">const [count, setCount]</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Expected Results */}
      <section className="border-t pt-6 bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-900 mb-2">✅ Expected Results:</h3>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Exercise 1: Inputs update UserGreeting display</li>
          <li>• Exercise 2: Celsius input updates Fahrenheit display</li>
          <li>• Exercise 3: Like button increments counter</li>
        </ul>
        <div className="mt-3 p-3 bg-yellow-100 rounded">
          <p className="font-semibold text-yellow-900 mb-1">💡 Key Principle:</p>
          <p className="text-xs text-yellow-800">
            "Data flows down (props), events flow up (callbacks)"
          </p>
        </div>
      </section>
    </div>
  );
}
