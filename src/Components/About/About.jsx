import React, { useEffect } from 'react';
import './About.css';
import mani from '../../assets/mani.jpeg';
import infinity from '../../assets/infity.png';
import python from '../../assets/Python Full-Stack.pdf';
import Oracle from '../../assets/Oracle Cloud.pdf';
import Aws from '../../assets/AWS Academy.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id='about' className='about' data-aos="fade-up">
      <div className="about-title" data-aos="zoom-in">
        <h1>About Me</h1>
        <img src={infinity} alt="infinity" />
      </div>

      <div className="about-section">
        <div className="about-left" data-aos="fade-right">
          <img src={mani} alt="Manikandan" />
        </div>

        <div className="about-right" data-aos="fade-left">
          <div className="about-para">
            <p>
              I am an aspiring Full Stack Developer with expertise in Python, JavaScript, SQL, React, and Flask. 
              I enjoy building responsive, user-friendly web applications that solve real-world problems.
            </p>
            <p>
              During my academic projects and internships, I have developed experience in web development, 
              database management, and AR-based projects, which strengthened my problem-solving and technical skills.
            </p>
            <p>
              I am passionate about continuous learning and leveraging technology to create impactful solutions 
              while collaborating effectively in team environments.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card" data-aos="flip-left">
              <h3>College</h3>
              <p>Sudharsan Engineering College</p>
              <p><b>B.Tech - Artificial Intelligence and Data Science</b></p>
              <p>CGPA: <span>7.62</span></p>
            </div>

            <div className="about-card" data-aos="flip-up">
              <h3>Experience</h3>
              <p>BY8LABS Ai private limited | Python Developer – Intern <br /> (6-month)</p>
              <p>InternPe | Web Development – Intern <br /> (1-month)</p>
            </div>

            <div className="about-card" data-aos="flip-right">
              <h3>Certificates</h3>
              <p>Python Full-Stack Development <a href={python} target="_blank" rel="noreferrer">certificate</a></p>
              <p>AWS Academy Graduate <a href={Aws} target="_blank" rel="noreferrer">certificate</a></p>
              <p>Oracle Cloud Computing <a href={Oracle} target="_blank" rel="noreferrer">certificate</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
