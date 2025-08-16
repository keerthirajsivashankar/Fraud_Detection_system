import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">FraudShield 🚀</div>

      {/* Center Navigation */}
      <div className="footer-center">
        <a href="#awareness">Awareness</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#form">Check Tool</a>
        <a href="#results">Results</a>
        <a href="#cases">Cases</a>
      </div>

      {/* Right Socials */}
      <div className="footer-right">
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        © 2025 FraudShield. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
