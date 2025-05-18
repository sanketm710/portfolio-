import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import confetti from "canvas-confetti";
import {
  FaPaperPlane,
  FaHeart,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Home.css";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, rotateX: -45 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

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
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#3a86ff", "#a7c957", "#ff006e"],
        });

        // Add floating heart animation
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;
        heart.style.fontSize = "2rem";
        heart.style.zIndex = "9999";
        document.body.appendChild(heart);

        heart.animate(
          [
            { transform: "translateY(0) scale(1)", opacity: 1 },
            { transform: "translateY(-100px) scale(0.5)", opacity: 0 },
          ],
          {
            duration: 1500,
            easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }
        );

        setTimeout(() => heart.remove(), 1500);
        e.target.reset();
      }
    } catch (error) {
      alert("Message failed to send - but my heart still beats for you! 💔");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="contact-section"
    >
      <motion.div className="contact-container">
        {/* Floating Title */}
        <motion.h2 variants={itemVariants} className="floating-title">
          Let's Create Magic Together <FaHeart className="heart-pulse" />
        </motion.h2>

        {/* Holographic Form */}
        <motion.form
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="contact-form holographic"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="✨ New Message from Sanket's Portfolio!"
          />

          <motion.div className="form-group" variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="floating-input"
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="floating-input"
            />
          </motion.div>

          <motion.div className="form-group" variants={itemVariants}>
            <textarea
              name="message"
              placeholder="Your Brilliant Message..."
              rows="5"
              required
              className="floating-input"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(45deg, #3a86ff, #ff006e)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="paper-plane" />
            <span className="btn-text">Launch Message</span>
            <div className="btn-glow"></div>
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div variants={containerVariants} className="direct-contact">
          <motion.h3 variants={itemVariants}>Direct Connect Portal</motion.h3>

          <motion.div className="social-links" variants={containerVariants}>
            {[
              {
                icon: <FaLinkedin />,
                text: "LinkedIn",
                href: "https://linkedin.com/in/yourprofile",
              },
              {
                icon: <FaGithub />,
                text: "GitHub",
                href: "https://github.com/yourprofile",
              },
              {
                icon: <FaEnvelope />,
                text: "Email",
                href: "mailto:sanketm710@gmail.com",
              },
              {
                icon: <FaPhoneAlt />,
                text: "Call Me",
                href: "tel:+919913521777",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.6 },
                }}
                className="social-card"
              >
                {link.icon}
                <span>{link.text}</span>
                <div className="link-glow"></div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
