import ButtonNewTask from "@/components/ButtonNewTask";
import TitleBar from "@/components/TitleBar";
import Todo from "@/components/Todo";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [todos, setTodos] = useState(defaultTodos);
  return (
    <div className="min-h-screen w-screen bg-blue-50 flex items-center justify-center">
      <div className="">
        <div className=" mb-5 w-[400px]">
          <TitleBar />
        </div>
        <div className="bg-white h-full shadow-md p-10 space-y-4">
          <ul className="space-y-3 mt-3">
            {todos
              .sort((a, b) => b.id - a.id)
              .map((todo) => (
                <li key={todo.id}>
                  <Todo todo={todo} />
                </li>
              ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <ButtonNewTask />
        </div>
      </div>
      {/* {detailModal.id && <DetailModal />} */}
    </div>
  );
};

export default Home;

const defaultTodos = [
  {
    id: 1,
    title: "Make a meal",
    description: "lorem ipsum",
    status: 0,
  },
  {
    id: 2,
    title: "Dinner with family",
    description: "lorem ipsum",
    status: 0,
  },
  {
    id: 3,
    title: "Watch scary movie",
    description: "lorem ipsum",
    status: 0,
  },
  {
    id: 4,
    title: "Learn something new",
    description: "lorem ipsum",
    status: 1,
  },
  {
    id: 5,
    title: "Make a phone call to mom",
    description: "lorem ipsum",
    status: 1,
  },
];
