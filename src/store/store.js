import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    tasks: todoReducer,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})

export default store;