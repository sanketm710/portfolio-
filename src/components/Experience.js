// import React from "react";
// import "./Home.css";
// import { FaCircle } from "react-icons/fa";

// const Experience = () => {
//   return (
//     <section id="experience" className="experience-section">
//       <div className="experience-content summary-content">
//         <h1>Work Experience</h1>

//         {/* Experience Item 1 */}
//         <div className="experience-item">
//           <div className="experience-header">
//             <h2>
//               <FaCircle className="bullet-icon" /> STL - Sterlite Technologies
//               Limited
//             </h2>
//             <span className="duration">01/2024 – 04/2024</span>
//           </div>
//           <h3>Web Developer</h3>

//           <p className="description">
//             Developed dynamic and responsive web applications using React.js,
//             enhancing user experience and optimizing interface performance.
//           </p>

//           <div className="responsibilities">
//             <h4>Key Responsibilities:</h4>
//             <ul>
//               <li>
//                 <FaCircle className="bullet-icon" /> Implemented responsive
//                 designs with HTML5, CSS3, and JavaScript, ensuring cross-browser
//                 compatibility and mobile responsiveness.
//               </li>
//               <li>
//                 <FaCircle className="bullet-icon" /> Conducted thorough code
//                 reviews and debugging sessions to maintain high code quality and
//                 efficiently resolve issues.
//               </li>
//               <li>
//                 <FaCircle className="bullet-icon" /> Collaborated with designers
//                 and backend developers to create seamless, high performing web
//                 applications.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="divider"></div>

//         {/* Experience Item 2 */}
//         <div className="experience-item">
//           <div className="experience-header">
//             <h2>
//               <FaCircle className="bullet-icon" /> EPITOME Corporation Pvt Ltd
//             </h2>
//             <span className="duration"> 06/2024 – 09/2024</span>
//           </div>
//           <h3>Web Developer</h3>

//           <p className="description">
//             Web Page Development: Experienced in developing web pages using
//             React and basic PHP.
//           </p>
//           <div className="responsibilities">
//             <h4>Key Responsibilities:</h4>
//             <ul>
//               <li>
//                 <FaCircle className="bullet-icon" /> Live Streaming & Event
//                 Management: Skilled in webcasting, live streaming, stream
//                 editing, and handling virtual meetings.
//               </li>
//               <li>
//                 <FaCircle className="bullet-icon" /> Client & Team Management:
//                 Manage clients and mentor interns in event management.
//               </li>
//               <li>
//                 <FaCircle className="bullet-icon" /> Client & Team Management:
//                 Manage clients and mentor interns in event management.
//               </li>
//             </ul>
//           </div>

//           {/* Add responsibilities and projects for this role */}
//         </div>
//         <div className="divider"></div>

//         {/* Experience Item 2 */}
//         <div className="experience-item">
//           <div className="experience-header">
//             <h2>
//               <FaCircle className="bullet-icon" /> Skyline Security IT Solution
//             </h2>
//             <span className="duration"> 10/2024 – 03/2025</span>
//           </div>
//           <h3>Fullstack Developer</h3>

//           <p className="description">
//             ~ Software Security & Network Security : Expertise in packet tracing
//             for analyzing and securing network traffic.
//           </p>
//           <div className="responsibilities">
//             <h4>Key Responsibilities:</h4>
//             <ul>
//               <li>
//                 <FaCircle className="bullet-icon" />
//                 Application Debugging & Redevelopment: Skilled in debugging and
//                 redeveloping applications using React.js and Node.js.
//               </li>
//               <li>
//                 <FaCircle className="bullet-icon" /> Software Support & SQL:
//                 Proficient in providing software support and utilizing basic SQL
//                 for troubleshooting and data management.
//               </li>
//             </ul>
//           </div>

//           {/* Add responsibilities and projects for this role */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React, { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Home.css";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const rightItemVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  const ParticleBackground = () => (
  <div className="particles">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="particle"
        initial={{ 
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: 0
        }}
        animate={{
          x: [null, Math.random() * 100],
          y: [null, Math.random() * 100],
          opacity: [0, 0.3, 0],
          transition: {
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />
    ))}
  </div>
);
const useScrollAnimation = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.querySelectorAll(".experience-item").forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("in-view");
        }, i * 200);
      });
    }
  }, [inView]);

  return ref;
};

  return (
    <motion.section
      id="experience"
      className="experience-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <ParticleBackground />
      <div className="experience-content  summary-content">
        <motion.h1 variants={itemVariants} className="experience-title">
          Work Experience
        </motion.h1>

        {/* Experience Item 1 */}
        <motion.div
          className="experience-item"
          variants={itemVariants}
          whileHover={{
            
            boxShadow: "0 10px 30px rgba(58, 134, 255, 0.2)",
            transform: "translateY(-5px)",
          }}
        >
          <motion.div
            className="experience-header"
            variants={rightItemVariants}
          >
            <h2>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
              >
                {/* <FaCircle className="bullet-icon" /> */}
              </motion.span>
              STL - Sterlite Technologies Limited
            </h2>
            <motion.span className="duration" variants={rightItemVariants}>
              01/2024 – 04/2024
            </motion.span>
          </motion.div>

          <motion.h3 variants={itemVariants}>Web Developer</motion.h3>

          <motion.p className="description" variants={itemVariants}>
            ~ Developed dynamic and responsive web applications using React.js,
            enhancing user experience and optimizing interface performance.
          </motion.p>

          <motion.div className="responsibilities" variants={containerVariants}>
            <motion.h4 variants={itemVariants}>Key Responsibilities:</motion.h4>
            <ul>
              <motion.li variants={rightItemVariants}>
                <FaCircle className="bullet-icon" /> Implemented responsive
                designs with HTML5, CSS3, and JavaScript.
              </motion.li>
              <motion.li variants={rightItemVariants}>
                <FaCircle className="bullet-icon" /> Conducted thorough code
                reviews and debugging sessions.
              </motion.li>
              <motion.li variants={rightItemVariants} >
                <FaCircle className="bullet-icon" /> Collaborated with designers
                and backend developers.
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Experience Item 2 */}
        <motion.div
          className="experience-item"
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 10px 30px rgba(58, 134, 255, 0.2)",
            transform: "translateY(-5px)",
          }}
        >
          <motion.div
            className="experience-header"
            variants={rightItemVariants}
          >
            <h2>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
              >
                {/* <FaCircle className="bullet-icon" /> */}
              </motion.span>
              EPITOME Corporation Pvt Ltd
            </h2>
            <motion.span className="duration" variants={rightItemVariants}>
              06/2024 – 09/2024
            </motion.span>
          </motion.div>

          <motion.h3 variants={itemVariants}>Web Developer</motion.h3>

          <motion.p className="description" variants={itemVariants}>
            ~ Web Page Development: Experienced in developing web pages using
            React and basic PHP.
          </motion.p>

          <motion.div className="responsibilities" variants={containerVariants}>
            <motion.h4 variants={itemVariants}>Key Responsibilities:</motion.h4>
            <ul>
              <motion.li variants={rightItemVariants} >
                <FaCircle className="bullet-icon" /> Live Streaming & Event
                Management.
              </motion.li>
              <motion.li variants={rightItemVariants} >
                <FaCircle className="bullet-icon" /> Client & Team Management.
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Experience Item 3 */}
        <motion.div
          className="experience-item"
          variants={itemVariants}
          whileHover={{
            boxShadow: "0 10px 30px rgba(58, 134, 255, 0.2)",
            transform: "translateY(-5px)",
          }}
        >
          <motion.div
            className="experience-header"
            variants={rightItemVariants}
          >
            <h2>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
              >
                {/* <FaCircle className="bullet-icon" /> */}
              </motion.span>
              Skyline Security IT Solution
            </h2>
            <motion.span className="duration" variants={rightItemVariants}>
              10/2024 – 03/2025
            </motion.span>
          </motion.div>

          <motion.h3 variants={itemVariants}>Fullstack Developer</motion.h3>

          <motion.p className="description" variants={itemVariants}>
            ~ Software Security & Network Security : Expertise in packet tracing
            for analyzing and securing network traffic.
          </motion.p>

          <motion.div className="responsibilities" variants={containerVariants}>
            <motion.h4 variants={itemVariants}>Key Responsibilities:</motion.h4>
            <ul>
              <motion.li variants={rightItemVariants} >
                <FaCircle className="bullet-icon" />
                Application Debugging & Redevelopment.
              </motion.li>
              <motion.li variants={rightItemVariants} >
                <FaCircle className="bullet-icon" /> Software Support & SQL.
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;