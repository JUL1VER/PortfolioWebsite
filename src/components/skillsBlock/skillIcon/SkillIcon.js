import React from "react";

const SkillIcon = (props) => {
  const { imgprop, src, title } = props;
  return (
    <div className="skills-block__logo-with-text">
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <img src={imgprop} alt="skillIcon" className="skills-block__logos" />
        <p className="skills-block__logos-text">{title}</p>
      </a>
    </div>
  );
};

export default SkillIcon;
