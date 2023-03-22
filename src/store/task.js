import { createSlice } from "@reduxjs/toolkit";
import todosService from "../service/todos.service";
import { setError } from "./errors";

const initialState = { entities: [], isLoading: true };

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
    added(state, { payload }) {
      state.entities.push(payload);
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
  },
});

const { remove, update, recived, change, added } = taskSlice.actions;
const { reducer: taskReducer } = taskSlice;

export const completedTask = (id) => (dispatch, getState) => {
  dispatch(update({ id }));
};

export const loadingTasks = () => async (dispatch) => {
  try {
    const { data } = await todosService.get();
    dispatch(recived(data));
  } catch (e) {
    dispatch(
      setError(
        "Ошибка при загрузки данных с сревера jsonplaceholder.typicode.com"
      )
    );
    console.error(e);
  }
};

export function titleUpdated(id) {
  return change({ id, title: "New Title" });
}

export const taskAdded = (payload) => async (dispatch) => {
  try {
    const { data } = await todosService.create(payload);
    dispatch(added(data));
  } catch (e) {
    dispatch(setError("Не удалось отправить данные"));
    console.error(e);
  }
};

export const taskDelete = (id) => (dispatch, getState) =>
  dispatch(remove({ id }));

export const getTasks = () => (state) => state.tasks;

export default taskReducer;
