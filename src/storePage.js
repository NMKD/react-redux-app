/* eslint-disable no-duplicate-case */
import React, { useEffect, useState } from "react";
import {
  completedTask,
  getTasks,
  taskDelete,
  titleUpdated,
} from "./store/task";
import store from "./store/store";

const StorePage = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.dispatch(getTasks());
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return (
    <>
      <h2>Store</h2>
      <ul>
        {state !== undefined &&
          state.map((el) => (
            <div
              key={el.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="mb-3">
                <li>{el.title}</li>
                <p>Completed: {el.copmleted ? "Done" : "In process"}</p>
              </div>
              <div>
                <button
                  className="btn btn-success mx-2"
                  onClick={() => store.dispatch(completedTask(el.id))}
                >
                  Toogle
                </button>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => store.dispatch(titleUpdated(el.id))}
                >
                  Title
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => store.dispatch(taskDelete(el.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </ul>
    </>
  );
};

export default StorePage;
