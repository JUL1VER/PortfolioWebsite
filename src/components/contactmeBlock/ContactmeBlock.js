import React, { useEffect, useRef, useState } from "react";
import contactmeLogo from "../../assets/png/contactmeLogo.png";
import leftpill from "../../assets/png/bluePill.png";
import rightpill from "../../assets/png/redPill.png";
import hands from "../../assets/png/hands.png";
import hands_large from "../../assets/png/hands_large.png";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contactmeBlock.css";

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
    <section className="contactme-block containerBlock">
      <div
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-once="true"
        className="contactme-block__header"
      >
        <h2 className="contactme-block__header-text" id="ContactmePart">
          Contact me
        </h2>
        <img
          src={contactmeLogo}
          alt="Phone"
          className="contactme-block__header-logo"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
        className="contactme-block__content"
      >
        <div className="contactme-block__picture">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={leftpill}
              alt="leftpill"
              className="contactme-block__leftpill"
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=yyrhikYaRrk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={rightpill}
              alt="rightpull"
              className="contactme-block__rightpill"
            />
          </a>
          <picture className="contactme-block__imgPic">
            <source
              className="contactme-block__img"
              media="(min-width: 500px)"
              srcSet={hands_large}
            />
            <img src={hands} alt="Hands" className="contactme-block__img" />
          </picture>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contactme-block__form">
          <input
            name="user_name"
            type="text"
            placeholder="Enter your name"
            className="contactme-block__name"
            value={info.name}
            onChange={handleNameChange}
          />
          <input
            name="user_email"
            type="email"
            placeholder="Enter your email address"
            className="contactme-block__email"
            value={info.email}
            onChange={handleEmailChange}
          />
          <textarea
            name="message"
            type="text"
            placeholder="Enter your message..."
            className="contactme-block__message"
            value={info.message}
            onChange={handleMessageChange}
          />
          <button
            disabled={disableButton}
            className={
              disableButton
                ? "contactme-block__button disabled"
                : "contactme-block__button"
            }
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
