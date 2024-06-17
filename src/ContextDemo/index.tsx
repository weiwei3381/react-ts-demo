import React, { FC, createContext, useState } from "react";
import Toolbar from "./Toolbar";

// 定义白天和夜晚2个主题的前景色和背景色
const themes = {
  light: {
    fore: "#000",
    background: "#eee",
  },
  dark: {
    fore: "#fff",
    background: "#222",
  },
};

// 定义主题的context，默认为白天的主题，需要导出出去，所有用这个变量的页面需要引入该对象
export const ThemeContext = createContext(themes.light);

const Demo: FC = () => {
  const [theme, setTheme] = useState(themes.light);
  function toDark() {
    setTheme(themes.dark);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <p>Context Demo</p>
        <div>
          <button onClick={toDark}>dark</button>
        </div>
      </div>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default Demo;
