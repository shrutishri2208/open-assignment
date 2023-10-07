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

export const updateStartTime = (id, startTime) => {
  return {
    type: ACTIONS.UPDATE_START_TIME,
    payload: { id, startTime },
  };
};

export const updateStopTime = (id, stopTime) => {
  return {
    type: ACTIONS.UPDATE_STOP_TIME,
    payload: { id, stopTime },
  };
};
