import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./count";
import todoReducer, { TodoItemType } from "./todoList";

export type StateType = {
  count: number;
  todoList: TodoItemType[];
};

export default configureStore({
  reducer: {
    count: countReducer,
    todoList: todoReducer,
  },
});
