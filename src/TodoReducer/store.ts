import { nanoid } from "nanoid";

export type TodoType = {
  id: string;
  title: string;
};

const initalState: TodoType[] = [
  { id: nanoid(5), title: "吃饭" },
  { id: nanoid(5), title: "睡觉" },
];

export default initalState;
