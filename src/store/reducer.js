import {
  ADD_TASK,
  EDIT_TASK,
  REMOVE_TASK,
  TOGGLE_COMPLETE,
} from "./actionsTypes";

const initialState = {
  tasks: [
    {
      id: 1,
      taskName: "task1",
      description: "task details",
      completed: false,
    },
    {
      id: 2,
      taskName: "task1",
      description: "task details",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                taskName: action.payload.taskName,
                description: action.payload.description,
              }
            : task
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
