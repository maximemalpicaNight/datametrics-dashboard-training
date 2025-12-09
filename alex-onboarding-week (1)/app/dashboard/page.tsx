export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the DataMetrics Dashboard. This page is empty - you will implement this as part of your training.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">📚 Trainee Task</h2>
        <p className="text-blue-800 mb-4">
          Implement this dashboard page with the following features:
        </p>
        <ul className="list-disc list-inside text-blue-800 space-y-2 text-sm">
          <li>Display key metrics cards (Revenue, Users, Conversion, Growth)</li>
          <li>Use the GraphQL <code className="bg-blue-100 px-1 rounded">metrics</code> query to fetch data</li>
          <li>Show metrics for the last 30 days with aggregate calculations</li>
          <li>Add a chart/graph to visualize metric trends (use a charting library)</li>
          <li>Implement date range filtering</li>
          <li>Add loading and error states</li>
        </ul>
      </div>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
        <h3 className="font-semibold text-gray-700 mb-2">💡 Tips:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li>Use Apollo Client's <code className="bg-gray-200 px-1 rounded">useQuery</code> hook</li>
          <li>Check <code className="bg-gray-200 px-1 rounded">graphql/schema.ts</code> for available queries</li>
          <li>Use the Card components from <code className="bg-gray-200 px-1 rounded">components/ui/card.tsx</code></li>
          <li>Format numbers with utility functions from <code className="bg-gray-200 px-1 rounded">lib/utils.ts</code></li>
        </ul>
      </div>
    </div>
  );
}
