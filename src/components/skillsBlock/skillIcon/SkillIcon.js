import React, { useState } from "react";
import Glitch from "../../glitch/Glitch";

import s from "./skillIcon.module.css";

const SkillIcon = (props) => {
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
        <p className={s.text}>
          <Glitch inline onHover={!isHovered}>
            {title}
          </Glitch>
        </p>
      </a>
    </div>
  );
};

export default SkillIcon;
