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

export const startTime = (id, start) => {
  return {
    type: ACTIONS.START_TIME,
    payload: { id, start },
  };
};
export const stopTime = (id, stop) => {
  return {
    type: ACTIONS.STOP_TIME,
    payload: { id, stop },
  };
};

export const updateTimer = (id, timer) => {
  return {
    type: ACTIONS.UPDATE_TIMER,
    payload: { id, timer },
  };
};
