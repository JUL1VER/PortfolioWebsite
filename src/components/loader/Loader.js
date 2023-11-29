import s from "./loader.module.css";

import React from "react";
import classNames from "classnames";

const Loader = ({ positionAbsolute, className }) => {
  return (
    <span
      className={classNames(s.loader, className, {
        [s.absolute]: positionAbsolute,
      })}
    ></span>
  );
};

export default Loader;
