// import React from "react";
// import "./Home.css";
// import { FaCertificate,FaCircle

//  } from "react-icons/fa";
// import {
//   SiC,

//   SiPython,
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiReact,
//   SiNodedotjs,
//   SiBootstrap,
//   SiDjango,
//   SiGit,
//   SiJson,
// } from "react-icons/si";

// const Skills = () => {
//   const skillsData = {
//     languages: ["C", "Java", "Python", "JavaScript", "HTML", "CSS"],
//     frameworks: ["React.js", "Node.js", "Bootstrap", "Django"],
//     technologies: ["Git", "Webpack", "JSON", "REST APIs"],
//   };

//   const techIcons = [
//     <SiC />,
//     // <SiJava />,
//     <SiPython />,
//     <SiJavascript />,
//     <SiHtml5 />,
//     <SiCss3 />,
//     <SiReact />,
//     <SiNodedotjs />,
//     <SiBootstrap />,
//     <SiDjango />,
//     <SiGit />,
//     <SiJson />,
//   ];
//   //  
//    // Certificates data
//    const certificates = [
//      {
//        id: 1,
//        title: "C for Everyone: Programming Fundamentals | Coursera",
//        issuer: "University of California, Santa Cruz",
//        link: "https://www.coursera.org/account/accomplishments/verify/KWQ4CJC4EJHQ",
//      },
//      {
//        id: 2,
//        title: "Data Structures | Coursera",
//        issuer: "  University of California, San Diego",
//        link: "https://www.coursera.org/account/accomplishments/verify/U4TSM2EU4Q4T",
//      },
//      {
//        id: 3,
//        title: "HTML, CSS and JavaScript for Web Developers | Coursera",
//        issuer: "Johns Hopkins University",
//        link: "https://www.coursera.org/account/accomplishments/verify/L5EUMKM4YM6E",
//      },
//      {
//        id: 4,
//        title: " Exploratory Data Analysis for Machine Learning | Coursera",
//        issuer: "IBM University",
//        link: "https://www.coursera.org/account/accomplishments/verify/MWAMPSQP2LUB",
//      },
//      {
//        id: 5,
//        title: "  Algorithmic Thinking (part 1)  | Coursera",
//        issuer: "Rice University",
//        link: "https://www.coursera.org/account/accomplishments/verify/7PNUQJLH76RS",
//      },
//      {
//        id: 6,
//        title: "  Algorithmic Thinking (part 2)  | Coursera",
//        issuer: "Rice University",
//        link: "https://www.coursera.org/account/accomplishments/verify/59FA7KTX2UJL",
//      },
//      {
//        id: 7,
//        title: "Machine Learning with Python | Coursera",
//        issuer: "IBM University",
//        link: "https://www.coursera.org/account/accomplishments/verify/MGXJAJLG4MDV",
//      },
//      {
//        id: 8,
//        title:
//          " Building Generative AI-Powered Applications with Python | Coursera",
//        issuer: "IBM University",
//        link: "https://www.coursera.org/account/accomplishments/verify/D6ICNXDXR7RA",
//      },
//      {
//        id: 9,
//        title: "Back-End Development with .NET | Coursera",
//        issuer: "Microsoft",
//        link: "https://www.coursera.org/account/accomplishments/verify/2YIDT5NXNAFQ",
//      },
//      {
//        id: 10,
//        title: "  Certified Secure Web Application Engineer (CSWAE) ",
//        issuer: "Cyber Flare",
//        link: "https://drive.google.com/file/d/1AkEzjRpnZBKOeZh6FDVRJo5HiwXV3Hbk/view?usp=drive_link",
//      },

//      // Add more certificates as needed
//    ];

//   return (
//     <section id="skills" className="skills-section ">
//       <div className="skills-container ">
//         <h1 className="">Technical Skills</h1>

//         <div className="skills-grid">
//           <div className="skill-category">
//             <h2>Programming Languages</h2>
//             <div className="skill-list">
//               {skillsData.languages.map((skill, index) => (
//                 <div key={index} className="skill-item">
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="skill-category">
//             <h2>Frameworks & Libraries</h2>
//             <div className="skill-list">
//               {skillsData.frameworks.map((skill, index) => (
//                 <div key={index} className="skill-item">
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="skill-category">
//             <h2>Tools & Technologies</h2>
//             <div className="skill-list">
//               {skillsData.technologies.map((skill, index) => (
//                 <div key={index} className="skill-item">
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="divider"></div>

//         <div className="tech-marquee">
//           <div className="tech-track">
//             {techIcons.map((icon, index) => (
//               <span key={index} className="tech-icon">
//                 {icon}
//               </span>
//             ))}
//             {techIcons.map((icon, index) => (
//               <span key={`copy-${index}`} className="tech-icon">
//                 {icon}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div className="divider"></div>

//         {/* Certificates Section */}
//         <div className="section">
//           <h2 className="section-title" style={{ color: " #a7c957" }}>
//             <FaCertificate className="icon" /> CERTIFICATES
//           </h2>
//           <div className="section-content">
//             {certificates.map((cert) => (
//               <a
//                 key={cert.id}
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="certificate-link"
//               >
//                 <h3 className="item-title ">
//                   <FaCircle className="bullet-icon" />
//                   {cert.title}
//                 </h3>
//                 <p className="item-subtitle">{cert.issuer}</p>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// import React, { useEffect } from "react";
// import { FaCertificate, FaCircle } from "react-icons/fa";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   SiC,
//   SiPython,
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiReact,
//   SiNodedotjs,
//   SiBootstrap,
//   SiDjango,
//   SiGit,
//   SiJson,
// } from "react-icons/si";
// import "./Home.css";

// const Skills = () => {
//   // Skills data
//   const skillsData = {
//     languages: ["C", "Java", "Python", "JavaScript", "HTML", "CSS"],
//     frameworks: ["React.js", "Node.js", "Bootstrap", "Django"],
//     technologies: ["Git", "Webpack", "JSON", "REST APIs"],
//   };

//   // Tech icons
//   const techIcons = [
//     <SiC key="c" />,
//     <SiPython key="python" />,
//     <SiJavascript key="js" />,
//     <SiHtml5 key="html" />,
//     <SiCss3 key="css" />,
//     <SiReact key="react" />,
//     <SiNodedotjs key="node" />,
//     <SiBootstrap key="bootstrap" />,
//     <SiDjango key="django" />,
//     <SiGit key="git" />,
//     <SiJson key="json" />,
//   ];

//   // Certificates data
//   const certificates = [
//     {
//       id: 1,
//       title: "C for Everyone: Programming Fundamentals | Coursera",
//       issuer: "University of California, Santa Cruz",
//       link: "https://www.coursera.org/account/accomplishments/verify/KWQ4CJC4EJHQ",
//     },
//     {
//       id: 2,
//       title: "Data Structures | Coursera",
//       issuer: "University of California, San Diego",
//       link: "https://www.coursera.org/account/accomplishments/verify/U4TSM2EU4Q4T",
//     },
//     // Add other certificates here...
//   ];

//   // Animation controls
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: false,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const slideLeft = {
//     hidden: { x: 100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 120, damping: 20 },
//     },
//   };

//   const slideRight = {
//     hidden: { x: -100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 120, damping: 20 },
//     },
//   };

//   const scaleUp = {
//     hidden: { scale: 0.5, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { type: "spring", bounce: 0.4 },
//     },
//   };

//   return (
//     <motion.section
//       id="skills"
//       className="skills-section"
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={containerVariants}
//     >
//       <div className="skills-container">
//         <motion.h1 variants={slideRight}>Technical Skills</motion.h1>

//         <motion.div className="skills-grid" variants={containerVariants}>
//           <motion.div className="skill-category" variants={slideRight}>
//             <h2>Programming Languages</h2>
//             <div className="skill-list">
//               {skillsData.languages.map((skill, index) => (
//                 <motion.div
//                   key={index}
//                   className="skill-item"
//                   variants={slideLeft}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {skill}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div className="skill-category" variants={slideLeft}>
//             <h2>Frameworks & Libraries</h2>
//             <div className="skill-list">
//               {skillsData.frameworks.map((skill, index) => (
//                 <motion.div
//                   key={index}
//                   className="skill-item"
//                   variants={slideRight}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {skill}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div className="skill-category" variants={slideRight}>
//             <h2>Tools & Technologies</h2>
//             <div className="skill-list">
//               {skillsData.technologies.map((skill, index) => (
//                 <motion.div
//                   key={index}
//                   className="skill-item"
//                   variants={slideLeft}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {skill}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="divider"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 1 }}
//         />

//         <motion.div className="tech-marquee" variants={scaleUp}>
//           <div className="tech-track">
//             {[...techIcons, ...techIcons].map((icon, index) => (
//               <motion.span
//                 key={index}
//                 className="tech-icon"
//                 whileHover={{ scale: 1.2 }}
//               >
//                 {icon}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           className="divider"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         />

//         <motion.div className="section" variants={containerVariants}>
//           <motion.h2
//             className="section-title"
//             style={{ color: "#a7c957" }}
//             variants={slideRight}
//           >
//             <FaCertificate className="icon" /> CERTIFICATES
//           </motion.h2>
//           <div className="section-content">
//             {certificates.map((cert, index) => (
//               <motion.a
//                 key={cert.id}
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="certificate-link"
//                 variants={index % 2 === 0 ? slideRight : slideLeft}
//                 whileHover={{ x: 5 }}
//               >
//                 <h3 className="item-title">
//                   <FaCircle className="bullet-icon" />
//                   {cert.title}
//                 </h3>
//                 <p className="item-subtitle">{cert.issuer}</p>
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Skills;

// import React, { useEffect } from "react";
// import { FaCertificate, FaCircle, FaExternalLinkAlt } from "react-icons/fa";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import "./Home.css";

// const Skills = () => {
//   // ... (keep your existing skillsData and techIcons code)

//   const skillsData = {
//     languages: ["C", "Java", "Python", "JavaScript", "HTML", "CSS"],
//     frameworks: ["React.js", "Node.js", "Bootstrap", "Django"],
//     technologies: ["Git", "Webpack", "JSON", "REST APIs"],
//   };

//   // Enhanced Certificates Data with Icons
//   const certificates = [
//     {
//       id: 1,
//       title: "C Programming Fundamentals",
//       issuer: "UC Santa Cruz",
//       platform: "Coursera",
//       icon: "👨‍💻",
//       link: "https://example.com/cert1",
//       color: "linear-gradient(135deg, #3a86ff, #8338ec)",
//     },
//     {
//       id: 2,
//       title: "Data Structures",
//       issuer: "UC San Diego",
//       platform: "Coursera",
//       icon: "📊",
//       link: "https://example.com/cert2",
//       color: "linear-gradient(135deg, #ff006e, #8338ec)",
//     },
//     // Add more certificates...
//   ];

//   // Animation variants for certificates
//   const certificateVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: (i) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: i * 0.15,
//         type: "spring",
//         stiffness: 100,
//       },
//     }),
//     hover: {
//       y: -10,
//       scale: 1.03,
//       boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//     },
//   };

//   const flipVariants = {
//     hover: {
//       rotateY: 180,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section id="skills" className="skills-section">
//       {/* ... (keep your existing skills sections) */}

//       {/* Enhanced Certificates Section */}
//       <div className="certificates-container">
//         <motion.h2
//           className="section-title"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <FaCertificate className="icon" /> CERTIFICATES
//         </motion.h2>

//         <div className="certificates-grid">
//           {certificates.map((cert, i) => (
//             <motion.a
//               key={cert.id}
//               href={cert.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="certificate-card"
//               variants={certificateVariants}
//               initial="hidden"
//               whileInView="visible"
//               whileHover="hover"
//               custom={i}
//               viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//             >
//               <motion.div
//                 className="certificate-front"
//                 style={{ background: cert.color }}
//                 variants={flipVariants}
//               >
//                 <div className="cert-icon">{cert.icon}</div>
//                 <h3>{cert.title}</h3>
//                 <div className="cert-meta">
//                   <span>{cert.issuer}</span>
//                   <span>{cert.platform}</span>
//                 </div>
//               </motion.div>

//               <div className="certificate-back">
//                 <FaExternalLinkAlt className="link-icon" />
//                 <p>View Certificate</p>
//                 <div className="glow-effect"></div>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import { FaCertificate, FaCircle, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
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
import "./Home.css";

const Skills = () => {
  // Skills Data
  const skillsData = {
    languages: ["C", "Java", "Python", "JavaScript", "HTML", "CSS"],
    frameworks: ["React.js", "Node.js", "Bootstrap", "Django"],
    technologies: ["Git", "Webpack", "JSON", "REST APIs"],
  };

  // Tech Icons
  const techIcons = [
    <SiC key="c" />,
    <SiPython key="python" />,
    <SiJavascript key="js" />,
    <SiHtml5 key="html" />,
    <SiCss3 key="css" />,
    <SiReact key="react" />,
    <SiNodedotjs key="node" />,
    <SiBootstrap key="bootstrap" />,
    <SiDjango key="django" />,
    <SiGit key="git" />,
    <SiJson key="json" />,
  ];

  // Enhanced Certificates Data
  // Inside your Skills component (replace your certificates array with this)
  // Updated certificates array with all certificates including the new one
  const certificates = [
    {
      id: 1,
      title: "C Programming Fundamentals",
      issuer: "UC Santa Cruz",
      platform: "Coursera",
      icon: "👨‍💻",
      link: "https://www.coursera.org/account/accomplishments/verify/KWQ4CJC4EJHQ",
      color: "linear-gradient(135deg, #3a86ff, #8338ec)",
    },
    {
      id: 2,
      title: "HTML, CSS & JavaScript",
      issuer: "Johns Hopkins University",
      platform: "Coursera",
      icon: "🛠️",
      link: "https://www.coursera.org/account/accomplishments/verify/L5EUMKM4YM6E",
      color: "linear-gradient(135deg, #ff595e, #ffca3a)",
    },
    {
      id: 3,
      title: "Data Structures",
      issuer: "UC San Diego",
      platform: "Coursera",
      icon: "📊",
      link: "https://www.coursera.org/account/accomplishments/verify/U4TSM2EU4Q4T",
      color: "linear-gradient(135deg, #ff006e, #8338ec)",
    },
    {
      id: 4,
      title: "Web Development",
      issuer: "Johns Hopkins University",
      platform: "Coursera",
      icon: "🌐",
      link: "https://www.coursera.org/account/accomplishments/verify/L5EUMKM4YM6E",
      color: "linear-gradient(135deg, #a7c957, #2a9d8f)",
    },
    {
      id: 5,
      title: "Algorithmic Thinking (Part 1)",
      issuer: "Rice University",
      platform: "Coursera",
      icon: "🧠",
      link: "https://www.coursera.org/account/accomplishments/verify/7PNUQJLH76RS",
      color: "linear-gradient(135deg, #00c9ff, #92fe9d)",
    },
    {
      id: 6,
      title: "Algorithmic Thinking (Part 2)",
      issuer: "Rice University",
      platform: "Coursera",
      icon: "🧩",
      link: "https://www.coursera.org/account/accomplishments/verify/59FA7KTX2UJL",
      color: "linear-gradient(135deg, #654ea3, #eaafc8)",
    },
    {
      id: 7,
      title: "Machine Learning with Python",
      issuer: "IBM",
      platform: "Coursera",
      icon: "🤖",
      link: "https://www.coursera.org/account/accomplishments/verify/MGXJAJLG4MDV",
      color: "linear-gradient(135deg, #36d1dc, #5b86e5",
    },
    {
      id: 8,
      title: "Generative AI with Python",
      issuer: "IBM",
      platform: "Coursera",
      icon: "🖥️",
      link: "https://www.coursera.org/account/accomplishments/verify/D6ICNXDXR7RA",
      color: "linear-gradient(135deg, #577590, #43aa8b)",
    },
    {
      id: 9,
      title: "Back-End Development with .NET",
      issuer: "Microsoft",
      platform: "Coursera",
      icon: "💻",
      link: "https://www.coursera.org/account/accomplishments/verify/2YIDT5NXNAFQ",
      color: "linear-gradient(135deg, #7209b7,rgb(238, 67, 204))",
    },
    {
      id: 10,
      title: "Secure Web Application Engineer",
      issuer: "Cyber Flare",
      platform: "Certification",
      icon: "🔒",
      link: "https://drive.google.com/file/d/1AkEzjRpnZBKOeZh6FDVRJo5HiwXV3Hbk/view",
      color: "linear-gradient(135deg, #ffbe0b,rgb(7, 129, 251))",
    },
  ];
  // const certificates = [
  //   // Lightest blue (like morning sky)
  //   {
  //     id: 1,
  //     title: "C Programming Fundamentals",
  //     color: "linear-gradient(135deg, #e0f2fe, #bae6fd, #7dd3fc)",
  //     icon: "👨‍💻",
  //   },
  //   // Slightly deeper blue
  //   {
  //     id: 2,
  //     title: "HTML, CSS & JavaScript",
  //     color: "linear-gradient(135deg, #bae6fd, #7dd3fc, #38bdf8)",
  //     icon: "🛠️",
  //   },
  //   // Ocean blue
  //   {
  //     id: 3,
  //     title: "Data Structures",
  //     color: "linear-gradient(135deg, #7dd3fc, #38bdf8, #0ea5e9)",
  //     icon: "📊",
  //   },
  //   // Royal blue
  //   {
  //     id: 4,
  //     title: "Web Development",
  //     color: "linear-gradient(135deg, #38bdf8, #0ea5e9, #0284c7)",
  //     icon: "🌐",
  //   },
  //   // Deep blue
  //   {
  //     id: 5,
  //     title: "Algorithmic Thinking (Part 1)",
  //     color: "linear-gradient(135deg, #0ea5e9, #0284c7, #0369a1)",
  //     icon: "🧠",
  //   },
  //   // Navy blue
  //   {
  //     id: 6,
  //     title: "Algorithmic Thinking (Part 2)",
  //     color: "linear-gradient(135deg, #0284c7, #0369a1, #075985)",
  //     icon: "🧩",
  //   },
  //   // Midnight blue
  //   {
  //     id: 7,
  //     title: "Machine Learning with Python",
  //     color: "linear-gradient(135deg, #0369a1, #075985, #0c4a6e)",
  //     icon: "🤖",
  //   },
  //   // Deep ocean
  //   {
  //     id: 8,
  //     title: "Generative AI with Python",
  //     color: "linear-gradient(135deg, #075985, #0c4a6e, #1e40af)",
  //     icon: "🖥️",
  //   },
  //   // Dark sapphire
  //   {
  //     id: 9,
  //     title: "Back-End Development with .NET",
  //     color: "linear-gradient(135deg, #0c4a6e, #1e40af, #1e3a8a)",
  //     icon: "💻",
  //   },
  //   // Almost black-blue
  //   {
  //     id: 10,
  //     title: "Secure Web Application Engineer",
  //     color: "linear-gradient(135deg, #1e40af, #1e3a8a, #172554)",
  //     icon: "🔒",
  //   },
  // ];
  // const certificates = [
  //   // Blue Series (Technical)
  //   {
  //     id: 1,
  //     title: "C Programming Fundamentals",
  //     color: "linear-gradient(135deg, #e0f2fe, #93c5fd, #3b82f6)",
  //     icon: "👨‍💻",
  //     issuer: "UC Santa Cruz",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/KWQ4CJC4EJHQ",
  //   },
  //   {
  //     id: 2,
  //     title: "Data Structures",
  //     color: "linear-gradient(135deg, #bfdbfe, #7ea5f8, #2563eb)",
  //     icon: "📊",
  //     issuer: "UC San Diego",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/L5EUMKM4YM6E",
  //   },

  //   // Green Series (Web)
  //   {
  //     id: 3,
  //     title: "HTML, CSS & JavaScript",
  //     color: "linear-gradient(135deg, #dcfce7, #86efac, #22c55e)",
  //     icon: "🛠️",
  //     issuer: "Johns Hopkins University",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/L5EUMKM4YM6E",
  //   },
  //   {
  //     id: 4,
  //     title: "Web Development",
  //     color: "linear-gradient(135deg, #bbf7d0, #4ade80, #16a34a)",
  //     icon: "🌐",
  //     issuer: "Johns Hopkins University",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/L5EUMKM4YM6E",
  //   },

  //   // Purple Series (Algorithms)
  //   {
  //     id: 5,
  //     title: "Algorithmic Thinking (Part 1)",
  //     color: "linear-gradient(135deg, #f3e8ff, #d8b4fe, #9333ea)",
  //     icon: "🧠",
  //     issuer: "Rice University",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/7PNUQJLH76RS",
  //   },
  //   {
  //     id: 6,
  //     title: "Algorithmic Thinking (Part 2)",
  //     color: "linear-gradient(135deg, #e9d5ff, #c084fc, #7e22ce)",
  //     icon: "🧩",
  //     issuer: "Rice University",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/59FA7KTX2UJL",
  //   },

  //   // Teal Series (AI/ML)
  //   {
  //     id: 7,
  //     title: "Machine Learning with Python",
  //     color: "linear-gradient(135deg, #ccfbf1, #5eead4, #0d9488)",
  //     icon: "🤖",
  //     issuer: "IBM",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/MGXJAJLG4MDV",
  //   },
  //   {
  //     id: 8,
  //     title: "Generative AI with Python",
  //     color: "linear-gradient(135deg, #99f6e4, #2dd4bf, #0f766e)",
  //     icon: "🖥️",
  //     issuer: "IBM",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/D6ICNXDXR7RA",
  //   },

  //   // Professional Dark (Backend)
  //   {
  //     id: 9,
  //     title: "Back-End Development with .NET",
  //     color: "linear-gradient(135deg, #fee2e2, #fca5a5, #ef4444)",
  //     icon: "📟",
  //     issuer: "Microsoft",
  //     platform: "Coursera",
  //     link: "https://www.coursera.org/account/accomplishments/verify/2YIDT5NXNAFQ",
  //   },

  //   // Accent Color (Security)
  //   {
  //     id: 10,
  //     title: "Secure Web Application Engineer",
  //     color: "linear-gradient(135deg, #fca5a5, #f87171, #ef4464)",
  //     icon: "🔒",
  //     issuer: "Cyber Flare",
  //     platform: "Certification",
  //     link: "https://drive.google.com/file/d/1AkEzjRpnZBKOeZh6FDVRJo5HiwXV3Hbk/view",
  //   },
  // ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const slideLeft = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", damping: 15 } },
  };

  const slideRight = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", damping: 15 } },
  };

  const certificateVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
    hover: { y: -10, scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" },
  };

  const flipVariants = {
    hover: { rotateY: 180, transition: { duration: 0.6 } },
  };
  const handleCertificateClick = (e) => {
    // Create confetti effect
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = "#3a86ff";
    confetti.style.borderRadius = "50%";
    confetti.style.left = `${e.clientX}px`;
    confetti.style.top = `${e.clientY}px`;
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";
    document.body.appendChild(confetti);

    // Animate
    const angle = Math.random() * Math.PI * 2;
    const velocity = 5 + Math.random() * 5;
    const x = Math.cos(angle) * velocity;
    const y = Math.sin(angle) * velocity;

    confetti.animate(
      [
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${x}px, ${y}px)`, opacity: 0 },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.3, 0, 0.7, 1)",
      }
    );

    // Remove after animation
    setTimeout(() => confetti.remove(), 1000);
  };

  return (
    <section id="skills" className="skills-section ">
      <div className="skills-container">
        {/* Technical Skills Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h1>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="skill-category" variants={slideRight}>
            <h2>Programming Languages</h2>
            <div className="skill-list">
              {skillsData.languages.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={slideLeft}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skill-category" variants={slideLeft}>
            <h2>Frameworks & Libraries</h2>
            <div className="skill-list">
              {skillsData.frameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={slideRight}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="skill-category" variants={slideRight}>
            <h2>Tools & Technologies</h2>
            <div className="skill-list">
              {skillsData.technologies.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={slideLeft}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Tech Icons Marquee */}
        <motion.div
          className="tech-marquee"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="tech-track">
            {[...techIcons, ...techIcons].map((icon, index) => (
              <motion.span
                key={index}
                className="tech-icon"
                whileHover={{ scale: 1.2 }}
              >
                {icon}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Enhanced Certificates Section */}
        <div className="certificates-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaCertificate className="icon" /> CERTIFICATES
          </motion.h2>

          <div className="certificates-grid">
            {certificates.map((cert, i) => (
              <motion.a
                onClick={handleCertificateClick}
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-card"
                variants={certificateVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={i}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              >
                <motion.div
                  className="certificate-front"
                  style={{ background: cert.color }}
                  // variants={flipVariants}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <h3>{cert.title}</h3>
                  <div className="cert-meta">
                    <span>{cert.issuer}</span>
                    <span>{cert.platform}</span>
                  </div>
                </motion.div>
                <div className="sparkle-container">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="sparkle"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [10, 100, 10],
                        x: Math.random() * 1000 - 500,
                        y: Math.random() * 1000 - 500,
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                      }}
                    />
                  ))}
                </div>

                <div className="certificate-back">
                  <FaExternalLinkAlt className="link-icon" />
                  <p>View Certificate</p>
                  <motion.div
                    className="secret-message"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <span>"You're amazing!" 💘</span>
                  </motion.div>
                  <div className="glow-effect"></div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;