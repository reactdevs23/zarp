import React from "react";
import styles from "./SecureVault.module.css";
import { line1, securityVault } from "../../images";

const SecureVault = () => {
  return (
    <section className="container">
      {" "}
      <img src={line1} alt="#" className={styles.line} />
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.imgContainer}>
          <img src={securityVault} alt="#" className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Secure Vault Storage Solutions</h3>
          <p className={styles.info}>
            Robust Security Measures Biometric Authentication Climate and
            Environmental Controls Insurance and Liability Coverage Audit Trails
            and Transparency
          </p>
        </div>
      </div>{" "}
    </section>
  );
};

export default SecureVault;
