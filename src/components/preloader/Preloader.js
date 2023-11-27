import s from "./preloader.module.css";

import React from "react";
import classNames from "classnames";

const Preloader = ({ className }) => {
  return (
    <div className={classNames(s.preloader, className)}>
      <h1 className={s.matrixConsole}>Wake up, Neo...</h1>
    </div>
  );
};

export default Preloader;
