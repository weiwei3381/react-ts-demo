import React, { ChangeEvent, FC, useContext, useState } from "react";
import { todoContext } from "./context";
import { nanoid } from "nanoid";

const InputForm: FC = () => {
  // 通过useContext获取state和dispatch
  const { state, dispatch } = useContext(todoContext);
  const [value, setValue] = useState(""); // 令输入框为受控组件

  //  受控组件的onchange事件绑定组件
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  //   提交的事件
  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    // 如果没有值则直接返回
    if (!value.trim()) return;
    const newTodo = {
      id: nanoid(5),
      title: value,
    };
    // 派发新增的reducer
    dispatch({
      type: "add",
      payload: newTodo,
    });
    setValue(""); // 清空输入框
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-new">你需要做什么工作</label>
      <br />
      <input
        id="input-new"
        type="text"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">增加#{state.length + 1}</button>
    </form>
  );
};

export default InputForm;
