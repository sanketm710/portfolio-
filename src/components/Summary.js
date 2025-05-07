import React from "react";
import "./Home.css"; // Reusing styles
import { FaGraduationCap,FaCircle } from "react-icons/fa";


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

const Summary = () => (
  <section id="summary" className="summary-section">
    <div className="summary-content">
      <h1>Summary</h1>
      <p>
        Innovative and results-driven Frontend Developer with experience in
        developing and maintaining web applications using React.js. Strong
        creative and analytical skills with a detail-oriented approach. Team
        player dedicated to delivering high-quality software solutions and
        enhancing user experience.
      </p>
      <p>
        My passion lies in understanding how people interact with technology and
        crafting solutions that are both functional and aesthetically pleasing.
      </p>

      <div className="divider"></div>

      <h2>Driven by curiosity</h2>
      <p>
        I continuously explore new tools and methodologies to enhance my work.
        Whether working on web applications, mobile technologies, or design
        systems, I deliver high-quality results that push boundaries.
      </p>
      <div className="section">
        <h2
          className="section-title "
          style={{ color: " #a7c957", marginBottom: "50px" }}
        >
          <FaGraduationCap className="icon" /> EDUCATION
        </h2>
        <div className="section-content">
          {education.map((item) => (
            <div key={item.id} className="item ">
              <h3 className="item-title ">
                {" "}
                <FaCircle className="bullet-icon" />
                {item.title}
              </h3>
              <ul className="item-details  ">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Summary;
