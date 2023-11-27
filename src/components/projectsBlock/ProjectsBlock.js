import s from "./projectsBlock.module.css";

import React, { useEffect } from "react";
import projectLogo from "../../assets/png/projectImg.png";
import ProjectSlide from "./projectSlide/ProjectSlide";
import Aos from "aos";
import "aos/dist/aos.css";
import classNames from "classnames";
import Glitch from "../glitch/Glitch";

const ProjectsBlock = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <section className={classNames(s.projectsBlock, ["containerBlock"])}>
      <div
        className={s.header}
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <h2 className={s.headerText} id="ProjectsPart">
          <Glitch inline>Projects</Glitch>
        </h2>
        <img src={projectLogo} alt="Project" className={s.headerLogo} />
      </div>
      <p
        className={s.text}
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Check out some of my interesting projects:
      </p>
      <ProjectSlide />
    </section>
  );
};

export default ProjectsBlock;
