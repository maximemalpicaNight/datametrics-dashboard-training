import Charts from "./Charts";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-gray-600">
          View detailed analytics and insights. This page is empty - you will implement this as part of your training.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">📚 Trainee Task</h2>
        <p className="text-blue-800 mb-4">
          Implement this analytics page with the following features:
        </p>
        <ul className="list-disc list-inside text-blue-800 space-y-2 text-sm">
          <li>Create multiple chart visualizations (line, bar, pie charts)</li>
          <li>Use React Query to fetch and cache metrics data</li>
          <li>Show revenue trends over time</li>
          <li>Display user growth analysis</li>
          <li>Show conversion rate trends</li>
          <li>Add comparison between different time periods (WoW, MoM)</li>
          <li>Implement export functionality (CSV/JSON)</li>
        </ul>
      </div>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
        <h3 className="font-semibold text-gray-700 mb-2">💡 Tips:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li>Install a charting library (recharts, chart.js, or visx)</li>
          <li>Use React Query's <code className="bg-gray-200 px-1 rounded">useQuery</code> hook with custom fetcher</li>
          <li>Leverage date-fns for date calculations and formatting</li>
          <li>Create reusable chart components for consistency</li>
        </ul>
      </div>
      <Charts />
    </div>
  );
}
