import { taskUpdated, taskRemove } from "./actionsTypes";
function taskReducer(state = [], { type, payload }) {
  switch (type) {
    case taskUpdated: {
      const arr = [...state];
      const i = arr.findIndex((el) => el.id === payload.id);
      arr[i] = { ...arr[i], ...payload };
      return arr;
    }
    case taskRemove: {
      const arr = [...state];
      return arr.filter((item) => item.id !== payload.id);
    }

    default:
      return state;
  }
}

export default taskReducer;
