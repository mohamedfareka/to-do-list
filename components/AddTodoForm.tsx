"use client";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { addTodo } from "@/actions";
export default function AddTodoForm() {
  return (
    <form action={addTodo} className="flex flex-col gap-4">
      <FieldSet>
        <FieldLegend className="text-center">
          <h1 className="font-bold text-2xl">Todos</h1>
        </FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">todo title</FieldLabel>
            <Input
              id="name"
              autoComplete="off"
              placeholder="todo title"
              name="title"
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button
        className="w-fit bg-slate-800 hover:bg-white hover:text-slate-950 hover:border hover:border-slate-950/"
        type="submit"
      >
        <Plus />
        add todo
      </Button>
    </form>
  );
}
