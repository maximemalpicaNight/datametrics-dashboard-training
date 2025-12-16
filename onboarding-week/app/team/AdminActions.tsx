"use client"

import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";


const DELETE_TEAM_MEMBER = gql`
  mutation DeleteTeamMember($id: ID!) {
    deleteTeamMember(id: $id)
  }
`;

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

export default function AdminActions({id}: {id:string}) {

    const [deleteTeamMember, { loading }] = useMutation(
        DELETE_TEAM_MEMBER,
        {
            refetchQueries: [{ query: GET_TEAM_MEMBERS, variables: {
                organizationId: "cmj2mguys00005j238nh4pzo5",
            } }],
            onCompleted: () => {
                alert('Delete sucesfuly');
            },
            onError: (error) => {
                alert('Failed to delete team member');
                console.error('Failed to delete team member', error);
            },
        }
    );

    const handleDeleteTeamMember = () => {
        deleteTeamMember({
            variables: {
                id,
            }
        });
    };

    return (
        <div className="flex gap-2">
            <button onClick={handleDeleteTeamMember} disabled={loading} className="bg-red-400 rounded-md px-2">Delete Team Member</button>
        </div>
    )
}