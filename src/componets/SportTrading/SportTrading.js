import React from "react";
import styles from "./SportTrading.module.css";
import { line1, spotTrading } from "../../images";

const SportTrading = () => {
  return (
    <section className="container">
      <img src={line1} alt="#" className={styles.line} />
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.imgContainer}>
          <img src={spotTrading} alt="#" className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Spot Trading</h3>
          <p className={styles.info}>
            Real-Time Trading Market Liquidity Order Types Transparent Pricing
            Security Measures
          </p>
        </div>
        <div className={styles.blur}></div>
      </div>
    </section>
  );
};

export default SportTrading;
