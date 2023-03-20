/* eslint-disable no-duplicate-case */
import React, { useEffect, useState } from "react";
import { taskCompleted, taskRemove, titleUpdated } from "./store/actions";
import store from "./store/store";

const StorePage = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const handleClick = (id) => {
    store.dispatch(taskCompleted(id));
  };

  const handleChange = (id) => {
    store.dispatch(titleUpdated(id));
  };

  const handleDelete = (id) => {
    store.dispatch(taskRemove(id));
  };

  return (
    <>
      <h2>Store</h2>
      <ul>
        {state !== undefined &&
          state.map((el) => (
            <div className="d-flex justify-content-between align-items-center">
              <div className="mb-3">
                <li key={el.id}>{el.desc}</li>
                <p>Completed: {el.copmleted ? "Done" : "In process"}</p>
              </div>
              <div>
                <button
                  className="btn btn-success mx-2"
                  onClick={() => handleClick(el.id)}
                >
                  Toogle
                </button>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => handleChange(el.id)}
                >
                  Title
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(el.id)}
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
