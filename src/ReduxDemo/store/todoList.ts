import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// 定义单个待办事项的类型
export type TodoItemType = {
  id: string; // 待办事项id
  title: string; // 待办事项名称
  isComplete: boolean; // 待办事项是否完成
};

// 定义初始值
const INIT_STATE: TodoItemType[] = [
  {
    id: nanoid(5),
    title: "吃饭",
    isComplete: false,
  },
  {
    id: nanoid(5),
    title: "睡觉",
    isComplete: true,
  },
];

// 定义数据存储的分片
const todoListSlice = createSlice({
  name: "todoList",
  initialState: INIT_STATE,
  reducers: {
    // 增加待办的reducer，传入state和payload，其中payload需要传入泛型
    addTodo(state: TodoItemType[], action: PayloadAction<TodoItemType>) {
      return [action.payload, ...state];
    },
    // 删除待办的reducer
    removeTodo(state: TodoItemType[], action: PayloadAction<{ id: string }>) {
      const { id: removedId } = action.payload;
      return state.filter((todo) => todo.id !== removedId);
    },
    // 将待办事项在完成和未完成之间转换的reducer
    toggleCompleted(
      state: TodoItemType[],
      action: PayloadAction<{ id: string }>
    ) {
      const { id: toggleId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== toggleId) return todo;
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      });
    },
  },
});

// 导出action
export const { addTodo, removeTodo, toggleCompleted } = todoListSlice.actions;
// 导出reducer
export default todoListSlice.reducer;
