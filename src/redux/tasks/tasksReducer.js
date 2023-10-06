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

    default: {
      return state;
    }
  }
};

export default taskReducer;
