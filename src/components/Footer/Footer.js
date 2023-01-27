import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
      <p className="text-title">S M Samnoon Abrar &copy; 2023</p>
      <div className="code-link">
        <a
          href="https://github.com/samnoon1971"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          &nbsp; My Github
        </a>
      </div>
    </div>
  );
}

export default Footer;
