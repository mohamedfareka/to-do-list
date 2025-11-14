import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import { Separator } from "@/components/ui/separator";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {

  const params = await searchParams; 

  return (
    <div className="flex flex-col gap-4">
      <AddTodoForm />
      <Separator />
      <TodoList searchParams={params} />
    </div>
  );
}