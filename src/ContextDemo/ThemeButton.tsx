import React, { FC, useContext } from "react";
import { ThemeContext } from ".";

const ThemeButton: FC = (props) => {
  // 使用context中的变量
  const theme = useContext(ThemeContext);
  return (
    <>
      <button style={{ color: theme.fore, background: theme.background }}>
        theme button
      </button>
    </>
  );
};
export default ThemeButton;
