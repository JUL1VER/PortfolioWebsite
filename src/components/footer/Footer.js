import s from "./footer.module.css";

import React from "react";
import linkedin from "../../assets/svg/linkedin.svg";
import telegram from "../../assets/svg/telegram.svg";
import twitter from "../../assets/svg/twitter.svg";
import google from "../../assets/svg/google.svg";
import github from "../../assets/svg/github.svg";
import linkedin_large from "../../assets/svg/linkedin_large.svg";
import telegram_large from "../../assets/svg/telegram_large.svg";
import twitter_large from "../../assets/svg/twitter_large.svg";
import google_large from "../../assets/svg/google_large.svg";
import github_large from "../../assets/svg/github_large.svg";
import FooterLink from "./footerLink/FooterLink";
import Glitch from "../glitch/Glitch";

const Footer = () => {
  const links = [
    {
      id: 1,
      imgprop: linkedin,
      imgprop_large: linkedin_large,
      src: "https://linkedin.com/in/vladJ1",
    },
    {
      id: 2,
      imgprop: telegram,
      imgprop_large: telegram_large,
      src: "https://t.me/JUL1VER",
    },
    {
      id: 3,
      imgprop: twitter,
      imgprop_large: twitter_large,
      src: "https://twitter.com/jul1ver",
    },
    {
      id: 4,
      imgprop: google,
      imgprop_large: google_large,
      src: "mailto:jul1v3r@gmail.com",
    },
  ];

  const content = links.map((link) => (
    <FooterLink
      imgprop={link.imgprop}
      imgprop_large={link.imgprop_large}
      src={link.src}
      key={link.id}
    />
  ));

  return (
    <div className={s.footer}>
      <div className={s.media}>
        <p className={s.linksText}>Follow me in my social networks:</p>
        <div className={s.linksBlock}>{content}</div>
      </div>
      <div className={s.github}>
        <p className={s.linksText}>Take a look at my new projects:</p>
        <div className={s.githubBlock}>
          <FooterLink
            imgprop={github}
            imgprop_large={github_large}
            src="https://github.com/JUL1VER"
          />
          <a href="https://github.com/JUL1VER" className={s.githubText}>
            @<Glitch className={s.name}>jul1ver</Glitch> on github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
