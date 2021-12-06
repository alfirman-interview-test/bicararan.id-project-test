import CheckIcon from "./CheckIcon";
import TrashIcon from "./TrashIcon";
import UnCheckIcon from "./UnCheckIcon";

export default function Todo({ todo }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="h-5 w-5">
          {todo.status === 1 && <CheckIcon />}
          {todo.status === 0 && <UnCheckIcon />}
        </button>
        <input
          value={todo.title}
          className="text-gray-600 hover:ring focus:outline-none focus:ring-purple-500"
        />
      </div>
      <button>
        <TrashIcon />
      </button>
    </div>
  );
}
