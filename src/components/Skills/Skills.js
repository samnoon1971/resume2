import React from "react";
import "./Skills.css";

import {Bar} from "react-chartjs-2";
import {
    
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  
  FaReact,
  FaNode,
  FaBootstrap,
  FaSass,
 
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiCplusplus,
    SiMysql
} from "react-icons/si";
import {
    FcAndroidOs,
} from "react-icons/fc";
import { DiMongodb } from "react-icons/di";

const language = {
  labels: ['C/C++', 'Java', 'Javascript', 'Python', 'SQL'],
  datasets: [
    {
      label: "Languages",
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
      borderWidth: 2,
      data: [80, 80, 70, 40, 60],
      maxBarThickness: 200
    }
  ]
}
const Skills = () => {
  return (
    <section id="skills">
      <div className="heading">
        <h1>ABOUT ME</h1>

        <img src="../Images/ami.jpg" alt="S M Samnoon Abrar"/>

        <p data-aos="zoom-in">
          I am a problem solver and quick learner. Currently I am pursuing BS. in CSE at Bangladesh Army International University of Science and Technology
        </p>
      </div>

      <div className="heading">
        <h1>MY SKILLS</h1>
      </div>

        <div className="skills-icons">
          <div className="skills-icons" data-aos="fade-up">
            <SiCplusplus className="icon" title="C++" />
            <FaJava className="icon" title="Java" />
            <FcAndroidOs className="icon" title="Android" />
            <FaJs className="icon" title="JavaScript" />
            <SiMysql className="icon" title="MySQL" />

          </div>
            <div className="skills_icons" data-aos="fade-right">
            <FaReact className="icon" title="React.js" />
            <FaNode className="icon" title="Node.js" />
            <DiMongodb className="icon" title="MongoDB" />
            </div>
            <div className="skills_icons" data-aos="fade-down">

            <FaHtml5 className="icon" title="HTML5" />
            <FaCss3 className="icon" title="CSS3" />
            <FaBootstrap className="icon" title="BootStrap" />
            <FaSass className="icon" title="SASS" />
            <SiTailwindcss className="icon" title="TailwindCSS" />

          </div>

        </div>
       
      <div className="heading">
        <h1>Skill Graph</h1>
      </div>

        <div className="skills-icons" data-aos="fade-up">
           <Bar
             data={language}
             options={{
               title:{
                 display: true,
                 text: "Language Graph",
                 
               },
               legend: {
                 display: true,
                 position: 'right'
               }
             }
             }
           />

        </div>
    </section>
  );
};

export default Skills;