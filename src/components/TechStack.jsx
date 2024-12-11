import React from "react";
import { FaJava, FaJsSquare, FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const TechStack = () => {
  const techCategories = [
    {
      category: "Language's",
      items: [
        { name: "Java", logo: <FaJava /> },
        { name: "JavaScript", logo: <FaJsSquare /> },
        { name: "Python", logo: <FaPython /> },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", logo: <FaReact /> },
        // { name: "Spring Boot", logo: "path-to-your-logo/spring-logo.png" }, // Keeping the custom logo for Spring Boot
        { name: "Node.js", logo: <FaNodeJs /> },
      ],
    },
    {
      category: "Databases",
      items: [
        // { name: "MySQL", logo: "path-to-your-logo/mysql-logo.png" }, // Keeping custom logos for MySQL
        // { name: "MongoDB", logo: "path-to-your-logo/mongodb-logo.png" },
        // { name: "PostgreSQL", logo: "path-to-your-logo/postgresql-logo.png" },
      ],
    },
    {
      category: "Cloud/Deployments",
      items: [
        { name: "AWS", logo: <FaAws /> },
        // { name: "Heroku", logo: "path-to-your-logo/heroku-logo.png" },
      ],
    },
    {
      category: "Developer Tools",
      items: [
        { name: "Git", logo: <FaGithub /> },
        { name: "Docker", logo: <FaDocker /> },
      ],
    },
  ];

  return (
    <>
      <h2 className={styles.heading}>Tech Stack</h2>

      <div className={styles.techStack}>
        <div className={styles.techCategories}>
          {techCategories.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryHeading}>{category.category}</h3>
              <div className={styles.logoGrid}>
                {category.items.map((item, i) => (
                  <div key={i} className={styles.logoItem}>
                    {typeof item.logo === "string" ? (
                      <img
                        src={item.logo}
                        alt={item.name}
                        className={styles.logo}
                      />
                    ) : (
                      <div className={styles.icon}>{item.logo} {item.name}</div> 
                    )}
                   
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
