/* eslint-disable no-duplicate-case */
import React, { useEffect, useState } from "react";
import {
  completedTask,
  getTasks,
  loadingTasks,
  taskAdded,
  taskDelete,
  titleUpdated,
} from "./store/task";
import { useSelector, useDispatch } from "react-redux";
import { getErrors } from "./store/errors";
import { nanoid } from "nanoid";

const StorePage = () => {
  const [stateInput, setStateInput] = useState({ title: "" });
  const state = useSelector(getTasks());
  const error = useSelector(getErrors());
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      taskAdded({
        ...stateInput,
        id: nanoid(),
        copmleted: false,
      })
    );
  };

  const handleChange = ({ target }) => {
    setStateInput({ title: target.value });
  };

  const isValid = !stateInput.title ? true : false;

  useEffect(() => {
    dispatch(loadingTasks());
  }, [dispatch]);

  return (
    <>
      <h2>Store</h2>
      <form className="row my-3" onSubmit={handleSubmit}>
        <div className="col col-8 d-flex align-item-start">
          <label htmlFor="name" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="col col-4">
          <button
            className="btn btn-outline-success"
            type="submit"
            disabled={isValid}
          >
            Add
          </button>
        </div>
      </form>
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
