import ButtonNewTask from "@/components/ButtonNewTask";
import TitleBar from "@/components/TitleBar";
import Todo from "@/components/Todo";
import { TodoType } from "@/types";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<TodoType[]>(defaultTodos);
  return (
    <div className="min-h-screen w-screen bg-blue-50 flex items-center justify-center">
      <div className="">
        <div className=" mb-5 w-[400px]">
          <TitleBar />
        </div>
        <div className="bg-white h-full shadow-md p-10 space-y-4">
          <ul className="space-y-3 mt-3">
            {todos.map((todo) => (
              <li key={todo.id}>
                <Todo todo={todo} setTodos={setTodos} />
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
  { id: 1, title: "Make a meal", status: 1 },
  { id: 2, title: "Dinner with family", status: 0 },
  { id: 3, title: "Watch scary movie", status: 0 },
  { id: 4, title: "Learn something new", status: 1 },
  { id: 5, title: "Make a phone call to mom", status: 1 },
];
