"use client"

import { useState } from "react";
import List from "./List";
import TodoForm from "./TodoForm";
import Filter from "./Filter";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  return (
    <div className="flex flex-col gap-4">
        <TodoForm setTodos={setTodos} todos={todos} />
        <Filter setFilter={setFilter} />
        <List todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}