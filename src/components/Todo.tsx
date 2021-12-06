import { TodoType } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import TrashIcon from "./TrashIcon";

interface TodoProps {
  todo: TodoType;
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

export default function Todo({ todo, setTodos, todos }: TodoProps) {
  const [title, setTitle] = useState<string>(todo.title || "");
  const [isUpdate, setUpdate] = useState(false);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const updateTitle = () => {
    if (todo.title === title) return;

    const targetIndex = todos.findIndex((el) => el.id === todo.id);

    todos[targetIndex].title = title;
    setTodos([...todos]);

    setUpdate(true);
    setTimeout(() => {
      setUpdate(false);
    }, 800);
  };

  const removeTodo = () =>
    setTodos((crr) => crr.filter((el) => el.id !== todo.id));

  // const moveDownTodo = () => {
  //   setTodos((crr) => {
  //     let targetIndex = crr.findIndex((el) => el.id === todo.id);
  //     if (targetIndex === -1) return crr;

  //     let todo1 = crr[targetIndex];
  //     let todo2 = crr[targetIndex + 1];

  //     crr[targetIndex].title = "as";

  //     // console.log(crr)

  //     let todos = crr
  //     // crr[targetIndex + 1] = todo1;

  //     // console.log(todo)

  //     return todos;
  //   });
  // };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <input
          value={title}
          onBlur={updateTitle}
          placeholder="write down here..."
          onChange={(e) => changeTitle(e)}
          className={`${
            isUpdate && "ring ring-green-500"
          } hover:ring hover:ring-purple-500 focus:ring-yellow-500 text-gray-600 focus:outline-none `}
        />
      </div>
      <div className="flex items-center space-x-2">
        <button>
          <ArrowIcon />
        </button>
        <button className="transform rotate-180">
          <ArrowIcon />
        </button>
        <button onClick={removeTodo}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
