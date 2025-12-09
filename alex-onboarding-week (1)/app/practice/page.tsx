import Link from 'next/link';

const exercises = [
  {
    title: 'Array Methods',
    href: '/practice/arrays',
    description: 'Practice map(), filter(), reduce() for data transformation',
    topics: ['map', 'filter', 'reduce', 'rendering lists'],
  },
  {
    title: 'TypeScript',
    href: '/practice/typescript',
    description: 'Add types to components, props, and state',
    topics: ['component props', 'type definitions', 'type inference'],
  },
  {
    title: 'Component Design',
    href: '/practice/components',
    description: 'Extract reusable components and practice composition',
    topics: ['component extraction', 'reusability', 'composition'],
  },
  {
    title: 'useState',
    href: '/practice/state',
    description: 'Manage different types of state with useState hook',
    topics: ['primitives', 'arrays', 'objects', 'controlled inputs'],
  },
  {
    title: 'useEffect',
    href: '/practice/effects',
    description: 'Handle side effects, dependencies, and cleanup',
    topics: ['data fetching', 'dependencies', 'cleanup', 'localStorage'],
  },
  {
    title: 'Props vs State',
    href: '/practice/props-state',
    description: 'Understand data flow and lifting state up',
    topics: ['props flow', 'lifting state', 'events up, data down'],
  },
  {
    title: 'Custom Hooks',
    href: '/practice/hooks',
    description: 'Extract reusable logic into custom hooks',
    topics: ['useToggle', 'useLocalStorage', 'useDebounce'],
  },
];

export default function PracticeHome() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          React Fundamentals Practice
        </h1>
        <p className="text-gray-600">
          Hands-on exercises to reinforce concepts from Exercise 00
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📚</span>
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Before You Start</h3>
            <p className="text-sm text-blue-800 mb-3">
              Complete the reading and video materials in{' '}
              <Link
                href="https://github.com/yourusername/datametrics-dashboard/blob/main/docs/exercises/EXERCISE-00-FUNDAMENTALS.md"
                className="underline hover:text-blue-900"
              >
                Exercise 00
              </Link>
              {' '}before doing these practical exercises.
            </p>
            <p className="text-xs text-blue-700">
              These exercises are designed to give you hands-on practice with the concepts you've learned.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {exercises.map((exercise, index) => (
          <Link
            key={exercise.href}
            href={exercise.href}
            className="block border rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all bg-white"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {index + 1}. {exercise.title}
              </h3>
              <span className="text-blue-500">→</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{exercise.description}</p>
            <div className="flex flex-wrap gap-2">
              {exercise.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-semibold text-yellow-900 mb-1">Tips for Success</h3>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Work through exercises in order - each builds on previous concepts</li>
              <li>• Don't rush - understanding is more important than speed</li>
              <li>• Test your code frequently - check the browser after each change</li>
              <li>• Read error messages carefully - they often tell you exactly what's wrong</li>
              <li>• If stuck for 30+ minutes, ask your trainer for help</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-900 mb-3">What You'll Learn</h3>
        <div className="grid gap-4 md:grid-cols-3 text-sm">
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">JavaScript Fundamentals</h4>
            <ul className="text-gray-600 space-y-1 text-xs">
              <li>• Array methods (map, filter, reduce)</li>
              <li>• Data transformation</li>
              <li>• Working with objects and arrays</li>
            </ul>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">React Concepts</h4>
            <ul className="text-gray-600 space-y-1 text-xs">
              <li>• Component design and composition</li>
              <li>• State management with hooks</li>
              <li>• Props vs state</li>
              <li>• Side effects and lifecycle</li>
            </ul>
          </div>
          <div className="bg-white border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Best Practices</h4>
            <ul className="text-gray-600 space-y-1 text-xs">
              <li>• Type safety with TypeScript</li>
              <li>• Reusable custom hooks</li>
              <li>• Clean code patterns</li>
              <li>• Proper data flow</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back to Home
        </Link>
        <Link
          href="/practice/arrays"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start with Arrays →
        </Link>
      </div>
    </div>
  );
}
