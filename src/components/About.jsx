import React from "react";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <h2 className={styles.heading}>About Me</h2>

      <div className={styles.about}>
        <p className={styles.description}>
        Hey, I'm Mansoor Pathikonda 👋. I am a passionate Software Developer 👨‍💻 who loves to build innovative
          solutions 🌐.
        </p>
        <p className={styles.description}>
          Currently, I'm diving deep into full-stack development, working with
          technologies like Java, Spring Boot, React, and microservices, while
          enhancing my skills in software engineering.
        </p>
        <p className={styles.description}>
          As a fresher in the tech industry, I’m eager to apply my knowledge in
          a dynamic environment and make meaningful contributions to impactful
          projects.
        </p>
        <p className={styles.description}>
          I’m actively seeking Full-Time Opportunities to grow and collaborate
          with talented professionals in the world of software development. 🚀
        </p>
      </div>
    </>
  );
};

export default About;
