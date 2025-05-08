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
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15 },
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
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="contact-section"
    >
      <motion.div className="contact-container">
        <motion.h2 variants={itemVariants}>
          Let's Build Something Awesome! <FaHeart className="heart-pulse" />
        </motion.h2>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="contact-form"
        >
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

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaperPlane className="paper-plane" /> Send with Love
          </motion.button>
        </motion.form>

        <motion.div variants={itemVariants} className="direct-contact">
          <h3>Prefer a direct approach?</h3>
          <div className="social-links">
            <motion.a
              href="https://www.linkedin.com/in/sanket-dhandhlya-68baa9222/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/sanketm710"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaGithub /> GitHub
            </motion.a>
            <motion.a
              href="mailto:sanketm710@gmail.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaEnvelope /> Email
            </motion.a>
            <motion.a href="tel:+919913521777" whileHover={{ y: -3 }}>
              <FaPhoneAlt /> Call Me
            </motion.a>
          </div>
          <motion.div
            className="divider"
            variants={itemVariants}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
