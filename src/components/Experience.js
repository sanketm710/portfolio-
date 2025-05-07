import React from "react";
import "./Home.css";
import { FaCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-content summary-content">
        <h1>Work Experience</h1>

        {/* Experience Item 1 */}
        <div className="experience-item">
          <div className="experience-header">
            <h2>
              <FaCircle className="bullet-icon" /> STL - Sterlite Technologies
              Limited
            </h2>
            <span className="duration">01/2024 – 04/2024</span>
          </div>
          <h3>Web Developer</h3>

          <p className="description">
            Developed dynamic and responsive web applications using React.js,
            enhancing user experience and optimizing interface performance.
          </p>

          <div className="responsibilities">
            <h4>Key Responsibilities:</h4>
            <ul>
              <li>
                <FaCircle className="bullet-icon" /> Implemented responsive
                designs with HTML5, CSS3, and JavaScript, ensuring cross-browser
                compatibility and mobile responsiveness.
              </li>
              <li>
                <FaCircle className="bullet-icon" /> Conducted thorough code
                reviews and debugging sessions to maintain high code quality and
                efficiently resolve issues.
              </li>
              <li>
                <FaCircle className="bullet-icon" /> Collaborated with designers
                and backend developers to create seamless, high performing web
                applications.
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Experience Item 2 */}
        <div className="experience-item">
          <div className="experience-header">
            <h2>
              <FaCircle className="bullet-icon" /> EPITOME Corporation Pvt Ltd
            </h2>
            <span className="duration"> 06/2024 – 09/2024</span>
          </div>
          <h3>Web Developer</h3>

          <p className="description">
            Web Page Development: Experienced in developing web pages using
            React and basic PHP.
          </p>
          <div className="responsibilities">
            <h4>Key Responsibilities:</h4>
            <ul>
              <li>
                <FaCircle className="bullet-icon" /> Live Streaming & Event
                Management: Skilled in webcasting, live streaming, stream
                editing, and handling virtual meetings.
              </li>
              <li>
                <FaCircle className="bullet-icon" /> Client & Team Management:
                Manage clients and mentor interns in event management.
              </li>
              <li>
                <FaCircle className="bullet-icon" /> Client & Team Management:
                Manage clients and mentor interns in event management.
              </li>
            </ul>
          </div>

          {/* Add responsibilities and projects for this role */}
        </div>
        <div className="divider"></div>

        {/* Experience Item 2 */}
        <div className="experience-item">
          <div className="experience-header">
            <h2>
              <FaCircle className="bullet-icon" /> Skyline Security IT Solution
            </h2>
            <span className="duration"> 10/2024 – 03/2025</span>
          </div>
          <h3>Fullstack Developer</h3>

          <p className="description">
            ~ Software Security & Network Security : Expertise in packet tracing
            for analyzing and securing network traffic.
          </p>
          <div className="responsibilities">
            <h4>Key Responsibilities:</h4>
            <ul>
              <li>
                <FaCircle className="bullet-icon" />
                Application Debugging & Redevelopment: Skilled in debugging and
                redeveloping applications using React.js and Node.js.
              </li>
              <li>
                <FaCircle className="bullet-icon" /> Software Support & SQL:
                Proficient in providing software support and utilizing basic SQL
                for troubleshooting and data management.
              </li>
            </ul>
          </div>

          {/* Add responsibilities and projects for this role */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
