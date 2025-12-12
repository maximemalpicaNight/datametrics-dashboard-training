'use client';

// This is a monolithic component that needs refactoring
// TODO: Exercise 1 - Extract reusable components from this mess
import Card from "./Card"
import Badge from "./Badge"
import BadgeV2 from "./BadgeV2"
import StatCard from "./StatCard"
import RefactoredDashboard from "./RefactoredDashboard"

function MonolithicDashboard() {
  const stats = [
    { label: 'Revenue', value: '$45,231', change: '+20.1%', trend: 'up' },
    { label: 'Users', value: '2,345', change: '+15.3%', trend: 'up' },
    { label: 'Orders', value: '1,234', change: '-5.2%', trend: 'down' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      {/* TODO: Extract this repeating card pattern into a component */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} label={stat.label} value={stat.value} change={stat.change} trend={stat.trend} />
        ))}
      </div>

      {/* TODO: Extract badge component */}
      <div className="flex gap-2">
        <Badge status={"Active"} style={" bg-blue-100 text-blue-800 "} />
        <Badge status={"Verified"} style={" bg-green-100 text-green-800 "} />
        <Badge status={"Pending"} style={" bg-yellow-100 text-yellow-800 "} />
      </div>
    </div>
  );
}

// TODO: Exercise 2 - Create a reusable Badge component
// Hint: type BadgeProps = { label: string; variant: 'blue' | 'green' | 'yellow' }
// Example usage: <Badge label="Active" variant="blue" /> 

// ./BadgeV2

// TODO: Exercise 3 - Create a reusable StatCard component
// Hint: type StatCardProps = { label: string; value: string; change: string; trend: 'up' | 'down' }
// Example usage: <StatCard label="Revenue" value="$45,231" change="+20.1%" trend="up" />

// ./StatCard

// TODO: Exercise 4 - Refactor MonolithicDashboard to use your new components

export default function ComponentsPractice() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Component Design Practice</h1>
        <p className="text-gray-600">
          Practice extracting reusable components and composition
        </p>
      </div>

      {/* Exercise 1: Before - Monolithic */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Before: Monolithic Component</h2>
        <p className="text-sm text-gray-600 mb-4">
          This component does too much. Identify patterns that can be extracted.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <MonolithicDashboard />
        </div>
      </section>

      {/* Exercise 2: Create Badge */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 2: Create Badge Component</h2>
        <p className="text-sm text-gray-600 mb-4">
          Extract the badge pattern into a reusable component.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">TODO: Create Badge component and use it here</p>
          <BadgeV2 label="Success" variant="green" />
        </div>
      </section>

      {/* Exercise 3: Create StatCard */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 3: Create StatCard Component</h2>
        <p className="text-sm text-gray-600 mb-4">
          Extract the stat card pattern into a reusable component.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">TODO: Create StatCard component and use it here</p>
          <StatCard label="Revenue" value="$45,231" change="+20.1%" trend="up" />
        </div>
      </section>

      {/* Exercise 4: Refactored Dashboard */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Exercise 4: Refactored Dashboard</h2>
        <p className="text-sm text-gray-600 mb-4">
          Refactor the monolithic dashboard to use your new components.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-500 text-sm">TODO: Create RefactoredDashboard using Badge and StatCard</p>
        </div>
      </section>

      {/* Expected Results */}
      <section className="border-t pt-6 bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-900 mb-2">✅ Expected Results:</h3>
  

        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Badge component is reusable with different variants</li>
          <li>• StatCard component is reusable with different data</li>
          <li>• RefactoredDashboard looks the same but uses components</li>
          <li>• Each component has a single responsibility</li>
        </ul>
        <div className="mt-3 p-3 bg-yellow-100 rounded">
          <p className="font-semibold text-yellow-900 mb-1">💡 When to create a component?</p>
          <ul className="text-xs text-yellow-800 space-y-1">
            <li>• Pattern repeats 2+ times</li>
            <li>• Component has single clear purpose</li>
            <li>• Could be reused in other pages</li>
            <li>• Makes parent component easier to read</li>
          </ul>
        </div>
      </section>

      <RefactoredDashboard />

    
    </div>
  );
}
