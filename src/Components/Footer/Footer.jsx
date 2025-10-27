import React, { useEffect } from 'react';
import './Footer.css';
import location from '../../assets/location.png';
import mail from '../../assets/gmail.png';
import phone from '../../assets/phone.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="footer" id="footer" data-aos="fade-up">
      <div className="footer-container">

        <div className="footer-left" data-aos="fade-right">
          <h2 className="footer-name">Manikandan M</h2>
          <p className="footer-about">
            Aspiring Full Stack Developer skilled in Python, JavaScript, React, and Flask. 
            Passionate about building responsive web apps and solving real-world problems 
            through technology and teamwork.
          </p>
        </div>

        <div className="footer-middle" data-aos="zoom-in">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Project">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right" data-aos="fade-left">
          <h3>Contact Info</h3>
          <div className="fotter-contact1">
          <ul className="footer-contact">
            <li><img src={location} alt="location" /> Pudukkottai, Tamil Nadu, India</li>
            <li><img src={mail} alt="email" /> tech4manikandan@gmail.com</li>
            <li><img src={phone} alt="phone" /> +91 63835 73652</li>
          </ul>
          </div>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/m-manikandan-tech4mani/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/tech4mani" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      <hr data-aos="fade-in" />

      <div className="footer-bottom" data-aos="fade-up">
        <p>© 2025 <span>Manikandan M</span> | Portfolio Website | Built using React.js</p>
      </div>
    </footer>
  );
};

export default Footer;
