// import React from "react";
// import "./Home.css"; // Reusing styles
// import { FaGraduationCap,FaCircle } from "react-icons/fa";


// const education = [
//   {
//     id: 1,
//     title: "Computer Science and Engineering Bachelor's | LJ UNIVERSITY",
//     details: [
//       "Relevant Coursework: Web Development, Data Structures, Algorithms, Database Systems",
//       "11/2021 – 06/2025 | Ahmedabad, Gujarat",
//     ],
//   },
//   {
//     id: 2,
//     title: "Degree in H.S.C | Nilkanth Vidhyapith",
//     details: ["Percentage: 89.5%", "2019 – 2021 | Bhavnagar, Gujarat"],
//   },
//   {
//     id: 3,
//     title: "Degree in S.S.C | Nilkanth Vidhyapith",
//     details: ["Percentage: 88.5%", "2019 | Bhavnagar, Gujarat"],
//   },
// ];
import React, { useEffect } from "react";
import "./Home.css";
import { FaGraduationCap, FaCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import confetti from "canvas-confetti";

const Summary = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // Gentle welcome confetti
      // confetti({
      //   particleCount: 30,
      //   spread: 70,
      //   origin: { y: 0.6 },
      //   colors: ["#3a86ff", "#a7c957"],
      // });
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const education = [
    {
    id: 1,
    title: "Computer Science and Engineering Bachelor's | LJ UNIVERSITY",
    details: [
      "Relevant Coursework: Web Development, Data Structures, Algorithms, Database Systems",
      "11/2021 – 06/2025 | Ahmedabad, Gujarat",
    ],
  },
  {
    id: 2,
    title: "Degree in H.S.C | Nilkanth Vidhyapith",
    details: ["Percentage: 89.5%", "2019 – 2021 | Bhavnagar, Gujarat"],
  },
  {
    id: 3,
    title: "Degree in S.S.C | Nilkanth Vidhyapith",
    details: ["Percentage: 88.5%", "2019 | Bhavnagar, Gujarat"],
  },
  ];

  // const celebrate = () => {
  //   confetti({
  //     particleCount: 100,
  //     spread: 70,
  //     origin: { y: 0.7 },
  //     colors: ["#3a86ff", "#a7c957", "#ff006e"],
  //   });
  // };

  return (
    <motion.section
      id="summary"
      className="summary-section"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div
        className="summary-content"
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Title with shine effect */}
        <motion.h1
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 10px rgba(167, 201, 87, 0.5)",
          }}
          // onClick={celebrate}
        >
          Summary
        </motion.h1>

        {/* Content with elegant transitions */}
        <motion.div variants={containerVariants}>
          <motion.p variants={itemVariants}>
            Innovative and results-driven Frontend Developer with experience in
            developing and maintaining web applications using React.js. Strong
            creative and analytical skills with a detail-oriented approach. Team
            player dedicated to delivering high-quality software solutions and
            enhancing user experience.
          </motion.p>

          <motion.p variants={itemVariants}>
            My passion lies in understanding how people interact with technology
            and crafting solutions that are both functional and aesthetically
            pleasing.
          </motion.p>
        </motion.div>

        <motion.h2 variants={itemVariants}>Driven by curiosity</motion.h2>
        <motion.p variants={itemVariants}>
          I continuously explore new tools and methodologies to enhance my work.
          Whether working on web applications, mobile technologies, or design
          systems, I deliver high-quality results that push boundaries.
        </motion.p>

        {/* Education section with delightful interactions */}
        <motion.div variants={containerVariants}>
          <motion.h2
            className="section-title"
            style={{ color: "#a7c957" }}
            variants={itemVariants}
            // whileHover={{ scale: 1.03 }}
          >
            <FaGraduationCap className="icon" /> EDUCATION
          </motion.h2>

          <motion.div className="section-content">
            {education.map((item) => (
              <motion.div
                key={item.id}
                className="education-card"
                variants={itemVariants}
                whileHover={{
                  // y: -5,
                  boxShadow: "0 10px 20px rgba(58, 134, 255, 0.2)",
                }}
              >
                <h3 className="item-title">
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
                  {item.title}
                </h3>
                <ul className="item-details">
                  {item.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      whileHover={{
                        // x: 10,
                        color: "#a7c957",
                      }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> <motion.div
          className="divider"
          variants={itemVariants}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
     
    </motion.section>
  );
};

export default Summary;