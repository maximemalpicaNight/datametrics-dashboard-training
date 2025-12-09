import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    me: User
    metrics(startDate: String, endDate: String, organizationId: ID!): [Metric!]!
    teamMembers(organizationId: ID!): [TeamMember!]!
    user(id: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
    addTeamMember(email: String!, role: String!, organizationId: ID!): TeamMember!
    updateTeamMember(id: ID!, role: String, permissions: JSON): TeamMember!
    deleteTeamMember(id: ID!): Boolean!
    updateMetrics(data: [MetricInput!]!): [Metric!]!
    updateUser(id: ID!, data: UserInput!): User!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    avatar: String
    role: Role!
    organization: Organization!
    organizationId: String!
    teamMember: TeamMember
    createdAt: String!
    updatedAt: String!
  }

  type Organization {
    id: ID!
    name: String!
    slug: String!
    createdAt: String!
  }

  type TeamMember {
    id: ID!
    user: User!
    userId: String!
    organization: Organization!
    organizationId: String!
    role: String!
    permissions: JSON!
    joinedAt: String!
  }

  type Metric {
    id: ID!
    date: String!
    revenue: Float!
    users: Int!
    conversion: Float!
    growth: Float!
    organization: Organization!
    organizationId: String!
    createdAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  input MetricInput {
    date: String!
    revenue: Float!
    users: Int!
    conversion: Float!
    growth: Float!
    organizationId: ID!
  }

  input UserInput {
    name: String
    email: String
    avatar: String
    role: Role
  }

  enum Role {
    ADMIN
    MEMBER
    VIEWER
  }

  scalar JSON
`;
