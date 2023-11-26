import "./header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import question from "../../assets/png/question.png";
import skillsHead from "../../assets/png/skillsHead.png";
import projectLogo from "../../assets/png/projectImg.png";
import contactmeLogo from "../../assets/png/contactmeLogo.png";
import Vlogo from "../../assets/svg/V_logo_44.svg";
import Vlogo_large from "../../assets/svg/V_logo_88.svg";
import classNames from "classnames";
import Glitch from "../glitch/Glitch";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const headerVision = visible ? "visible" : "hidden";

  const navLinks = [
    { to: "WhoAmI", text: "Who Am I", img: question },
    { to: "SkillsPart", text: "Skills", img: skillsHead },
    { to: "ProjectsPart", text: "Projects", img: projectLogo },
    { to: "ContactmePart", text: "Contact me", img: contactmeLogo },
  ];

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const closeMenuOnScroll = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

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
            {navLinks.map((link) => (
              <Link
                className="header__navbar-navlinks"
                to={link.to}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenuOnScroll}
                key={link.text}
              >
                <div className="header__navbar-glitch">
                  <div className="header__navbar-glitch_inside">
                    <p className="header__navbar-text">
                      <Glitch inline onHover>
                        {link.text}
                      </Glitch>
                    </p>
                    <img
                      src={link.img}
                      alt="Link"
                      className="header__navbar-logo"
                    ></img>
                  </div>
                </div>
              </Link>
            ))}
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
