import React from "react";
import { NavLink } from "react-router-dom"; 
import Links from "./Links";
import styles from "../styles/Header.module.css";
import mansoorPic from "../assets/mansoor-pic.jpg";

const Header = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/experience", label: "Experience / Hackathons" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <div className={styles.profile}>
            <img
              src={mansoorPic}
              alt="Mansoor Pathikonda"
              className={styles.profileImage}
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.title}>Mansoor Pathikonda</h1>
              <h2 className={styles.subtitle}>
                Software Developer | Full-Stack Enthusiast
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <Links />
        </div>
      </header>

      <nav className={styles.navbar}>
        <div className={styles.navLinksContainer}>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className={styles.resumeLinkContainer}>
          <a
            href="https://drive.google.com/file/d/1i-pBBeMFUqZ9IoVfN2CgMKWLAXrUEH9G/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            Resume
          </a>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Header;
