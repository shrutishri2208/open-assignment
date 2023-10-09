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

export const incrementTimer = (id) => {
  return {
    type: ACTIONS.INCREMENT_TIMER,
    payload: id,
  };
};

export const updateTimer = (id, backgroundTime) => {
  return {
    type: ACTIONS.UPDATE_TIMER,
    payload: { id, backgroundTime },
  };
};

export const closeTime = (id, close) => {
  return {
    type: ACTIONS.CLOSE_TIME,
    payload: { id, close },
  };
};
