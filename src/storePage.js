/* eslint-disable no-duplicate-case */
import React, { useEffect } from "react";
import {
  completedTask,
  getTasks,
  loadingTasks,
  taskDelete,
  titleUpdated,
} from "./store/task";
import { useSelector, useDispatch } from "react-redux";
import { getErrors } from "./store/errors";

const StorePage = () => {
  const state = useSelector(getTasks());
  const error = useSelector(getErrors());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingTasks());
  }, [dispatch]);

  return (
    <>
      <h2>Store</h2>
      {error.length > 0 && <h4>{error[0].error}</h4>}
      {!state.isLoading &&
        state.entities.map((el) => (
          <div
            key={el.id}
            className="d-flex justify-content-between align-items-center"
          >
            <ul className="list-group list-group-flush mb-3">
              <li className="ist-group-item">{el.title}</li>
              <span>Completed: {el.copmleted ? "Done" : "In process"}</span>
            </ul>

            <div>
              <button
                className="btn btn-success mx-2"
                onClick={() => dispatch(completedTask(el.id))}
              >
                Toogle
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={() => dispatch(titleUpdated(el.id))}
              >
                Title
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(taskDelete(el.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default StorePage;
