import { createContext } from "react";
import initalState from "./store";
import { ActionType } from "./reducer";

export const todoContext = createContext({
  state: initalState,
  dispatch: (action: ActionType) => {},
});
