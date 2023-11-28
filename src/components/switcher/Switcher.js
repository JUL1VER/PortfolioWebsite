import classNames from "classnames";
import s from "./switcher.module.css";

import React from "react";

const Switcher = ({ tabs, className, activeIndex, onTabClick }) => {
  return (
    <div className={classNames(s.wrapper, className)}>
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={classNames(s.tab, {
            [s.tab_active]: index === activeIndex,
          })}
          onClick={() => onTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Switcher;
