import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import "./Hero.css";
//import Particles from "react-particles-js";
import {SiCodeforces, SiCodechef} from "react-icons/si";
class Hero extends Component {
  render() {
      /*
    const params = {
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "#000",
            blur: 1,
          },
        },
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 1200,
          },
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
    };
*/
    return (
      <section id="hero">
        <div className="hero">
          <div className="hero-container">
            <div className="text-title">
              <h1>S M Samnoon Abrar</h1>
              <p>
                I'm a computer science student passionate about problem solving and software engineering. I love to do competitive programming.
              </p>
            </div>
            <div className="social-icons">
              
            <a
                href="https://codeforces.com/profile/samnoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodeforces />
              </a>

              <a
                href="https://www.codechef.com/users/smabrar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodechef />
              </a>
              
              
              <a
                href="https://www.hackerrank.com/samnoonabrar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHackerrank />
              </a>
      
      
              <a
                href="https://github.com/samnoon1971"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/samnoon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
