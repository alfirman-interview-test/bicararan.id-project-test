import { TodoType } from "@/types";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import CheckIcon from "./CheckIcon";
import TrashIcon from "./TrashIcon";
import UnCheckIcon from "./UnCheckIcon";

interface TodoProps {
  todo: TodoType;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

export default function Todo({ todo, setTodos }: TodoProps) {
  const [title, setTitle] = useState<string>(todo.title || "");

  const removeTodo = () =>
    setTodos((crr) => crr.filter((el) => el.id !== todo.id));

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const updateTitle = () => {
    setTodos((crr) => {
      let targetIndex = crr.findIndex((el) => el.id === todo.id);
      if (targetIndex === -1) return crr;
      crr[targetIndex].title = title;
      return crr;
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="h-5 w-5">
          {todo.status === 1 && <CheckIcon />}
          {todo.status === 0 && <UnCheckIcon />}
        </button>
        <input
          value={title}
          onBlur={updateTitle}
          onChange={(e) => changeTitle(e)}
          className="text-gray-600 hover:ring focus:outline-none focus:ring-purple-500"
        />
      </div>
      <button onClick={removeTodo}>
        <TrashIcon />
      </button>
    </div>
  );
}
