import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// import the status columns
import TodoColumn from "./TodoColumn";
import ProgressColumn from "./ProgressColumn";
import DoneColumn from "./DoneColumn";

export default function TaskBoard() {
  const { tasks } = useContext(TaskContext);

  if (!tasks) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <TodoColumn tasks={tasks} />
      <ProgressColumn tasks={tasks} />
      <DoneColumn tasks={tasks} />
    </div>
  );
}
