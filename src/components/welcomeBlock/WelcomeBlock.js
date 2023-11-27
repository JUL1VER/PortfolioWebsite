import s from "./welcomeBlock.module.css";

import React from "react";
import Glitch from "../glitch/Glitch";
import useIsDesktop from "../../hooks/useIsDesktop";

const WelcomeBlock = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className={s.welcomeBlock}>
      <h1 className={s.hello}>Knock, knock.</h1>
      <h2 className={s.name}>
        <div className={s.greenText}>
          <Glitch>Vladislav Juliver&nbsp;</Glitch>
        </div>
        here.
      </h2>
      {isDesktop ? (
        <h3 className={s.creater_desktop}>
          I am <span className={s.greenText}>obsessed</span> with creating
          beautiful digital products.
        </h3>
      ) : (
        <>
          <h3 className={s.creater_mobile_1}>
            I am <span className={s.greenText}>obsessed</span> with creating
          </h3>
          <h3 className={s.creater_mobile_2}>beautiful digital products.</h3>
        </>
      )}
      <p className={s.potrfolio_1}>
        This is my portfolio website where you'll learn
      </p>
      <p className={s.potrfolio_2}>
        about my journey as a&nbsp;
        <span className={s.greenText}>frontend developer.</span>
        <span className={s.console}>NEO</span>
      </p>
    </section>
  );
};

export default WelcomeBlock;
