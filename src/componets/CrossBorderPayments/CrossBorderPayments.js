import React from "react";
import styles from "./CrossBorderPayments.module.css";
import { crossBorderPayments, line2 } from "../../images";

const CrossBorderPayments = () => {
  return (
    <section className="container">
      {" "}
      <img src={line2} alt="#" className={styles.line} />
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Cross Border Payments</h3>
          <p className={styles.info}>
            Multi currency support Real-Time Exchange Rates Security and
            Compliance Efficiency and Transparency User-Friendly Interface
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={crossBorderPayments} alt="#" className={styles.img} />
        </div>
        <div className={styles.blur}></div>
      </div>{" "}
    </section>
  );
};

export default CrossBorderPayments;
