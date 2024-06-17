import React, { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../ReduxDemo/store/store";
import { TodoItemType } from "../ReduxDemo/store/todoList";
import {
  addTodo,
  toggleCompleted,
  removeTodo,
} from "../ReduxDemo/store/todoList";
import { nanoid } from "nanoid";

const TodoList: FC = () => {
  const [value, setValue] = useState("");
  const todoList = useSelector<StateType>(
    (state) => state.todoList
  ) as TodoItemType[];

  const dispatch = useDispatch();

  return (
    <>
      <p>Todo List Demo</p>
      <ul>
        {todoList.map((todo) => (
          <>
            <li
              style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
              key={todo.id}
              onClick={() => {
                dispatch(toggleCompleted({ id: todo.id }));
              }}
            >
              {todo.title}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(removeTodo({ id: todo.id }));
                }}
              >
                x
              </button>
            </li>
          </>
        ))}
      </ul>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: nanoid(5),
              isComplete: false,
              title: value,
            })
          );
          setValue("");
        }}
      >
        增加
      </button>
    </>
  );
};

export default TodoList;
