import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "./store/store";
import { increase, decrease } from "./store/count";

const Count: FC = () => {
  const count = useSelector<StateType>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <span>
        <>{count}</>
      </span>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        -
      </button>
    </>
  );
};

export default Count;
