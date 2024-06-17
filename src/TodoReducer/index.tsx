import React, { FC, useReducer } from "react";
import List from "./List";
import InputForm from "./InputForm";
import reducer from "./reducer";
import initalState from "./store";
import { todoContext } from "./context";

const TodoReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <todoContext.Provider value={{ state, dispatch }}>
      <List />
      <InputForm />
    </todoContext.Provider>
  );
};

export default TodoReducer;
