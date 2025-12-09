import { GraphQLError } from 'graphql';
import { prisma } from '@/lib/prisma';

// Simple hash function for demo purposes (matches seed.ts)
function simpleHash(password: string): string {
  return Buffer.from(password).toString('base64');
}

// Simple JWT creation for demo (DO NOT use in production)
function createToken(userId: string): string {
  const payload = { userId, timestamp: Date.now() };
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

// Verify token and extract userId
function verifyToken(token: string): string | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    return payload.userId;
  } catch {
    return null;
  }
}

// Get user from context
async function getCurrentUser(context: { token?: string }) {
  if (!context.token) return null;
  const userId = verifyToken(context.token);
  if (!userId) return null;

  return await prisma.user.findUnique({
    where: { id: userId },
    include: {
      organization: true,
      teamMember: true,
    },
  });
}

export const resolvers = {
  Query: {
    me: async (_parent: unknown, _args: unknown, context: { token?: string }) => {
      const user = await getCurrentUser(context);
      if (!user) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }
      return user;
    },

    metrics: async (
      _parent: unknown,
      args: { startDate?: string; endDate?: string; organizationId: string }
    ) => {
      const where: {
        organizationId: string;
        date?: { gte?: Date; lte?: Date };
      } = {
        organizationId: args.organizationId,
      };

      if (args.startDate || args.endDate) {
        where.date = {};
        if (args.startDate) where.date.gte = new Date(args.startDate);
        if (args.endDate) where.date.lte = new Date(args.endDate);
      }

      return await prisma.metric.findMany({
        where,
        orderBy: { date: 'asc' },
        include: {
          organization: true,
        },
      });
    },

    teamMembers: async (_parent: unknown, args: { organizationId: string }) => {
      return await prisma.teamMember.findMany({
        where: { organizationId: args.organizationId },
        include: {
          user: true,
          organization: true,
        },
      });
    },

    user: async (_parent: unknown, args: { id: string }) => {
      const user = await prisma.user.findUnique({
        where: { id: args.id },
        include: {
          organization: true,
          teamMember: true,
        },
      });

      if (!user) {
        throw new GraphQLError('User not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }

      return user;
    },
  },

  Mutation: {
    login: async (_parent: unknown, args: { email: string; password: string }) => {
      const user = await prisma.user.findUnique({
        where: { email: args.email },
        include: {
          organization: true,
          teamMember: true,
        },
      });

      if (!user || user.password !== simpleHash(args.password)) {
        throw new GraphQLError('Invalid credentials', {
          extensions: { code: 'UNAUTHORIZED' },
        });
      }

      const token = createToken(user.id);

      return {
        token,
        user,
      };
    },

    addTeamMember: async (
      _parent: unknown,
      args: { email: string; role: string; organizationId: string },
      context: { token?: string }
    ) => {
      const currentUser = await getCurrentUser(context);
      if (!currentUser || currentUser.role !== 'ADMIN') {
        throw new GraphQLError('Not authorized', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      const user = await prisma.user.findUnique({
        where: { email: args.email },
      });

      if (!user) {
        throw new GraphQLError('User not found', {
          extensions: { code: 'NOT_FOUND' },
        });
      }

      const existingTeamMember = await prisma.teamMember.findUnique({
        where: { userId: user.id },
      });

      if (existingTeamMember) {
        throw new GraphQLError('User is already a team member', {
          extensions: { code: 'CONFLICT' },
        });
      }

      const teamMember = await prisma.teamMember.create({
        data: {
          userId: user.id,
          organizationId: args.organizationId,
          role: args.role,
          permissions: JSON.stringify({
            canEdit: args.role !== 'VIEWER',
            canDelete: args.role === 'ADMIN',
            canInvite: args.role === 'ADMIN' || args.role === 'MEMBER',
          }),
        },
        include: {
          user: true,
          organization: true,
        },
      });

      return teamMember;
    },

    updateTeamMember: async (
      _parent: unknown,
      args: { id: string; role?: string; permissions?: string },
      context: { token?: string }
    ) => {
      const currentUser = await getCurrentUser(context);
      if (!currentUser || currentUser.role !== 'ADMIN') {
        throw new GraphQLError('Not authorized', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      const data: { role?: string; permissions?: string } = {};
      if (args.role) data.role = args.role;
      if (args.permissions) data.permissions = args.permissions;

      const teamMember = await prisma.teamMember.update({
        where: { id: args.id },
        data,
        include: {
          user: true,
          organization: true,
        },
      });

      return teamMember;
    },

    deleteTeamMember: async (
      _parent: unknown,
      args: { id: string },
      context: { token?: string }
    ) => {
      const currentUser = await getCurrentUser(context);
      if (!currentUser || currentUser.role !== 'ADMIN') {
        throw new GraphQLError('Not authorized', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      await prisma.teamMember.delete({
        where: { id: args.id },
      });

      return true;
    },

    updateMetrics: async (
      _parent: unknown,
      args: {
        data: Array<{
          date: string;
          revenue: number;
          users: number;
          conversion: number;
          growth: number;
          organizationId: string;
        }>;
      },
      context: { token?: string }
    ) => {
      const currentUser = await getCurrentUser(context);
      if (!currentUser || currentUser.role === 'VIEWER') {
        throw new GraphQLError('Not authorized', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      const metrics = await Promise.all(
        args.data.map((metric) =>
          prisma.metric.upsert({
            where: {
              date_organizationId: {
                date: new Date(metric.date),
                organizationId: metric.organizationId,
              },
            },
            update: {
              revenue: metric.revenue,
              users: metric.users,
              conversion: metric.conversion,
              growth: metric.growth,
            },
            create: {
              date: new Date(metric.date),
              revenue: metric.revenue,
              users: metric.users,
              conversion: metric.conversion,
              growth: metric.growth,
              organizationId: metric.organizationId,
            },
            include: {
              organization: true,
            },
          })
        )
      );

      return metrics;
    },

    updateUser: async (
      _parent: unknown,
      args: {
        id: string;
        data: {
          name?: string;
          email?: string;
          avatar?: string;
          role?: string;
        };
      },
      context: { token?: string }
    ) => {
      const currentUser = await getCurrentUser(context);
      if (!currentUser) {
        throw new GraphQLError('Not authenticated', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      // Users can only update their own profile unless they're admin
      if (currentUser.id !== args.id && currentUser.role !== 'ADMIN') {
        throw new GraphQLError('Not authorized', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      // Only admins can change roles
      if (args.data.role && currentUser.role !== 'ADMIN') {
        throw new GraphQLError('Not authorized to change roles', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      const user = await prisma.user.update({
        where: { id: args.id },
        data: args.data,
        include: {
          organization: true,
          teamMember: true,
        },
      });

      return user;
    },
  },

  // JSON scalar resolver
  JSON: {
    __parseValue(value: unknown) {
      return value;
    },
    __serialize(value: unknown) {
      return value;
    },
    __parseLiteral(ast: { kind: string; value: string }) {
      if (ast.kind === 'StringValue') {
        return JSON.parse(ast.value);
      }
      return null;
    },
  },
};
