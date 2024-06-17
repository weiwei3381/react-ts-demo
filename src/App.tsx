import React, { FC } from "react";
import ContextDemo from "./ContextDemo";
import CounterReducer from "./CounterReducer";
import TodoReducer from "./TodoReducer";
import Count from "./ReduxDemo/Count";
import { Provider } from "react-redux";
import store from "./ReduxDemo/store/store";
import TodoList from "./pages/TodoList";

const App: FC = () => {
  return (
    <Provider store={store}>
      {/* <ContextDemo /> */}
      {/* <CounterReducer /> */}
      {/* <TodoReducer /> */}
      {/* <Count /> */}
      <TodoList />
    </Provider>
  );
};

export default App;
