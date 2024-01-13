import React from "react";
import styles from "./PaymentGateWay.module.css";
import { line1, paymentGateWay, star } from "../../images";

const PaymentGateWay = () => {
  return (
    <section className="container">
      <img src={line1} alt="#" className={styles.line} />
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.imgContainer}>
          <img src={paymentGateWay} alt="#" className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Payment Gateway</h3>
          <p className={styles.info}>
            Secure Transactions Payment Method Diversity Integration
            Capabilities Real-Time Processing Scalability and Reliability
          </p>
        </div>
        <img src={star} alt="#" className={styles.starImg} />
      </div>{" "}
    </section>
  );
};

export default PaymentGateWay;
