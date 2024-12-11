import React from "react";
import About from "./About";
import TechStack from "./TechStack";
import styles from "../styles/Home.module.css";

const Home = () => (
  <div className={styles.aboutAndTechStack}>
    <About />
    <TechStack />
  </div>
);

export default Home;
