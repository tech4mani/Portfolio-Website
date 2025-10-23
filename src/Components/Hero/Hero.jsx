import React, { useEffect, useState } from 'react';
import './Hero.css';
import mani from '../../assets/mani.jpeg';
import pdf from '../../assets/Manikandan.M_resume..pdf';

const Hero = () => {
  const titles = ["Full Stack Developer", "Python Developer", "Frontend Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='hero'>
      <img src={mani} alt="Manikandan" className="hero-img" />

      <h1 className="hero-title">
        I'm <span className="highlight">Manikandan M</span>
      </h1>

      <h2 className="hero-subtitle">
        I'm a <span key={currentTitle} className="typing">{titles[currentTitle]}</span>
      </h2>

      <p>
        I am an aspiring Full Stack Developer skilled in Python, JavaScript, SQL, React, and Flask.
        I create responsive, user-friendly web applications and AR-based projects, focusing on clean code and practical solutions.
        Passionate about learning new technologies and building projects that make a difference.
      </p>


      <div className="hero-action">
        <div className="hero-connect">
          <a className='anchor-link' href='#Contact'>Connect With Me</a>
        </div>
        <div className="hero-resume">
          <a href={pdf} target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
