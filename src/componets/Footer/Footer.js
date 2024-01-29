import React from "react";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill, RiTwitterXLine } from "react-icons/ri";

import styles from "./Footer.module.css";
import { circle, logo, star } from "../../images";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={[styles.footer, "container"].join(" ")}>
        <img src={logo} alt="#" className={styles.logo} />
        <div className={styles.socialContainer}>
          <p className={styles.reachUs}>Reach us</p>
          <div className={styles.socials}>
            <a
              href="mailto:info@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={styles.iconContainer}
            >
              {" "}
              <MdEmail className={styles.icon} />
            </a>{" "}
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconContainer}
            >
              <RiInstagramFill className={styles.icon} />
            </a>{" "}
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={styles.iconContainer}
            >
              <RiTwitterXLine className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <img src={circle} alt="#" className={styles.circleImg} />
      <img src={star} alt="#" className={styles.starImg} />
    </footer>
  );
};

export default Footer;
