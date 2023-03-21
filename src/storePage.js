/* eslint-disable no-duplicate-case */
import React, { useEffect } from "react";
import {
  completedTask,
  getTasks,
  taskDelete,
  titleUpdated,
} from "./store/task";
import { useSelector, useDispatch } from "react-redux";

const StorePage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <h2>Store</h2>

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
