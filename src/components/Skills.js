import React from "react";
import "./Home.css";
import { FaCertificate,FaCircle

 } from "react-icons/fa";
import {
  SiC,

  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiBootstrap,
  SiDjango,
  SiGit,
  SiJson,
} from "react-icons/si";

const Skills = () => {
  const skillsData = {
    languages: ["C", "Java", "Python", "JavaScript", "HTML", "CSS"],
    frameworks: ["React.js", "Node.js", "Bootstrap", "Django"],
    technologies: ["Git", "Webpack", "JSON", "REST APIs"],
  };

  const techIcons = [
    <SiC />,
    // <SiJava />,
    <SiPython />,
    <SiJavascript />,
    <SiHtml5 />,
    <SiCss3 />,
    <SiReact />,
    <SiNodedotjs />,
    <SiBootstrap />,
    <SiDjango />,
    <SiGit />,
    <SiJson />,
  ];
  //  
   // Certificates data
   const certificates = [
     {
       id: 1,
       title: "C for Everyone: Programming Fundamentals | Coursera",
       issuer: "University of California, Santa Cruz",
       link: "https://www.coursera.org/account/accomplishments/verify/KWQ4CJC4EJHQ",
     },
     {
       id: 2,
       title: "Data Structures | Coursera",
       issuer: "  University of California, San Diego",
       link: "https://www.coursera.org/account/accomplishments/verify/U4TSM2EU4Q4T",
     },
     {
       id: 3,
       title: "HTML, CSS and JavaScript for Web Developers | Coursera",
       issuer: "Johns Hopkins University",
       link: "https://www.coursera.org/account/accomplishments/verify/L5EUMKM4YM6E",
     },
     {
       id: 4,
       title: " Exploratory Data Analysis for Machine Learning | Coursera",
       issuer: "IBM University",
       link: "https://www.coursera.org/account/accomplishments/verify/MWAMPSQP2LUB",
     },
     {
       id: 5,
       title: "  Algorithmic Thinking (part 1)  | Coursera",
       issuer: "Rice University",
       link: "https://www.coursera.org/account/accomplishments/verify/7PNUQJLH76RS",
     },
     {
       id: 6,
       title: "  Algorithmic Thinking (part 2)  | Coursera",
       issuer: "Rice University",
       link: "https://www.coursera.org/account/accomplishments/verify/59FA7KTX2UJL",
     },
     {
       id: 7,
       title: "Machine Learning with Python | Coursera",
       issuer: "IBM University",
       link: "https://www.coursera.org/account/accomplishments/verify/MGXJAJLG4MDV",
     },
     {
       id: 8,
       title:
         " Building Generative AI-Powered Applications with Python | Coursera",
       issuer: "IBM University",
       link: "https://www.coursera.org/account/accomplishments/verify/D6ICNXDXR7RA",
     },
     {
       id: 9,
       title: "  Certified Secure Web Application Engineer (CSWAE) ",
       issuer: "Cyber Flare",
       link: "https://drive.google.com/file/d/1AkEzjRpnZBKOeZh6FDVRJo5HiwXV3Hbk/view?usp=drive_link",
     },

     // Add more certificates as needed
   ];

  return (
    <section id="skills" className="skills-section ">
      <div className="skills-container ">
        <h1 className="">Technical Skills</h1>

        <div className="skills-grid">
          <div className="skill-category">
            <h2>Programming Languages</h2>
            <div className="skill-list">
              {skillsData.languages.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h2>Frameworks & Libraries</h2>
            <div className="skill-list">
              {skillsData.frameworks.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h2>Tools & Technologies</h2>
            <div className="skill-list">
              {skillsData.technologies.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="tech-marquee">
          <div className="tech-track">
            {techIcons.map((icon, index) => (
              <span key={index} className="tech-icon">
                {icon}
              </span>
            ))}
            {techIcons.map((icon, index) => (
              <span key={`copy-${index}`} className="tech-icon">
                {icon}
              </span>
            ))}
          </div>
        </div>
        <div className="divider"></div>

        {/* Certificates Section */}
        <div className="section">
          <h2 className="section-title" style={{ color: " #a7c957" }}>
            <FaCertificate className="icon" /> CERTIFICATES
          </h2>
          <div className="section-content">
            {certificates.map((cert) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                <h3 className="item-title ">
                  <FaCircle className="bullet-icon" />
                  {cert.title}
                </h3>
                <p className="item-subtitle">{cert.issuer}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
