import s from "./skillsBlock.module.css";

import React, { useEffect, useRef, useState } from "react";
import skillsHead from "../../assets/png/skillsHead.png";
import coding from "../../assets/png/coding.png";
import coding_large from "../../assets/png/coding_large.png";
import softskill from "../../assets/png/softskill.png";
import softskill_large from "../../assets/png/softskill_large.png";
import neogif from "../../assets/png/neogif.gif";
import css from "../../assets/png/csslogo.png";
import js from "../../assets/png/jslogo.png";
import html from "../../assets/png/htmllogo.png";
import react from "../../assets/png/reactlogo.png";
import redux from "../../assets/png/reduxlogo.png";
import ts from "../../assets/png/tslogo.png";
import Glitch from "../glitch/Glitch";
import classNames from "classnames";
import Switcher from "../switcher/Switcher";
import HardSkill from "./hardSkill/HardSkill";
import Aos from "aos";
import "aos/dist/aos.css";

const hards = [
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
    title: "JavaScript",
  },
  {
    id: 4,
    imgprop: ts,
    src: "https://github.com/JUL1VER/GitHubSearch.TS",
    title: "TypeScript",
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

const softs = [
  "English Upper Intermediate",
  "German Intermediate",
  "Mentoring and leadership",
  "Curiosity and determination",
  "Professional comminication",
  "Perfect sense of humor",
  "Conference fan",
  "White articles and attend podcasts",
];

const SkillsBlock = () => {
  const [isLogosHover, setIsLogosHover] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const containerRef = useRef(null);

  const tabs = ["Hards Skills", "Soft Skills"];

  const handleMouseEnter = () => {
    setIsLogosHover(true);
  };

  const handleMouseLeave = () => {
    setIsLogosHover(false);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  useEffect(() => {
    const updateContainerHeight = () => {
      const containerElem = containerRef.current;
      if (containerElem) {
        const activeChild = containerElem.querySelector(
          `.${s.content}.${s.active}`
        );
        let maxHeight = 0;
        const contentHeight = activeChild.clientHeight;
        maxHeight = Math.max(maxHeight, contentHeight);
        setContainerHeight(maxHeight);
      }
    };

    updateContainerHeight();
    window.addEventListener("resize", updateContainerHeight);
    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, [activeTab]);

  return (
    <section
      className={classNames(s.skillsBlock, ["containerBlock"])}
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-once="true"
    >
      <div className={s.header} id="SkillsPart">
        <h2 className={s.headerText}>
          <Glitch inline>Skills</Glitch>
        </h2>
        <img src={skillsHead} className={s.headerLogo} alt="Neo" />
      </div>
      <Switcher
        tabs={tabs}
        className={s.switcher}
        activeIndex={activeTab}
        onTabClick={(index) => handleTabClick(index)}
      />
      <div
        className={s.container}
        ref={containerRef}
        style={{ height: `${containerHeight}px` }}
      >
        <div
          className={classNames(s.content, {
            [s.active]: activeTab === 0,
          })}
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

          <div className={s.wrapper}>
            <div
              className={s.logos}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {hards.map((techno) => (
                <HardSkill
                  imgprop={techno.imgprop}
                  src={techno.src}
                  key={techno.id}
                  title={techno.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={classNames(s.content, {
            [s.active]: activeTab === 1,
          })}
        >
          <div className={s.softs}>
            {softs.map((soft) => (
              <p key={soft} className={s.soft}>
                {soft}
              </p>
            ))}
          </div>
          <div className={s.images}>
            <picture
              className={classNames(s.imgPic, { [s.gifActive]: isLogosHover })}
            >
              <source
                className={s.img}
                srcSet={softskill_large}
                media="(min-width: 650px)"
              />
              <img src={softskill} className={s.img} alt="skillsImg" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBlock;
