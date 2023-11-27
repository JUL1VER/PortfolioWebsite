import s from "./modal.module.css";

import React, { useEffect } from "react";
import linkedin from "../../assets/svg/linkedin.svg";
import telegram from "../../assets/svg/telegram.svg";
import classNames from "classnames";

const Modal = ({ active, onCloseModalClick }) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyPress = (event) => {
      if (event.key === "Escape" && active) {
        onCloseModalClick();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [active, onCloseModalClick]);

  return (
    <div
      className={classNames(s.modal, {
        [s.active]: active,
      })}
      onClick={onCloseModalClick}
    >
      <div
        className={classNames(s.content, {
          [s.active]: active,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={s.text}>
          Feel free to contact me by the following links below!
        </p>
        <div className={s.links}>
          <a
            href="https://linkedin.com/in/vladJ1"
            className={classNames(s.link, s.link_left)}
            target="blank"
          >
            LinkedIn
            <img src={linkedin} alt="linkedin" className={s.linkImg} />
          </a>
          <a
            href="https://t.me/JUL1VER"
            className={classNames(s.link, s.link_right)}
            target="blank"
          >
            Telegram
            <img src={telegram} alt="linkedin" className={s.linkImg} />
          </a>
        </div>
        <button type="button" className={s.close} onClick={onCloseModalClick} />
      </div>
    </div>
  );
};

export default Modal;
