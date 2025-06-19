import TaskCard from "./TaskCard";

export default function DoneColumn({ tasks }) {
  const doneTasks = tasks.filter((task) => task.status === "done");
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Done</h2>
      {doneTasks.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
