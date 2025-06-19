import { useReducer, useEffect } from "react";
import { taskReducer } from "./taskReducer";
import { TaskContext } from "./TaskContext";
import { useAuth } from "../hooks/useAuth";

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const { user } = useAuth(); // Get the logged-in user

  useEffect(() => {
    // Only fetch if user is loaded (authenticated)
    if (!user) return;

    async function fetchTasks() {
      try {
        const res = await fetch(
          `https://api.impritam.com/api/tasks?userId=${user.uid}`
        );
        const data = await res.json();
        // Only set if data is an array (prevents filter error)
        if (Array.isArray(data)) {
          dispatch({ type: "SET_TASKS", payload: data });
        } else {
          dispatch({ type: "SET_TASKS", payload: [] }); // handle error case
        }
      } catch (error) {
        dispatch({ type: "SET_TASKS", payload: [] }); // network error fallback
      }
    }
    fetchTasks();
  }, [user]); // re-run if user changes

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
