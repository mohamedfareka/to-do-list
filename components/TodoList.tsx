import prisma from "@/lib/prisma";
import TodoItem from "./TodoItem";
import { Todo } from "@/types/Todo";
import FilterButtons from "./FilterButtons";
import ClearAllDone from "./ClearAllDone";

export default async function TodoList({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  let todos: Todo[] | undefined;
  const filter = searchParams.filter || "all";
  switch (filter) {
    case "all":
      todos = await prisma.todo.findMany();
      break;
    case "done":
      todos = await prisma.todo.findMany({
        where: {
          completed: true,
        },
      });
      break;
    case "active":
      todos = await prisma.todo.findMany({
        where: {
          completed: false,
        },
      });
      break;
  }
  return (
    <>
      <h2>Your Todos</h2>
      <FilterButtons />
      {todos !== undefined
        ? todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem
                title={todo.title}
                toggle={todo.completed}
                id={todo.id}
                date={todo.createdAt}
              />
            </div>
          ))
        : "there is no todos"}
      <ClearAllDone />
    </>
  );
}
