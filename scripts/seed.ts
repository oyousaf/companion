const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Animals" },
        { name: "Entertainment" },
        { name: "Games" },
        { name: "Famous People" },
        { name: "Musicians" },
        { name: "Philosophy" },
        { name: "Scientists" },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
