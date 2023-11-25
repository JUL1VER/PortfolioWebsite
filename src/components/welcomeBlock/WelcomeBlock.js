import React, { useState } from "react";
import { useEffect } from "react";

import s from "./welcomeBlock.module.css";
import Glitch from "../glitch/Glitch";

const WelcomeBlock = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <section className={s.welcomeBlock}>
      <h1 className={s.hello}>Knock, knock.</h1>
      <h2 className={s.name}>
        {" "}
        <div className={s.greenText}>
          <Glitch>Vladislav Juliver</Glitch>
        </div>{" "}
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
        about my journey as a{" "}
        <span className={s.greenText}>frontend developer.</span>
        <span className={s.console}>NEO</span>
      </p>
    </section>
  );
};

export default WelcomeBlock;
