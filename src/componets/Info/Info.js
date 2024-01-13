import React from "react";
import { BsArrowDown } from "react-icons/bs";

import styles from "./Info.module.css";
import { curve } from "../../images";
import { Link } from "react-scroll";

const Info = () => {
  return (
    <div className={[styles.wrapper, "container"].join(" ")}>
      <p className={styles.info}>
        In a rapidly evolving global landscape, Zarp emerges as the pioneer in
        revolutionizing the way we navigate cross-border transactions and
        embrace the world of cryptocurrencies. With a relentless focus on
        simplifying financial complexities, Zarp empowers individuals and
        businesses alike to effortlessly send and receive payments across
        borders, while also providing a comprehensive suite of crypto services
        that pave the way for the future of digital finance.
      </p>
      <p className={styles.info}>
        Say goodbye to cumbersome processes and unnecessary intermediaries. Zarp
        streamlines crossborder payments, offering swift, secure, and
        cost-effective solutions that transcend geographical boundaries. Our
        user-friendly platform ensures that your transactions are executed with
        speed and precision, minimizing friction and maximizing efficiency.
      </p>
      <p className={styles.info}>
        But that's not all - Zarp is your trusted guide into the world of
        cryptocurrencies. Whether you're a seasoned crypto enthusiast or a
        curious newcomer, our expertly crafted crypto services provide you with
        the tools and knowledge to navigate this exciting realm. From buying and
        selling cryptocurrencies to managing your digital assets.
      </p>

      <Link
        to="billPayments"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={styles.readMore}
      >
        <BsArrowDown className={styles.arrow} />
      </Link>
      <img src={curve} alt="#" className={styles.curve} />
    </div>
  );
};

export default Info;
