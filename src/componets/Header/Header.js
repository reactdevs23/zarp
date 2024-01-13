import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { logo } from "../../images";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={[styles.headerContainer, isScrolled && styles.headerBg].join(
        " "
      )}
    >
      <div
        className={[styles.header].join(" ")}
        style={{ border: isScrolled && "none" }}
      >
        <img src={logo} alt="#" className={styles.logo} />
        <button className={styles.contactUs}>CONTACT US</button>
      </div>
    </header>
  );
};

export default Header;
