import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TodoColumn from "./TodoColumn";
import ProgressColumn from "./ProgressColumn";
import DoneColumn from "./DoneColumn";

export default function TaskBoard() {
  const { tasks } = useContext(TaskContext);

  if (!tasks) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-[80vh] flex items-start justify-center mt-10">
      <div className="max-w-4xl w-full mx-auto px-2 md:px-">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TodoColumn tasks={tasks} />
          <ProgressColumn tasks={tasks} />
          <DoneColumn tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
