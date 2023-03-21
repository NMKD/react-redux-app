import { createSlice } from "@reduxjs/toolkit";
import todosService from "../service/todos.service";

const initialState = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    update(state, { payload }) {
      const i = state.findIndex((el) => el.id === payload.id);
      state[i] = {
        ...state[i],
        copmleted: (state[i].copmleted = !state[i].copmleted),
        ...payload,
      };
    },
    change(state, { payload }) {
      const i = state.findIndex((el) => el.id === payload.id);
      state[i] = {
        ...state[i],
        ...payload,
      };
    },
    remove(state, { payload }) {
      return state.filter((item) => item.id !== payload.id);
    },
    recived(state, { payload }) {
      return (state = payload);
    },
  },
});

const { remove, update, recived, change } = taskSlice.actions;
const { reducer: taskReducer } = taskSlice;

export const completedTask = (id) => (dispatch, getState) => {
  dispatch(update({ id }));
};

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await todosService.get();
    dispatch(recived(data));
  } catch (e) {
    console.error(e);
  }
};

export function titleUpdated(id) {
  return change({ id, title: "New Title" });
}

export function taskDelete(id) {
  return remove({ id });
}

export default taskReducer;
