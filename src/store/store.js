import { combineReducers, configureStore } from "@reduxjs/toolkit";
import errorsReducer from "./errors";
import taskReducer from "./task";

const rootReducer = combineReducers({
  error: errorsReducer,
  tasks: taskReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
