import { TodoType } from "@/types";
import { Dispatch, SetStateAction } from "react";

interface ButtonNewTaskProps {
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

export default function ButtonNewTask({ setTodos }: ButtonNewTaskProps) {
  const addNewTodo = () => {
    const newTodo = { id: Date.now(), title: "" };
    setTodos((crr) => [...crr, newTodo]);
  };

  return (
    <button
      onClick={addNewTodo}
      className="relative -top-6 bg-purple-500 hover:bg-purple-600 font-medium text-white rounded-3xl py-3 px-6"
    >
      + New task
    </button>
  );
}
