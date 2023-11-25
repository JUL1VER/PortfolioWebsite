import "./header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import question from "../descriptionBlock/img/question.png";
import skillsHead from "../skillsBlock/img/skillsHead.png";
import projectLogo from "../projectsBlock/img/projectImg.png";
import contactmeLogo from "../contactmeBlock/img/contactmeLogo.png";
import Vlogo from "./img/V_logo_44.svg";
import Vlogo_large from "./img/V_logo_88.svg";
import classNames from "classnames";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const closeMenuOnScroll = () => {
    setIsActive(false);
  };

  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    if (!isActive) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const headerVision = visible ? "visible" : "hidden";

  return (
    <div className={classNames("header", headerVision)}>
      <div className="header__wrapper">
        <a
          href="https://jul1ver.github.io/PortfolioWebsite/"
          className="header__logo-block"
        >
          <picture className="header__v-logo-pic">
            <source
              className="header__v-logo"
              media="(min-width: 1024px)"
              srcSet={Vlogo_large}
            />
            <img src={Vlogo} alt="Vlogo" className="header__v-logo"></img>
          </picture>
        </a>
        <button
          type="button"
          className={classNames("header__burger-block", { active: isActive })}
          onClick={toggleActiveClass}
        >
          <span></span>
        </button>
        <div className="header__navbar-block">
          <nav className={classNames("header__navbar", { active: isActive })}>
            <Link
              className="header__navbar-navlinks"
              to="WhoAmI"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenuOnScroll}
            >
              <div className="header__navbar-glitch">
                <div className="header__navbar-glitch_inside">
                  <p className="header__navbar-text">Who Am I</p>
                  <img
                    src={question}
                    alt="Question"
                    className="header__navbar-logo"
                  ></img>
                </div>
              </div>
            </Link>
            <Link
              className="header__navbar-navlinks"
              to="SkillsPart"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenuOnScroll}
            >
              <div className="header__navbar-glitch">
                <div className="header__navbar-glitch_inside">
                  <p className="header__navbar-text">Skills</p>
                  <img
                    src={skillsHead}
                    alt="Neo"
                    className="header__navbar-logo"
                  ></img>
                </div>
              </div>
            </Link>
            <Link
              className="header__navbar-navlinks"
              to="ProjectsPart"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenuOnScroll}
            >
              <div className="header__navbar-glitch">
                <div className="header__navbar-glitch_inside">
                  <p className="header__navbar-text">Projects</p>
                  <img
                    src={projectLogo}
                    alt="Projects"
                    className="header__navbar-logo"
                  ></img>
                </div>
              </div>
            </Link>
            <Link
              className="header__navbar-navlinks"
              to="ContactmePart"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenuOnScroll}
            >
              <div className="header__navbar-glitch">
                <div className="header__navbar-glitch_inside">
                  <p className="header__navbar-text">Contact me</p>
                  <img
                    src={contactmeLogo}
                    alt="Phone"
                    className="header__navbar-logo"
                  ></img>
                </div>
              </div>
            </Link>
          </nav>
          <div
            className={classNames("header__overlay", { active: isActive })}
            onClick={toggleActiveClass}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
