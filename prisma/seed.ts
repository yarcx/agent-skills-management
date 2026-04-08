import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Optional: Clear existing data first (useful during development)
  await prisma.skill.deleteMany();
  await prisma.user.deleteMany();

  // 1. Create Users
  const user1 = await prisma.user.create({
    data: {
      email: 'john@example.com',
      password: 'hashed_password_123', // In real app, use bcrypt or similar
      name: 'John Doe',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'jane@example.com',
      password: 'hashed_password_456',
      name: 'Jane Smith',
    },
  });

  console.log(`✅ Created ${2} users`);

  // 2. Create Skills linked to users
  await prisma.skill.createMany({
    data: [
      {
        name: 'React.js',
        description: 'Building modern user interfaces with React',
        content: 'React is a JavaScript library for building user interfaces...',
        isPublic: true,
        authorId: user1.id,
      },
      {
        name: 'Next.js',
        description: 'The React framework for production',
        content: 'Next.js gives you the best developer experience...',
        isPublic: true,
        authorId: user1.id,
      },
      {
        name: 'TypeScript',
        description: 'Strongly typed programming language',
        content: 'TypeScript is a superset of JavaScript...',
        isPublic: false,
        authorId: user2.id,
      },
      {
        name: 'Tailwind CSS',
        description: 'A utility-first CSS framework',
        content: 'Rapidly build modern websites without leaving your HTML...',
        isPublic: true,
        authorId: user2.id,
      },
    ],
  });

  console.log('✅ Created 4 skills');

  // Optional: Verify the seeded data
  const usersCount = await prisma.user.count();
  const skillsCount = await prisma.skill.count();

  console.log(`🎉 Seeding completed successfully!`);
  console.log(`Total Users: ${usersCount}`);
  console.log(`Total Skills: ${skillsCount}`);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });