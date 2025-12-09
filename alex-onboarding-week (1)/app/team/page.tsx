export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Team</h1>
        <p className="mt-2 text-gray-600">
          Manage your team members. This page is empty - you will implement this as part of your training.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">📚 Trainee Task</h2>
        <p className="text-blue-800 mb-4">
          Implement this team management page with the following features:
        </p>
        <ul className="list-disc list-inside text-blue-800 space-y-2 text-sm">
          <li>Display a list/table of all team members</li>
          <li>Show user avatar, name, email, role, and permissions</li>
          <li>Use the GraphQL <code className="bg-blue-100 px-1 rounded">teamMembers</code> query</li>
          <li>Add ability to update team member roles (ADMIN only)</li>
          <li>Implement add new team member functionality (ADMIN only)</li>
          <li>Add delete team member button (ADMIN only)</li>
          <li>Show role-based UI (hide admin actions for non-admin users)</li>
        </ul>
      </div>

      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
        <h3 className="font-semibold text-gray-700 mb-2">💡 Tips:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
          <li>Use Apollo Client mutations for add/update/delete operations</li>
          <li>Get current user role from localStorage to show/hide admin features</li>
          <li>Consider creating a reusable TeamMemberCard or Table component</li>
          <li>Add confirmation dialogs before deleting team members</li>
        </ul>
      </div>
    </div>
  );
}
