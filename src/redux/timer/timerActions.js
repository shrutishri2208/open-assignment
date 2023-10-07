import { ACTIONS } from "./timerTypes";

export const newTimer = (id) => {
  return {
    type: ACTIONS.NEW_TIMER,
    payload: id,
  };
};

export const deleteTimer = (id) => {
  return {
    type: ACTIONS.DELETE_TIMER,
    payload: id,
  };
};

export const startTimer = (id) => {
  return {
    type: ACTIONS.START_TIMER,
    payload: id,
  };
};

export const updateTimer = (id) => {
  return {
    type: ACTIONS.UPDATE_TIMER,
    payload: id,
  };
};

export const stopTimer = (id) => {
  return {
    type: ACTIONS.STOP_TIMER,
    payload: id,
  };
};
