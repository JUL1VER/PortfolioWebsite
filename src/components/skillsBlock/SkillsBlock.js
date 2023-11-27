import s from "./skillsBlock.module.css";

import React, { useEffect, useState } from "react";
import skillsHead from "../../assets/png/skillsHead.png";
import coding from "../../assets/png/coding.png";
import coding_large from "../../assets/png/coding_large.png";
import neogif from "../../assets/png/neogif.gif";
import css from "../../assets/png/csslogo.png";
import js from "../../assets/png/jslogo.png";
import html from "../../assets/png/htmllogo.png";
import react from "../../assets/png/reactlogo.png";
import redux from "../../assets/png/reduxlogo.png";
import ts from "../../assets/png/tslogo.png";
import SkillIcon from "./skillIcon/SkillIcon";
import Aos from "aos";
import "aos/dist/aos.css";
import Glitch from "../glitch/Glitch";
import classNames from "classnames";

const technologies = [
  {
    id: 1,
    imgprop: html,
    src: "https://github.com/JUL1VER/PortfolioWebsite",
    title: "HTML",
  },
  {
    id: 2,
    imgprop: css,
    src: "https://github.com/JUL1VER/PortfolioWebsite",
    title: "CSS",
  },
  {
    id: 3,
    imgprop: js,
    src: "https://github.com/JUL1VER/FunnyRace.JS",
    title: "JS",
  },
  {
    id: 4,
    imgprop: ts,
    src: "https://github.com/JUL1VER/GitHubSearch.TS",
    title: "TS",
  },
  {
    id: 5,
    imgprop: react,
    src: "https://github.com/JUL1VER/MarvelCharactersApp.React",
    title: "React",
  },
  {
    id: 6,
    imgprop: redux,
    src: "https://github.com/JUL1VER/GitHubSearch.TS",
    title: "Redux",
  },
];

const SkillsBlock = () => {
  const [isLogosHover, setIsLogosHover] = useState(false);

  const handleMouseEnter = () => {
    setIsLogosHover(true);
  };

  const handleMouseLeave = () => {
    setIsLogosHover(false);
  };

  const content = technologies.map((techno) => (
    <SkillIcon
      imgprop={techno.imgprop}
      src={techno.src}
      key={techno.id}
      title={techno.title}
    />
  ));

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <section className={classNames(s.skillsBlock, ["containerBlock"])}>
      <div
        className={s.header}
        id="SkillsPart"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <h2 className={s.headerText}>
          <Glitch inline>Skills</Glitch>
        </h2>
        <img src={skillsHead} className={s.headerLogo} alt="Neo" />
      </div>
      <div
        className={s.content}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <div className={s.images}>
          <picture
            className={classNames(s.imgPic, { [s.gifActive]: isLogosHover })}
          >
            <source
              className={s.img}
              srcSet={coding_large}
              media="(min-width: 650px)"
            />
            <img src={coding} className={s.img} alt="skillsImg" />
          </picture>
          <img
            src={neogif}
            className={classNames(s.gif, { [s.gifActive]: isLogosHover })}
            alt="meme"
          />
        </div>

        <div
          className={s.wrapper}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div
            className={s.logos}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBlock;
