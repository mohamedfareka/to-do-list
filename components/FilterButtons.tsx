"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function FilterButtons() {
  return (
    <div className="flex flex-row gap-4">
      <Button className="bg-slate-800 hover:bg-white hover:text-slate-950 hover:border hover:border-slate-950/">
        <Link href={"/?filter=all"}>All</Link>
      </Button>
      <Button
        className="bg-slate-800 hover:bg-white hover:text-slate-950 hover:border hover:border-slate-950/"
      >
        <Link href={"/?filter=active"}>Active</Link>
      </Button>
      <Button className="bg-slate-800 hover:bg-white hover:text-slate-950 hover:border hover:border-slate-950/">
        <Link href={"/?filter=done"}>Done</Link>
      </Button>
    </div>
  );
}
