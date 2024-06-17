import React, { FC, useContext } from "react";
import { todoContext } from "./context";

const List: FC = () => {
  const { state, dispatch } = useContext(todoContext);

  // 删除待办事项的方法
  function del(id: string) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }

  return (
    <p>
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button
              onClick={() => {
                del(todo.id);
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </p>
  );
};

export default List;
