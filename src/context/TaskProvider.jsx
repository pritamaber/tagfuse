import { useReducer, useEffect } from "react";
import { taskReducer } from "./taskReducer";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch("https://api.impritam.com/api/tasks");
      const data = await res.json();
      dispatch({ type: "SET_TASKS", payload: data }); // You'd add this case to your reducer
    }
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
