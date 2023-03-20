import { legacy_createStore as createStore } from "redux";
import taskReducer from "./taskReducer";

const initialState = [
  { id: 1, desc: "Task 1", copmleted: false },
  { id: 2, desc: "Task 2", copmleted: false },
  { id: 3, desc: "Task 3", copmleted: false },
];

const store = createStore(taskReducer, initialState);

export default store;
