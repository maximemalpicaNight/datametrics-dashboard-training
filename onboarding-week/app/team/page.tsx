'use client'
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import List from "./List";
import { TeamMember } from "@/graphql/types";
import AddTeamMember  from "./AddTeamMember";

const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($organizationId: ID!) {
    teamMembers(organizationId: $organizationId) {
      id
      userId
      role
      permissions
      joinedAt
      user {
        id
        name
        email
        avatar
        role
      }
    }
  }
`;

type TeamMembers = {
  teamMembers: TeamMember[];
}

export default function TeamPage() {

  const { data, loading } = useQuery<TeamMembers>(GET_TEAM_MEMBERS, {
    variables: {
      organizationId: "cmj2mguys00005j238nh4pzo5",
    }
  });

  const userData = localStorage.getItem('user');
  const currentUser = userData ? JSON.parse(userData) : null;
  const isAdmin = currentUser?.role === 'ADMIN';

  console.log(data)

  if (loading) {
    return (
      <div className="flex items-center gap-2">
          <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin fill-blue-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span>Loading...</span>
      </div>
    )
  }

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

      {isAdmin && (
        <AddTeamMember />
      )}

      {data && (
        <List data={data} isAdmin={isAdmin} />
      )}

    </div>
  );
}
