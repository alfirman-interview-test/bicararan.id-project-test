import { TodoType } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import TrashIcon from "./TrashIcon";

interface TodoProps {
  todo: TodoType;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

export default function Todo({ todo, setTodos }: TodoProps) {
  const [title, setTitle] = useState<string>(todo.title || "");
  const [isUpdate, setUpdate] = useState(false);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const updateTitle = () => {
    if (todo.title === title) return;

    setTodos((crr) => {
      let targetIndex = crr.findIndex((el) => el.id === todo.id);
      if (targetIndex === -1) return crr;
      crr[targetIndex].title = title;
      return crr;
    });

    setUpdate(true);
    setTimeout(() => {
      setUpdate(false);
    }, 800);
  };

  const removeTodo = () =>
    setTodos((crr) => crr.filter((el) => el.id !== todo.id));

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <input
          value={title}
          onBlur={updateTitle}
          onChange={(e) => changeTitle(e)}
          className={`${
            isUpdate && "ring ring-green-500"
          } hover:ring hover:ring-purple-500 focus:ring-yellow-500 text-gray-600 focus:outline-none `}
        />
      </div>
      <button onClick={removeTodo}>
        <TrashIcon />
      </button>
    </div>
  );
}
