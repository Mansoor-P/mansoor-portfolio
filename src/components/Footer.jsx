import React from "react";
import styles from "../styles/Footer.module.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>Developed by <span className={styles.name}>Mansoor Pathikonda</span></p>
      </div>
    </footer>
  );
};

export default Footer;
