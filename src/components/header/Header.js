import s from "./header.module.css";

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
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

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
    <div className={classNames(s.header, visible ? s.visible : s.hidden)}>
      <div className={s.wrapper}>
        <a
          href="https://jul1ver.github.io/PortfolioWebsite/"
          className={s.logoBlock}
        >
          <picture>
            <source
              className={s.vLogo}
              media="(min-width: 1024px)"
              srcSet={Vlogo_large}
            />
            <img src={Vlogo} alt="Vlogo" className={s.vLogo}></img>
          </picture>
        </a>
        <button
          type="button"
          className={classNames(s.burger, { [s.active]: isActive })}
          onClick={toggleActiveClass}
        >
          <span></span>
        </button>
        <div className={s.navbarBlock}>
          <nav className={classNames(s.navbar, { [s.active]: isActive })}>
            {navLinks.map((link) => (
              <Link
                className={s.navLinks}
                to={link.to}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenuOnScroll}
                key={link.text}
              >
                <div className={s.block}>
                  <div className={s.blockWrapper}>
                    <p className={s.navbarText}>
                      <Glitch inline onHover>
                        {link.text}
                      </Glitch>
                    </p>
                    <img
                      src={link.img}
                      alt="Link"
                      className={s.navbarLogo}
                    ></img>
                  </div>
                </div>
              </Link>
            ))}
          </nav>
          <div
            className={classNames(s.overlay, { [s.active]: isActive })}
            onClick={toggleActiveClass}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
