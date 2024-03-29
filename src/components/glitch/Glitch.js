import s from "./glitch.module.css";

import React from "react";
import classNames from "classnames";

const Glitch = ({ className, children, onHover, isHovered, inline }) => {
  const Element = inline ? "span" : "div";

  return (
    <Element
      className={classNames(
        s.glitch,
        onHover ? s.glitch_hover : s.glitch_default,
        isHovered ? s.glitch_default : null,
        className
      )}
      data-text={children}
    >
      {children}
    </Element>
  );
};

export default Glitch;
