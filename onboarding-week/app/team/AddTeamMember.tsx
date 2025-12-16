"use client"

import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useState } from "react";
import { z } from 'zod';

const ADD_TEAM_MEMBER = gql`
  mutation AddTeamMember($email: String!, $role: String!, $organizationId: ID!) {
    addTeamMember(email: $email, role: $role, organizationId: $organizationId) {
      id
      userId
      role
      permissions
      user {
        id
        name
        email
        avatar
      }
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

export default function AddTeamMember() {

    const teamMemberSchema = z.object({
        email: z.string().email('Invalid email format'),
        role: z.enum(['ADMIN', 'MEMBER', 'VIEWER'], {
            errorMap: () => ({ message: 'Please select a role' }),
        }),
    });

    const [formData, setFormData] = useState({ email: "", role: "MEMBER" });
    const [zodError, setZodError] = useState("");

    const [addTeamMember, { loading }] = useMutation(
        ADD_TEAM_MEMBER,
        {
            refetchQueries: [{ query: GET_TEAM_MEMBERS, variables: {
                organizationId: "cmj2mguys00005j238nh4pzo5",
            } }],
            onCompleted: () => {
                alert('Team member added');
            },
            onError: (error) => {
                alert('Failed to add team member');
                console.error('Failed to add team member', error);
            },
        }
    );

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            teamMemberSchema.parse(formData);
        } catch (err) {
            if (err instanceof z.ZodError) {
                setZodError(err.errors.map(e => e.message).join(', '));
            }
            return;
        }
        addTeamMember({
            variables: {
                email: formData.email,
                role: formData.role,
                organizationId: "cmj2mguys00005j238nh4pzo5",
            }
        });
        setFormData({ email: "", role: "MEMBER" });
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-4 px-10">
            <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="p-2 rounded-md"
                required
            />
            <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="p-2 rounded-md"
            >
                <option value="MEMBER">MEMBER</option>
                <option value="ADMIN">ADMIN</option>
                <option value="VIEWER">VIEWER</option>
            </select>
            <button type="submit" disabled={loading} className="bg-blue-400 rounded-md p-2">
                {loading ? "Adding..." : "Add Member"}
            </button>
            {zodError && <p className="text-red-400">{zodError}</p>}
        </form>
    )
}