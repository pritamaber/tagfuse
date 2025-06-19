import TaskCard from "./TaskCard";

export default function TodoColumn({ tasks }) {
  const todoTasks = tasks.filter((task) => task.status === "todo");
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">To Do</h2>
      {todoTasks.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
