export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-gray-600">
          Manage your account settings. This page is empty - you will implement this as part of your training.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">📚 Trainee Task</h2>
        <p className="text-blue-800 mb-4">
          Implement this settings page with the following features:
        </p>
        <ul className="list-disc list-inside text-blue-800 space-y-2 text-sm">
          <li>Display and edit user profile information (name, email, avatar)</li>
          <li>Use the GraphQL <code className="bg-blue-100 px-1 rounded">me</code> query to fetch current user</li>
          <li>Implement <code className="bg-blue-100 px-1 rounded">updateUser</code> mutation for profile updates</li>
          <li>Add password change functionality (mock implementation)</li>
          <li>Show organization details (read-only)</li>
          <li>Add form validation using Zod</li>
          <li>Display success/error messages after updates</li>
        </ul>
      </div>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
        <h3 className="font-semibold text-gray-700 mb-2">💡 Tips:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li>Use the Input component with labels and error states</li>
          <li>Create a form with controlled inputs using React useState</li>
          <li>Use Zod for schema validation before submitting</li>
          <li>Show loading state on the submit button during mutations</li>
        </ul>
      </div>
    </div>
  );
}
