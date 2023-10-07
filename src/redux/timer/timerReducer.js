import { ACTIONS } from "./timerTypes";

const initialState = {
  timers: [],
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.NEW_TIMER: {
      return {
        timers: [
          ...state.timers,
          {
            id: action.payload,
            hours: 0,
            minutes: 0,
            seconds: 0,
            running: false,
          },
        ],
      };
    }

    case ACTIONS.DELETE_TIMER: {
      return {
        ...state,
        timers: state.timers.filter((item) => item.id !== action.payload),
      };
    }

    case ACTIONS.START_TIMER: {
      return {
        ...state,
        timers: state.timers.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                running: true,
              }
            : item
        ),
      };
    }
    case ACTIONS.STOP_TIMER: {
      return {
        ...state,
        timers: state.timers.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                running: false,
              }
            : item
        ),
      };
    }

    case ACTIONS.UPDATE_TIMER: {
      return {
        ...state,
        timers: state.timers.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                seconds: item.seconds + 1,
              }
            : item
        ),
      };
    }
    default:
      return state;
  }
};

export default timerReducer;
