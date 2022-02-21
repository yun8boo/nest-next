import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.recipe.deleteMany();

  console.log('Seeding...');

  const user1 = await prisma.user.create({
    data: {
      email: 'lisa@test.com',
      firstName: 'Lisa',
      lastName: 'Simpson',
      password: '$2b$10$wzAo97pH6FrRJWgDrOUA3ef2zrjoVfK3PZ9gjBjSHH2u.69gDZryS', // secret42
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'bart@simpson.com',
      firstName: 'Bart',
      password: '$2b$10$e1due1DbZ.hEP2WaMFHbG.uw11gHnN6J.1wyQf3hukYg0Gl8oQtVm', // secret42
    },
  });

  const recipe1 = await prisma.recipe.create({
    data: {
      title: '肉じゃが',
      description: 'ほかほか',
    },
  });
  const recipe2 = await prisma.recipe.create({
    data: {
      title: '親子丼',
      description: 'ほっかほか',
    },
  });

  console.log({ user1, user2, recipe1, recipe2 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
