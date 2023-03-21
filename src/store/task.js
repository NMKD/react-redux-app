import { createSlice } from "@reduxjs/toolkit";
import todosService from "../service/todos.service";

const initialState = { entities: [], isLoading: true, error: null };

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    update(state, { payload }) {
      const i = state.entities.findIndex((el) => el.id === payload.id);
      state.entities[i] = {
        ...state.entities[i],
        copmleted: (state.entities[i].copmleted = !state.entities[i].copmleted),
        ...payload,
      };
    },
    change(state, { payload }) {
      const i = state.entities.findIndex((el) => el.id === payload.id);
      state.entities[i] = {
        ...state.entities[i],
        ...payload,
      };
    },
    remove(state, { payload }) {
      state.entities = state.entities.filter((item) => item.id !== payload.id);
    },
    recived(state, { payload }) {
      state.entities = payload;
      state.isLoading = false;
    },
    error(state, { payload }) {
      state.error = payload;
    },
  },
});

const { remove, update, recived, change, error } = taskSlice.actions;
const { reducer: taskReducer } = taskSlice;

export const completedTask = (id) => (dispatch, getState) => {
  dispatch(update({ id }));
};

export const getTasks = () => async (dispatch) => {
  dispatch(error(null));
  try {
    const { data } = await todosService.get();
    dispatch(recived(data));
  } catch (e) {
    dispatch(
      error("Ошибка загрузки данных с сревера jsonplaceholder.typicode.com")
    );
    console.error(e);
  }
};

export function titleUpdated(id) {
  return change({ id, title: "New Title" });
}

export const taskDelete = (id) => (dispatch, getState) =>
  dispatch(remove({ id }));

export default taskReducer;
