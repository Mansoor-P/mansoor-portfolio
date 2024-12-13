import React from "react";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Jobsmicroservices",
    description:
      "A microservices-based project for job management, developed using Spring Boot and microservices architecture.",
    technologies: ["Spring Boot", "Microservices", "Java"],
    image: "https://via.placeholder.com/200", // Replace with an actual image if available
    link: "https://github.com/Mansoor-P/jobsmicroservices",
    demoLink: "https://example.com/demo2", // Replace with actual live demo link
  },
  {
    id: 2,
    title: "JobCompanyRatings-Monolithic",
    description:
      "A monolithic architecture-based job ratings platform, where users can view and rate different companies.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    image: "https://via.placeholder.com/200", // Replace with an actual image if available
    link: "https://github.com/Mansoor-P/JobCompanyRatings-Monolithic",
    demoLink: "https://example.com/demo3", // Replace with actual live demo link
  },
  {
    id: 3,
    title: "VRV-Security-s-Backend-Developer-Intern-Assignment",
    description:
      "A backend project that earned me an internship offer, focused on security and backend architecture.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    image: "https://via.placeholder.com/200", // Replace with an actual image if available
    link: "https://github.com/Mansoor-P/Mansoor_VRV-Security-s-Backend-Developer-Intern-Assignment",
    demoLink: "https://example.com/demo1", // Replace with actual live demo link
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce website with product catalog, cart, and payment gateway integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://via.placeholder.com/200", // Replace with an actual image if available
    link: "https://github.com/Mansoor-P/e-commerce-website",
    demoLink: "https://example.com/demo4", // Replace with actual live demo link
  },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projectItem}>
            <div className={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <a
                  href={project.link}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
