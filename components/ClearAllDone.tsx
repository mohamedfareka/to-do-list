"use client";

import { deleteCompleted } from "@/actions";
import { Button } from "./ui/button";

export default function ClearAllDone() {
  return (
    <Button
      onClick={deleteCompleted}
      className="w-fit bg-slate-800 hover:bg-white hover:text-slate-950 hover:border hover:border-slate-950/"
    >
      clear completed
    </Button>
  );
}
