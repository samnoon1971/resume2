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
        'rgba(54, 162, 235, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 205, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(54, 162, 135, 0.6)',
    ],
      borderWidth: 2,
      data: [100, 80, 90, 60, 70],
      maxBarThickness: 75
    }
  ]
}
const Skills = () => {
  var delayed;
  return (
    <section id="skills">
      <div className="heading">
        <h1>ABOUT ME</h1>
          <img src="../Images/ami.jpg" alt="S M Samnoon Abrar"></img>

        <p data-aos="zoom-in">
          I am a problem solver and quick learner. I love to do competitive programming. Currently I am pursuing BS. in CSE at Bangladesh Army International University of Science and Technology
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
        <h1>Language Proficiency</h1>
      </div>

        <div className="skills-icons" data-aos="fade-up">
          <Bar className
             data={language}
               width={600}
               height={300}
             options={{
               animation: {
                 onComplete: () => {
                   delayed = true;
                 },
                 delay: (context) => {
                   let delay = 0;
                   if (context.type === 'data' && context.mode === 'default' && !delayed) {
                     delay = context.dataIndex * 300 + context.datasetIndex * 100;
                   }
                   return delay;
                 },
               },
               scales: {
                 x: {
                   stacked: true,
                 },
                 y: {
                   stacked: true
                 }
               },
               title:{
                 display: true,
                 text: "Language Graph",
                 
               },
                 indexAxis: 'y',
                 responsive: true,
                 maintainAspectRatio: false,
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