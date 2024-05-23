import db from './db.js';

async function main() {
  const user1 = await db.user.create({
    data: {
      email: "alice@example.com",
      password: "password123",
      city: "Paris",
      Groups: {
        create: {
          name: "Group 1",
        },
      },
      Events: {
        create: [
          {
            name: "Event 1",
            date: new Date(),
            popularity: 10,
          },
          {
            name: "Event 2",
            date: new Date(),
            popularity: 20,
          },
          // Add more events here
        ],
      },
      Posts: {
        create: [
          {
            title: "Post 1",
            content: "This is the first post",
            published: true,
          },
          {
            title: "Post 2",
            content: "This is the second post",
            published: true,
          },
        ],
      },
    },
  });

  const user2 = await db.user.create({
    data: {
      email: "bob@example.com",
      password: "password123",
      city: "Lyon",
      Groups: {
        create: {
          name: "Group 2",
        },
      },
      Events: {
        create: [
            {
              name: "Event 3",
              date: new Date(),
              popularity: 30,
            },
            {
              name: "Event 4",
              date: new Date(),
              popularity: 40,
            },
            // Ajoutez plus d'événements ici
        ],
      },
      Posts: {
        create: [
          {
            title: "Post 3",
            content: "This is the third post",
            published: true,
          },
          {
            title: "Post 4",
            content: "This is the fourth post",
            published: true,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });