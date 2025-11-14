import { PrismaClient, Prisma } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

const Todo: Prisma.TodoCreateInput[] = [
  {
    title: "test to-do",
    completed: true,
  },
];

export async function main() {
  for (const t of Todo) {
    await prisma.todo.create({ data: t });
  }
}

main();
