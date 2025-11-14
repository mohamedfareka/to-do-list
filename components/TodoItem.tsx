"use client";

import { deleteTodo, toggleTodo } from "@/actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TodoItem({
  title,
  toggle,
  id,
  date,
}: {
  title: string;
  toggle: boolean;
  id: string;
  date: Date;
}) {
  const [checked, setChecked] = useState(toggle);

  const dateString = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      style={
        { "--date": `"created at : ${dateString}"` } as React.CSSProperties
      }
      className="
        relative
        before:absolute 
        before:bottom-[-20%] 
        before:left-2
        before:text-[10px]
        before:text-white
        before:bg-slate-950
        before:rounded-sm
        before:p-1
        before:content-(--date)
        flex justify-between gap-4 border border-slate-500 p-3 rounded-xl text-black mb-3
      "
    >
      <div className="flex flex-row gap-4 items-center">
        <motion.div whileTap={{ scale: 0.9 }} transition={{ duration: 0.1 }}>
          <Checkbox
            id={title}
            checked={checked}
            onCheckedChange={(value) => {
              setChecked(!!value);
              toggleTodo(id, !!value);
            }}
          />
        </motion.div>

        <motion.div
          animate={{
            opacity: checked ? 0.5 : 1,
            x: checked ? 4 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <Label htmlFor={title} className={checked ? "line-through" : ""}>
            {title}
          </Label>
        </motion.div>
      </div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          className="bg-slate-800 hover:bg-white hover:text-slate-950 hover:border hover:border-slate-950/"
          onClick={() => deleteTodo(id)}
        >
          delete
        </Button>
      </motion.div>
    </motion.div>
  );
}
