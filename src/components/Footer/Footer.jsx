import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Sreejith S S</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies and innovative solutions.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <div className="footer-nav">
              <button onClick={() => scrollToSection('hero')} className="footer-link">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="footer-link">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="footer-link">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">
                Contact
              </button>
            </div>
          </div>

          <div className="footer-social">
            <h4 className="footer-social-title">Connect</h4>
            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sreejithsree1480@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Sreejith S S. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={16} className="heart-icon" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;