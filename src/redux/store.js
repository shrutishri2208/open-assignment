import { createStore, combineReducers } from "redux";

import newReducer from "./new/newReducer";
import taskReducer from "./tasks/tasksReducer";

const rootReducer = combineReducers({
  isNewOpen: newReducer,
  tasks: taskReducer,
});

export const store = createStore(rootReducer);
