import React from "react";
import styles from "../styles/Experience.module.css";

const experiences = [
  {
    title: "College Team Project - Hotel Management System",
    company: "University Project",
    duration: "September 2023 to December 2023",
    description:
      "Collaborated with a team of 4 members to design and develop a hotel management system using Java, Spring Boot, and MySQL. Led the backend development, implemented RESTful APIs for hotel booking, room management, and customer data. Utilized Spring Security for user authentication and role-based access control, ensuring secure access to various functionalities. Integrated MySQL for data persistence, and performed unit testing using JUnit to ensure high-quality code. This project improved my teamwork, project management, and problem-solving skills.",
  },
  {
    title: "Personal Project - Blog Posting Web Application",
    company: "Self-Project",
    duration: "January 2024 to Present",
    description:
      "Developed a full-stack blog posting web application to showcase my skills in software development. Built the frontend with React.js and Tailwind CSS to create a responsive and user-friendly UI. For the backend, I used Spring Boot to build a RESTful API, with MySQL for storing articles, user data, and comments. Integrated Elasticsearch for efficient and fast article search functionality. Implemented user authentication and authorization using JWT for secure login. Deployed the application on AWS using EC2 for hosting and RDS for database management. This project has enhanced my skills in full-stack development, cloud deployment, and handling complex user interactions.",
  },
];

const Experience = () => (
  <div className={styles.experience}>
    <h2 className={styles.heading}>Experience</h2>
    <ul className={styles.experienceList}>
      {experiences.map((exp, index) => (
        <li key={index} className={styles.experienceItem}>
          <h3 className={styles.jobTitle}>{exp.title}</h3>
          <p className={styles.companyAndDuration}>
            {exp.company ? `${exp.company} - ` : "Self-Project - "}
            <span className={styles.duration}>{exp.duration}</span>
          </p>
          <p className={styles.description}>{exp.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;
