import React from "react";

import s from "./glitch.module.css";

const Glitch = ({ children }) => {
  return (
    <span className={s.glitch} data-text={children}>
      {children}
    </span>
  );
};

export default Glitch;
