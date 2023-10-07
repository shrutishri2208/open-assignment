import { ACTIONS } from "./tasksTypes";

export const addTask = (newTask) => {
  return {
    type: ACTIONS.ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (id) => {
  return {
    type: ACTIONS.DELETE_TASK,
    payload: id,
  };
};
