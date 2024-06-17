import React, { FC, useReducer, useState } from "react";

type StateType = {
  count: number;
}; // 状态的类型

type ActionType = {
  type: string;
};

const initalState = { count: 100 };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const CounterReducer: FC = () => {
  const [state, dispath] = useReducer(reducer, initalState);

  return (
    <div>
      <span>当前计数： {state.count}</span>
      <button
        onClick={() => {
          dispath({ type: "increase" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispath({ type: "decrease" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default CounterReducer;
