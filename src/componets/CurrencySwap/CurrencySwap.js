import React from "react";
import styles from "./CurrencySwap.module.css";
import { currencySwap, line2 } from "../../images";

const CurrencySwap = () => {
  return (
    <section className="container">
      {" "}
      <img src={line2} alt="#" className={styles.line} />
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Currency Swap/Bridge</h3>
          <p className={styles.info}>
            Currency Conversion Real-Time Exchange Rates Liquidity Provision Low
            Transaction Costs Multi-Chain Support
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src={currencySwap} alt="#" className={styles.img} />
        </div>
        <div className={styles.blur}></div>
      </div>{" "}
    </section>
  );
};

export default CurrencySwap;
