import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import newReducer from "./new/newReducer";
import taskReducer from "./tasks/tasksReducer";
import timerReducer from "./timer/timerReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  isNewOpen: newReducer,
  tasks: taskReducer,
  timers: timerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistedStore = persistStore(store);
