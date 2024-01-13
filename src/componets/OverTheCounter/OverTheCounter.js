import React from "react";
import styles from "./OverTheCounter.module.css";
import { circle, line2, overTheCounter } from "../../images";

const OverTheCounter = () => {
  return (
    <section className="container">
      {" "}
      <img src={line2} alt="#" className={styles.line} />
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Over - The - Counter Trading (OTC)</h3>
          <p className={styles.info}>
            Privacy and Anonymity Trade Customization Diverse Asset Support
            Direct Peer-to-Peer Transactions Compliance and Regulation Adherence
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={overTheCounter} alt="#" className={styles.img} />
        </div>
        <img src={circle} alt="#" className={styles.circleImg} />
        <div className={styles.blur}></div>
      </div>{" "}
    </section>
  );
};

export default OverTheCounter;
