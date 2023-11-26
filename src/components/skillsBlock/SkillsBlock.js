import React, { useEffect } from "react";
import skillsHead from "../../assets/png/skillsHead.png";
import skillsImg from "../../assets/png/skillsImg.png";
import skillsImg_large from "../../assets/png/skillsImg_large.png";
import css from "../../assets/png/csslogo.png";
import js from "../../assets/png/jslogo.png";
import html from "../../assets/png/htmllogo.png";
import react from "../../assets/png/reactlogo.png";
import redux from "../../assets/png/reduxlogo.png";
import ts from "../../assets/png/tslogo.png";
import SkillIcon from "./skillIcon/SkillIcon";
import Aos from "aos";
import "aos/dist/aos.css";

import s from "./skillsBlock.module.css";
import Glitch from "../glitch/Glitch";
import classNames from "classnames";

const SkillsBlock = () => {
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
      <div className={s.content}>
        <picture
          className={s.imgPic}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <source
            className={s.img}
            srcSet={skillsImg_large}
            media="(min-width: 500px)"
          />
          <img src={skillsImg} className={s.img} alt="skillsImg" />
        </picture>
        <div
          className={s.wrapper}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <p className={s.skillsText}>
            I have solid experience in the following web technologies:
          </p>
          <div className={s.logo}>{content}</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBlock;
