function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      // This gets called for every action you dispatch.
      // If it's a function, call it.
      if (typeof action === "function") {
        return action(dispatch, getState, extraArgument);
      } else {
        return next(action);
      }
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
