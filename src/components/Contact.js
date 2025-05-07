import React from "react";

import confetti from "canvas-confetti";
import "./Home.css";import {
  FaPaperPlane,
  FaHeart,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sanketm710@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        // 🎊 CONFETTI EXPLOSION! 🎊
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#3a86ff", "#a7c957", "#ff006e"],
        });
        alert("Message sent! You're amazing! 💌");
        e.target.reset();
      }
    } catch (error) {
      alert(
        "Oops! My heart skipped a beat—please try again or email me directly at sanketm710@gmail.com"
      );
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>
          Let's Build Something Awesome! <FaHeart color="#ff1493" />
        </h2>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Message from Sanket's Portfolio!"
          />

          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Brilliant Message..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <FaPaperPlane /> Send with Love
          </button>
        </form>

        <div className="direct-contact">
          <h3>Prefer a direct approach?</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/sanket-dhandhlya-68baa9222/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/sanketm710"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="mailto:sanketm710@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope /> Email
            </a>
            <a href="tel:+919913521777">
              <FaPhoneAlt /> Call Me
            </a>
        <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhcfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
