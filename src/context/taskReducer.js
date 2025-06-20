// taskReducer.js

/**
 * Reducer function for managing tasks in tagfuse Kanban.
 * @param {Array} tasks - Array of task objects.
 * @param {Object} action - Action object: { type: string, payload: any }
 * @returns {Array} Updated array of tasks.
 */
export const taskReducer = (tasks, action) => {
  switch (action.type) {
    // Replace all tasks with a new array (e.g., after fetching from API)
    case "SET_TASKS": {
      // action.payload: Array of tasks
      return action.payload;
    }

    // Change status to "todo" for the task with matching _id
    case "ADD_TO_TODO": {
      // action.payload: task._id (string)
      return tasks.map((task) =>
        task._id === action.payload ? { ...task, status: "todo" } : task
      );
    }

    // Change status to "progress" for the task with matching _id
    case "ADD_TO_PROGRESS": {
      // action.payload: task._id (string)
      return tasks.map((task) =>
        task._id === action.payload ? { ...task, status: "progress" } : task
      );
    }

    // Change status to "done" for the task with matching _id
    case "ADD_TO_DONE": {
      // action.payload: task._id (string)
      return tasks.map((task) =>
        task._id === action.payload ? { ...task, status: "done" } : task
      );
    }
    // Add single task through modal
    case "ADD_TASK": {
      return [action.payload, ...tasks];
    }

    // Remove task with matching _id
    case "DELETE": {
      // action.payload: task._id (string)
      return tasks.filter((task) => task._id !== action.payload);
    }
    case "DELETE_ALL_DONE": {
      return tasks.filter((task) => task.status !== "done");
    }

    // Default: return existing state
    default:
      return tasks;
  }
};
