import React from "react";
import styles from "./BillPayments.module.css";
import { billPayments } from "../../images";

const BillPayments = () => {
  return (
    <section className="container" id="billPayments">
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.imgContainer}>
          <img src={billPayments} alt="#" className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Bill Payments</h3>
          <p className={styles.info}>
            Mobile top-up Cable subscription Electricity Insurance Giftcards
            Lottery & Betting Flight booking
          </p>
        </div>
      </div>
    </section>
  );
};

export default BillPayments;
