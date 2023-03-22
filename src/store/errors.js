import { createSlice } from "@reduxjs/toolkit";

const initialState = { entities: [] };

const errorsSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    set(state, { payload }) {
      state.entities.push({ error: payload });
    },
  },
});

const { set } = errorsSlice.actions;
const { reducer: errorsReducer } = errorsSlice;

export const setError = (message) => (dispatch) => {
  dispatch(set(message));
};

export const getErrors = () => (state) => state.error.entities;

export default errorsReducer;
