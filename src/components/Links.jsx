import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaCode } from "react-icons/fa"; // Font Awesome icons

const Links = () => (
  <>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <FaGithub />
    </a>
    <a href="mailto:yourmail@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
      <FaEnvelope />
    </a>
    <a href="https://yourcodeprofile.com" target="_blank" rel="noopener noreferrer" aria-label="Code">
      <FaCode />
    </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaTwitter />
    </a>
  </>
);

export default Links;
