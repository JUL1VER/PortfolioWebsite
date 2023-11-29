import s from "./hardSkill.module.css";

import React, { useState } from "react";
import Glitch from "../../glitch/Glitch";
import classNames from "classnames";

const HardSkill = (props) => {
  const { imgprop, src, title } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={s.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <img src={imgprop} alt="skillIcon" className={s.logo} />
        <p className={classNames(s.text, { [s.hovered]: isHovered })}>
          <Glitch inline onHover isHovered={isHovered}>
            {title}
          </Glitch>
        </p>
      </a>
    </div>
  );
};

export default HardSkill;
