import { ACTIONS } from "./tasksTypes";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };
    case ACTIONS.DELETE_TASK:
      return {
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    case ACTIONS.UPDATE_START_TIME:
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                running: true,
                history: [
                  ...item.history,
                  {
                    start: action.payload.startTime,
                    stop: null,
                  },
                ],
              }
            : item
        ),
      };

    case ACTIONS.UPDATE_STOP_TIME:
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                running: false,
                history: item.history.map((historyItem, index) =>
                  index === item.history.length - 1
                    ? { ...historyItem, stop: action.payload.stopTime }
                    : historyItem
                ),
              }
            : item
        ),
      };
    case ACTIONS.INCREMENT_TIMER:
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                timer: item.timer + 1,
              }
            : item
        ),
      };
    default: {
      return state;
    }
  }
};

export default taskReducer;
