import { TodoType } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

export default function useTodo(setTodos: Dispatch<SetStateAction<TodoType[]>>) {
  const [title, setTitle] = useState<string>("");
  const [isUpdate, setUpdate] = useState(false);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const addNewTodo = () => {
    const newTodo = { id: Date.now(), title: "" };
    setTodos((crr) => [...crr, newTodo]);
  };

  const updateTitle = (index: number, todos: TodoType[]) => {
    if (todos[index].title === title) return;

    todos[index].title = title;
    setTodos([...todos]);

    setUpdate(true);
    setTimeout(() => {
      setUpdate(false);
    }, 800);
  };

  const removeTodo = (index: number, todos: TodoType[]) =>
    setTodos((crr) => crr.filter((el) => el.id !== todos[index].id));

  const moveTodo = (index: number, todos: TodoType[], movement: string) => {
    let nextIndex = 0;

    if (movement === "down") {
      nextIndex = 1 + index;
      if (index === todos.length - 1) return;
    }
    if (movement === "up") {
      nextIndex = -1 + index;
      if (index === 0) return;
    }

    let todo1 = todos[index];
    let todo2 = todos[nextIndex];

    todos[index] = todo2;
    todos[nextIndex] = todo1;

    setTodos([...todos]);
  };

  return {
    title,
    changeTitle,
    updateTitle,
    removeTodo,
    moveTodo,
    isUpdate,
    addNewTodo,
  };
}
