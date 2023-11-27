import s from "./contactmeBlock.module.css";

import React, { useEffect, useRef, useState } from "react";
import contactmeLogo from "../../assets/png/contactmeLogo.png";
import leftpill from "../../assets/png/bluePill.png";
import rightpill from "../../assets/png/redPill.png";
import morpheus from "../../assets/png/morpheus.webp";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import classNames from "classnames";
import Glitch from "../glitch/Glitch";

const ContactmeBlock = () => {
  const [info, setInfo] = useState({ name: "", email: "", message: "" });
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (!info.email.length || !info.message.length || !info.name.length) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [info]);

  const handleNameChange = (e) => {
    setInfo((state) => ({ ...state, name: e.target.value }));
  };

  const handleEmailChange = (e) => {
    setInfo((state) => ({ ...state, email: e.target.value }));
  };

  const handleMessageChange = (e) => {
    setInfo((state) => ({ ...state, message: e.target.value }));
  };

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kc7tg2i",
        "template_1nboemo",
        form.current,
        "uuqcIqnHZpy0Umg--"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setInfo((state) => ({ ...state, name: "" }));
    setInfo((state) => ({ ...state, email: "" }));
    setInfo((state) => ({ ...state, message: "" }));
  };

  return (
    <section className={classNames(s.contactmeBlock, "containerBlock")}>
      <div
        className={s.header}
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <h2 className={s.headerText} id="ContactmePart">
          <Glitch inline>Contact me</Glitch>
        </h2>
        <img src={contactmeLogo} alt="Phone" className={s.headerLogo} />
      </div>
      <div
        className={s.content}
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <div className={s.pic}>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className={s.bluePill}
          >
            <img src={leftpill} alt="bluePill" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=yyrhikYaRrk"
            target="_blank"
            rel="noreferrer"
            className={s.redPill}
          >
            <img src={rightpill} alt="redPill" />
          </a>
          <picture>
            <source
              className={s.image}
              media="(min-width: 500px)"
              srcSet={morpheus}
            />
            <img src={morpheus} alt="Morpheus" className={s.image} />
          </picture>
        </div>
        <form ref={form} onSubmit={sendEmail} className={s.form}>
          <input
            name="user_name"
            type="text"
            placeholder="Enter your name"
            className={s.name}
            value={info.name}
            onChange={handleNameChange}
          />
          <input
            name="user_email"
            type="email"
            placeholder="Enter your email address"
            className={s.email}
            value={info.email}
            onChange={handleEmailChange}
          />
          <textarea
            name="message"
            type="text"
            placeholder="Enter your message..."
            className={s.message}
            value={info.message}
            onChange={handleMessageChange}
          />
          <button
            disabled={disableButton}
            className={classNames(s.button)}
            type="submit"
            value="Send"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactmeBlock;
