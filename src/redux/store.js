import { createStore, combineReducers } from "redux";

import newReducer from "./new/newReducer";
import taskReducer from "./tasks/tasksReducer";
import timerReducer from "./timer/timerReducer";

const rootReducer = combineReducers({
  isNewOpen: newReducer,
  tasks: taskReducer,
  timers: timerReducer,
});

export const store = createStore(rootReducer);
