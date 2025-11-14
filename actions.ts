"use server";

import { revalidatePath } from "next/cache";
import prisma from "./lib/prisma";

export async function addTodo(formData: FormData) {
  const title = formData.get("title");

  if (typeof title !== "string") {
    throw new Error("wrong data inputs");
  }

  try {
    await prisma.todo.create({
      data: {
        title,
      },
    });

    revalidatePath("/?filter=");
  } catch (error) {
    console.error(error);
  }
}

export async function toggleTodo(TodoId: string, completed: boolean) {
  try {
    await prisma.todo.update({
      where: {
        id: TodoId,
      },
      data: {
        completed,
      },
    });
    revalidatePath("/?filter=");
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTodo(todoId: string) {
  try {
    await prisma.todo.delete({
      where: {
        id: todoId,
      },
    });
    revalidatePath("/?filter=");
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCompleted() {
  try {
    await prisma.todo.deleteMany({
      where: {
        completed: true,
      },
    });
    revalidatePath("/?filter=");
  } catch (error) {
    console.error(error);
  }
}
