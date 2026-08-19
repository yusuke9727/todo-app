"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold">My Todo App</h1>
      <p>Todoを管理するアプリです。</p>
    </main>
  )
}

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const [todos, setTodos] = useState<Todo[]>([]);

const [input, setInput] = useState("");

<input
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>

function addTodo() {
  if (input.trim() === "") return;

  const newTodo: Todo = {
    id: Date.now(),
    title: input,
    completed: false,
  };

  setTodos([...todos, newTodo]);
  setInput("");
}

<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.title}</li>
  ))}
</ul>

function deleteTodo(id: number) {
  setTodos(todos.filter((todo) => todo.id !== id));
}

function toggleTodoCompletion(id: number) {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
}
