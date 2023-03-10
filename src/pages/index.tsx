import { useState } from "react";
import type { NextPage } from "next";
import ButtonNewTask from "@/components/ButtonNewTask";
import TitleBar from "@/components/TitleBar";
import Todo from "@/components/Todo";
import { TodoType } from "@/types";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<TodoType[]>(defaultTodos);

  return (
    <div className="min-h-screen w-screen bg-blue-50 flex items-center justify-center">
      <div>
        <div className=" mb-5 w-full xs:w-[400px]">
          <TitleBar />
        </div>
        <div className="bg-white h-full shadow-md p-10 space-y-4  w-full xs:w-[400px]">
          <ul className="space-y-3 mt-3">
            {todos.map((todo, i) => (
              <li key={todo.id}>
                <Todo index={i} todos={todos} setTodos={setTodos} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <ButtonNewTask setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default Home;

const defaultTodos = [
  { id: 1, title: "Make a meal" },
  { id: 2, title: "Dinner with family" },
  { id: 3, title: "Watch scary movie" },
  { id: 4, title: "Learn something new" },
  { id: 5, title: "Make a phone call to mom" },
];
