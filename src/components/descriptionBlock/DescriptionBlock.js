import s from "./descriptionBlock.module.css";

import React, { useEffect, useRef, useState } from "react";
import myfoto from "../../assets/png/myfoto.png";
import myfoto_large from "../../assets/png/myfoto_large.png";
import question from "../../assets/png/question.png";
import neo from "../../assets/png/neo.webp";
import neo_large from "../../assets/png/neo_large.webp";
import Modal from "../modal/Modal";
import Glitch from "../glitch/Glitch";
import Aos from "aos";
import "aos/dist/aos.css";
import classNames from "classnames";

const DescriptionBlock = () => {
  const [modalActive, setModalActive] = useState(false);
  const containerRef = useRef(null);
  const topImgRef = useRef(null);
  const bottomImgRef = useRef(null);
  const hoverRef = useRef(null);

  const handleCloseModalClick = () => {
    setModalActive(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    const topImg = topImgRef.current;
    const bottomImg = bottomImgRef.current;
    const hover = hoverRef.current;

    if (container && topImg) {
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        bottomImg.style.clipPath = `circle(100px at ${x}px ${y}px)`;
        bottomImg.style.zIndex = "3";
        hover.style.opacity = "0";
      };

      const handleMouseLeave = () => {
        bottomImg.style.clipPath = "circle(0% at center)";
        bottomImg.style.zIndex = "1";
        hover.style.opacity = "0.45";
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <section className={classNames(s.descriptionBlock, ["containerBlock"])}>
      <div
        className={s.header}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <h2 className={s.headerText} id="WhoAmI">
          <Glitch inline>Who Am I</Glitch>
        </h2>
        <img src={question} className={s.logo} alt="Question" />
      </div>
      <div
        className={s.wrapper}
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <div className={s.photoBlock} ref={containerRef}>
          <div className={s.photoHover} ref={hoverRef} />
          <picture className={s.photoPic}>
            <source
              className={s.myPhoto}
              srcSet={myfoto_large}
              media="(min-width: 650px)"
            />
            <img
              src={myfoto}
              className={s.myPhoto}
              alt="myFoto"
              ref={topImgRef}
            />
          </picture>
          <picture>
            <source
              className={s.neo}
              srcSet={neo_large}
              media="(min-width: 1024px)"
            />
            <img src={neo} className={s.neo} alt="Neo" ref={bottomImgRef} />
          </picture>
        </div>
        <div
          className={s.content}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div className={s.text}>
            Hello, my name is&nbsp;
            <a
              className={s.link}
              href="https://linkedin.com/in/vladJ1"
              target="_blank"
              rel="noreferrer"
            >
              <Glitch inline onHover>
                Vlad&nbsp;
              </Glitch>
            </a>
            and I like to create cool things! Interesting fact about me: just
            like I'm obsessed with programming, I love to write&nbsp;
            <a
              className={s.link}
              href="https://stihi.ru/avtor/jul1ver"
              target="_blank"
              rel="noreferrer"
            >
              <Glitch onHover inline>
                poems
              </Glitch>
            </a>
            . That's why I can say programming is a poetry too!
          </div>
          <div className={s.text}>
            Currently I'm developing well desingned impressive apps in&nbsp;
            <a
              className={s.link}
              href="https://mish.design/"
              target="_blank"
              rel="noreferrer"
            >
              <Glitch onHover inline>
                Mish.design
              </Glitch>
            </a>
            . Mostly I work using React and TypeScript, but I also like native
            JavaScript. The power and possibilities of CSS never stop to amaze
            me!
          </div>
          <div className={s.text}>
            I am interested in many things including science, poetry, music,
            history, phylosophy and travelling. But programming is one of my
            favourites! And I also like to talk with people, so feel free
            to&nbsp;
            <a
              className={s.link}
              href="mailto:jul1v3r@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Glitch onHover inline>
                say&nbsp;
              </Glitch>
            </a>
            me something :)
          </div>
          <button
            className={s.hello}
            type="button"
            onClick={() => setModalActive(true)}
          >
            Say Hello
          </button>
        </div>
      </div>
      <Modal active={modalActive} onCloseModalClick={handleCloseModalClick} />
    </section>
  );
};

export default DescriptionBlock;
