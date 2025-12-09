import { PrismaClient } from '@prisma/client';
import { subDays } from 'date-fns';

const prisma = new PrismaClient();

// Simple hash function for demo purposes (DO NOT use in production)
function simpleHash(password: string): string {
  return Buffer.from(password).toString('base64');
}

// Generate realistic metric data with trending patterns
function generateMetrics(organizationId: string, days: number = 90) {
  const metrics = [];
  let baseRevenue = 75000;
  let baseUsers = 2500;
  let baseConversion = 3.5;

  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(new Date(), i);

    // Add some realistic variance and trends
    const dailyVariance = (Math.random() - 0.5) * 0.2; // ±10% daily variance
    const weeklyTrend = Math.sin((i / 7) * Math.PI) * 0.1; // Weekly patterns
    const overallTrend = (days - i) / days * 0.3; // 30% growth over period

    const revenue = baseRevenue * (1 + dailyVariance + weeklyTrend + overallTrend);
    const users = Math.floor(baseUsers * (1 + dailyVariance * 0.5 + weeklyTrend + overallTrend));
    const conversion = baseConversion * (1 + dailyVariance * 0.3);

    // Calculate growth compared to previous day
    const growth = i === days - 1 ? 0 : ((revenue - baseRevenue) / baseRevenue) * 100;

    metrics.push({
      date: new Date(date.setHours(0, 0, 0, 0)),
      revenue: Math.round(revenue * 100) / 100,
      users,
      conversion: Math.round(conversion * 100) / 100,
      growth: Math.round(growth * 100) / 100,
      organizationId,
    });

    // Update base values for next iteration
    baseRevenue = revenue;
    baseUsers = users;
    baseConversion = conversion;
  }

  return metrics;
}

async function main() {
  console.log('🌱 Starting seed...');

  // Clear existing data
  await prisma.metric.deleteMany();
  await prisma.teamMember.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organization.deleteMany();

  // Create organization
  console.log('📦 Creating organization...');
  const organization = await prisma.organization.create({
    data: {
      name: 'Acme Corp',
      slug: 'acme-corp',
    },
  });

  // Create users
  console.log('👥 Creating users...');
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'admin@acme.com',
        name: 'Admin User',
        password: simpleHash('password123'),
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
        role: 'ADMIN',
        organizationId: organization.id,
      },
    }),
    prisma.user.create({
      data: {
        email: 'john@acme.com',
        name: 'John Doe',
        password: simpleHash('password123'),
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        role: 'MEMBER',
        organizationId: organization.id,
      },
    }),
    prisma.user.create({
      data: {
        email: 'jane@acme.com',
        name: 'Jane Smith',
        password: simpleHash('password123'),
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
        role: 'MEMBER',
        organizationId: organization.id,
      },
    }),
    prisma.user.create({
      data: {
        email: 'bob@acme.com',
        name: 'Bob Johnson',
        password: simpleHash('password123'),
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
        role: 'VIEWER',
        organizationId: organization.id,
      },
    }),
    prisma.user.create({
      data: {
        email: 'alice@acme.com',
        name: 'Alice Williams',
        password: simpleHash('password123'),
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
        role: 'MEMBER',
        organizationId: organization.id,
      },
    }),
  ]);

  // Create team members
  console.log('👨‍💼 Creating team members...');
  await Promise.all(
    users.map((user, index) =>
      prisma.teamMember.create({
        data: {
          userId: user.id,
          organizationId: organization.id,
          role: user.role,
          permissions: JSON.stringify({
            canEdit: user.role !== 'VIEWER',
            canDelete: user.role === 'ADMIN',
            canInvite: user.role === 'ADMIN' || user.role === 'MEMBER',
          }),
        },
      })
    )
  );

  // Create metrics
  console.log('📊 Creating metrics (90 days)...');
  const metrics = generateMetrics(organization.id, 90);

  // Batch insert metrics for better performance
  await prisma.metric.createMany({
    data: metrics,
  });

  console.log('✅ Seed completed successfully!');
  console.log(`
📝 Summary:
- Organization: ${organization.name}
- Users: ${users.length}
- Team Members: ${users.length}
- Metrics: ${metrics.length} days of data

🔐 Login credentials (all passwords: password123):
- admin@acme.com (ADMIN)
- john@acme.com (MEMBER)
- jane@acme.com (MEMBER)
- bob@acme.com (VIEWER)
- alice@acme.com (MEMBER)
  `);
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
