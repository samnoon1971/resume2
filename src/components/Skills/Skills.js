import React from "react";
import "./Skills.css";

import {Bar} from "react-chartjs-2";
import {
    
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  
  FaJenkins,
  FaDocker,
 
} from "react-icons/fa";
import {
    SiCplusplus,
    SiMysql
} from "react-icons/si";

const language = {
  labels: ['C/C++', 'PHP', 'Javascript'],
  datasets: [
    {
      label: "Languages",
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 205, 86, 0.6)',

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
      <div className="heading"  data-aos="zoom-in" data-aos-delay="300">
        <h1>ABOUT ME</h1>
          <img src="../Images/ami.jpg" alt="S M Samnoon Abrar"></img>

        <p data-aos="zoom-in">

            As a software engineer with over 1 year of experience, I have a strong foundation in computer science principles and am proficient in a variety of programming languages including Javascript, PHP, and C++.
            <br/>
            I have experience working on both front-end and back-end development and am comfortable with full-stack development. I have a strong ability to troubleshoot and debug software and am able to work effectively in a team environment.        </p>
      </div>

      <div className="heading">
        <h1>MY SKILLS</h1>
      </div>

        <div className="skills-icons">
          <div className="skills-icons" data-aos="fade-up">
            <SiCplusplus className="icon" title="C++" />
            <FaPhp className="icon" title="PHP" />
            <SiMysql className="icon" title="MySQL" />

          </div>
            <div className="skills_icons" data-aos="fade-right">
            <FaJenkins className="icon" title="Jenkins" />
            <FaDocker className="icon" title="Docker" />
            </div>
            <div className="skills_icons" data-aos="fade-down">

            <FaHtml5 className="icon" title="HTML5" />
            <FaCss3 className="icon" title="CSS3" />
              <FaJs className="icon" title="JavaScript" />

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
                 animationEnabled: true,

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