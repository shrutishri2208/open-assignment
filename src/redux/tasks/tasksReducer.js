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
    case ACTIONS.START_TIME:
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                history: [
                  ...item.history,
                  {
                    start: action.payload.start,
                    stop: null,
                  },
                ],
                running: true,
              }
            : item
        ),
      };
    case ACTIONS.STOP_TIME:
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                history: item.history.map((historyItem, index) =>
                  index === item.history.length - 1
                    ? { ...historyItem, stop: action.payload.stop }
                    : historyItem
                ),
                running: false,
              }
            : item
        ),
      };

    case ACTIONS.UPDATE_TIMER:
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                totalTime: item.totalTime + action.payload.timer,
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
                totalTime: item.totalTime + 1,
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
