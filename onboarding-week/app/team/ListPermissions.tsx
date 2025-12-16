"use client"
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

const UPDATE_TEAM_MEMBER = gql`
  mutation UpdateTeamMember($id: ID!, $role: String, $permissions: JSON) {
    updateTeamMember(id: $id, role: $role, permissions: $permissions) {
      id
      role
      permissions
    }
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

export default function ListPermissions({ permissions, isAdmin, id} : {permissions: string, isAdmin:boolean, id:string}) {
    const parsed = JSON.parse(permissions);

    const [updateTeamMember, { loading }] = useMutation(
        UPDATE_TEAM_MEMBER,
        {
            refetchQueries: [{ query: GET_TEAM_MEMBERS, variables: {
                organizationId: "cmj2mguys00005j238nh4pzo5",
            } }],
            onCompleted: () => {
                alert('Update well done');
            },
            onError: (error) => {
                alert('Failed to update team member');
                console.error('Failed to update team member', error);
            },
        }
    );

    const handleUpdatePermission = (permissionKey: string) => {
        const updated = {
            ...parsed,
            [permissionKey]: !parsed[permissionKey]
        };
        
        updateTeamMember({
            variables: {
                id: id,
                permissions: JSON.stringify(updated), 
            }
        });
    };

    return (
        <div className="flex items-center gap-2 text-sm">
            {!isAdmin ? (
                <>
                    <span className={parsed.canEdit ? 'text-green-500' : 'text-red-500'}>
                        Edit
                    </span>
                    <span className={parsed.canDelete ? 'text-green-500' : 'text-red-500'}>
                        Delete
                    </span>
                    <span className={parsed.canInvite ? 'text-green-500' : 'text-red-500'}>
                        Invite
                    </span>
                </>
            ): (
                <>
                    <button onClick={() => handleUpdatePermission('canEdit')} disabled={loading} className={parsed.canEdit ? 'text-green-500' : 'text-red-500'}>
                        Edit
                    </button>
                    <button onClick={() => handleUpdatePermission('canDelete')} disabled={loading} className={parsed.canDelete ? 'text-green-500' : 'text-red-500'}>
                        Delete
                    </button>
                    <button onClick={() => handleUpdatePermission('canInvite')} disabled={loading} className={parsed.canInvite ? 'text-green-500' : 'text-red-500'}>
                        Invite
                    </button>
                </>
            )}
        </div>
    )
}