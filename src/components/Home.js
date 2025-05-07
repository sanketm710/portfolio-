import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
  FaRegFileAlt,
  FaBriefcase,
  FaBolt,
  FaLink,
  FaDownload,
  FaUser,
  
} from "react-icons/fa";
import confetti from "canvas-confetti";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.style.overflow = "auto";

    const handleScroll = () => {
      const sections = ["home", "summary", "experience", "skills", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  const downloadCV = () => {
    // Replace with your actual CV download logic
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1b-1yoYW8Gf3ZsTx7Ohoxk-8BUboDONL7/view?usp=drive_link";
    link.download = "Sanket_Dhandhlya_CV.pdf";
    link.click();
  };
  // const fireConfetti = () => {
  //   confetti({
  //     particleCount: 100,
  //     spread: 700,
  //     origin: { x: 0.5, y: 0 },
  //   });
  // };
  // useEffect(() => {
  //   fireConfetti();
  //   const timeout = setTimeout(() => {
  //     fireConfetti();
  //   }, 1500);
  //   return () => clearTimeout(timeout);
  // }, []);

  // Confetti effect
  // const fireConfetti = () => {
  //   const count = 20;
  //   const defaults = {
  //     origin: {y:0.7 },
  //     colors: ["#3a86ff", "#a7c957", "#ff006e", "#8338ec"],
  //     particleCount: 100,
  //     spread: 70,
  //     startVelocity: 30,
  //     gravity: 0.5,
  //   };

  //   confetti({
  //     ...defaults,
  //     particleCount: count,
  //     angle: 60,
  //     spread: 55,
  //     scalar: 1.2,
  //     origin: { x: 0 },
  //   });

  //   confetti({
  //     ...defaults,
  //     particleCount: count,
  //     angle: 120,
  //     spread: 55,
  //     scalar: 1.2,
  //     origin: { x: 1 },
  //   });
  // };

  return (
    <section id="home" className="home-section">
      <div className="overlay" />
      <div className="content-wrapper">
        <header className="header">
          <span className="status-badge">  Open to work</span>
          {/* <button
            onClick={fireConfetti}
            className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-lg"
          >
            🎉 Hire Tyrone!
          </button> */}

          {/* <button
            className="theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button> */}
          <button className="download-btn" onClick={downloadCV}>
            <FaDownload /> Download CV
          </button>
        </header>

        <main className="main-content">
          <h2 className="profession">WEB DEVELOPER</h2>
          <h1 className="name">Sanket Dhandhlya</h1>

          <div className="contat-info">
            <div className="contat-item">
              <FaEnvelope className="contat-icon" />
              <span>sanketm710@gmail.com</span>
            </div>
            <div className="contat-item">
              <FaPhoneAlt className="contat-icon" />
              <span>+91 9913521777</span>
            </div>
            <div className="contat-item">
              <FaLinkedin className="contat-icon" />
              <a
                href="https://www.linkedin.com/in/sanket-dhandhlya-68baa9222/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/sanketm710
              </a>
            </div>
            <div className="contat-item">
              <FaMapMarkerAlt className="contat-icon" />
              <span>Ahmedabad, India</span>
            </div>
          </div>
        </main>

        <nav className="main-nav">
          <a
            href="#home"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          >
            <FaUser className="nav-icon" />
            <span>ghar</span>
          </a>

          <a
            href="#summary"
            className={`nav-link ${
              activeSection === "summary" ? "active" : ""
            }`}
          >
            <FaRegFileAlt className="nav-icon" />
            <span>Summary</span>
          </a>
          <a
            href="#experience"
            className={`nav-link ${
              activeSection === "experience" ? "active" : ""
            }`}
          >
            <FaBriefcase className="nav-icon" />
            <span>Experience</span>
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
          >
            <FaBolt className="nav-icon" />
            <span>Skills</span>
          </a>
          <a
            href="#contact"
            className={`nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            <FaLink className="nav-icon" />
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
