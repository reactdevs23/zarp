import React from "react";
import styles from "./HeroSection.module.css";
import Info from "../Info/Info";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.mainWrapper}>
        <div className={[styles.wrapper, "container"].join(" ")}>
          <h1 className={styles.title}>
            Coming <br /> Soon!
          </h1>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Under Construction</button>
          </div>
          <div className={styles.blur}></div>{" "}
          <div className={styles.blur2}></div>
        </div>
      </div>{" "}
      <Info />
    </section>
  );
};

export default HeroSection;
