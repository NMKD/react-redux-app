import * as actionsTypes from "./actionsTypes";
export function taskCompleted(id, value) {
  return {
    type: actionsTypes.taskUpdated,
    payload: { id, copmleted: true },
  };
}

export function titleUpdated(id) {
  return {
    type: actionsTypes.taskUpdated,
    payload: { id, desc: "New Title" },
  };
}

export function taskRemove(id) {
  return {
    type: actionsTypes.taskRemove,
    payload: { id },
  };
}
