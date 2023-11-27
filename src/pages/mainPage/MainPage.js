import s from "./mainPage.module.css";

import React from "react";
import { useEffect, useState } from "react";
import ContactmeBlock from "../../components/contactmeBlock/ContactmeBlock";
import DescriptionBlock from "../../components/descriptionBlock/DescriptionBlock";
import ProjectsBlock from "../../components/projectsBlock/ProjectsBlock";
import Preloader from "../../components/preloader/Preloader";
import SkillsBlock from "../../components/skillsBlock/SkillsBlock";
import WelcomeBlock from "../../components/welcomeBlock/WelcomeBlock";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import classNames from "classnames";

const MainPage = () => {
  const [loading, setLoadong] = useState();

  useEffect(() => {
    setLoadong(true);
    setTimeout(() => {
      setLoadong(false);
    }, 4000);
  }, []);

  return (
    <>
      <Preloader className={classNames({ [s.preloader_hidden]: !loading })} />
      <div className={classNames(s.mainPage, { [s.mainPage_hidden]: loading })}>
        <Header />
        <WelcomeBlock />
        <DescriptionBlock />
        <SkillsBlock />
        <ProjectsBlock />
        <ContactmeBlock />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
