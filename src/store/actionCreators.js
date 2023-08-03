import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  TOGGLE_COMPLETE,
} from "./actionsTypes";

export const addTask = (taskDetails) => ({
  type: ADD_TASK,
  payload: {
    ...taskDetails,
  },
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const editTask = (taskDetails) => ({
  type: EDIT_TASK,
  payload: {
    ...taskDetails,
  },
});

export const toggleComplete = (taskId) => ({
  type: TOGGLE_COMPLETE,
  payload: taskId,
});
