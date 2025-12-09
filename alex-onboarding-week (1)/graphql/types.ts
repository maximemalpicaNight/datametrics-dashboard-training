// GraphQL TypeScript types for client-side usage

export type Role = 'ADMIN' | 'MEMBER' | 'VIEWER';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string | null;
  role: Role;
  organization: Organization;
  organizationId: string;
  teamMember?: TeamMember | null;
  createdAt: string;
  updatedAt: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  user: User;
  userId: string;
  organization: Organization;
  organizationId: string;
  role: string;
  permissions: {
    canEdit: boolean;
    canDelete: boolean;
    canInvite: boolean;
    [key: string]: unknown;
  };
  joinedAt: string;
}

export interface Metric {
  id: string;
  date: string;
  revenue: number;
  users: number;
  conversion: number;
  growth: number;
  organization: Organization;
  organizationId: string;
  createdAt: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface MetricInput {
  date: string;
  revenue: number;
  users: number;
  conversion: number;
  growth: number;
  organizationId: string;
}

export interface UserInput {
  name?: string;
  email?: string;
  avatar?: string;
  role?: Role;
}
