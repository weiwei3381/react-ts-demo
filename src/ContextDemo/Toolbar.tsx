import React, { FC, useContext } from "react";
import ThemeButton from "./ThemeButton";

const Toolbar: FC = () => {
  return (
    <>
      <div>我是Toolbar</div>
      <ThemeButton />
    </>
  );
};

export default Toolbar;
