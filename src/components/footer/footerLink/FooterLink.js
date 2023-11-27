import s from "./footerLink.module.css";

import React from "react";
import useIsDesktop from "../../../hooks/useIsDesktop";

const FooterLink = (props) => {
  const { imgprop, imgprop_large, src } = props;

  const isDesktop = useIsDesktop();

  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {isDesktop ? (
        <div
          style={{
            WebkitMask: `url("${imgprop_large}") no-repeat center`,
            WebkitMaskSize: "cover",
            maskSize: "cover",
            mask: `url("${imgprop_large}") no-repeat center`,
          }}
          alt="linkIcon"
          className={s.logos}
        />
      ) : (
        <div
          style={{
            WebkitMask: `url("${imgprop}") no-repeat center`,
            WebkitMaskSize: "cover",
            MaskSize: "cover",
            mask: `url("${imgprop}") no-repeat center`,
          }}
          alt="linkIcon"
          className={s.logos}
        />
      )}
    </a>
  );
};

export default FooterLink;
