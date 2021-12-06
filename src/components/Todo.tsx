import useTodo from "@/lib/useTodo";
import { TodoType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import ArrowIcon from "./ArrowIcon";
import TrashIcon from "./TrashIcon";

interface TodoProps {
  index: number;
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

export default function Todo({ index, setTodos, todos }: TodoProps) {
  const { title, updateTitle, changeTitle, moveTodo, removeTodo, isUpdate} = useTodo(setTodos);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <input
          value={title || todos[index].title}
          onBlur={() => updateTitle(index, todos)}
          placeholder="write down here..."
          onChange={(e) => changeTitle(e)}
          className={`${
            isUpdate && "ring ring-green-500"
          } hover:ring hover:ring-purple-500 focus:ring-yellow-500 text-gray-600 focus:outline-none `}
        />
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => moveTodo(index, todos, "up")}>
          <ArrowIcon />
        </button>
        <button
          onClick={() => moveTodo(index, todos, "down")}
          className="transform rotate-180"
        >
          <ArrowIcon />
        </button>
        <button onClick={() => removeTodo(index, todos)}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
