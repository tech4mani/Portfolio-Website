import React, { useState, useEffect } from 'react';
import './Navbar.css';
import infity from '../../assets/infity.png';
import menu_open from '../../assets/menu.png';
import x from '../../assets/x.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('navbar-animate');
  }, []);

  return (
    <div className='navbar'>
      <h3>Manikandan M</h3>


      {!mobileMenuOpen && (
        <img src={menu_open} onClick={toggleMenu} alt="menu" className='nav-mob-open' />
      )}

 
      <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <img src={x} onClick={toggleMenu} alt="close" className="nav-mob-close" />
        <li><a className='anchor-link' href='#home'><p onClick={() => { setMenu("home"); setMobileMenuOpen(false); }}>Home</p></a>{menu === "home" && <img src={infity} alt='' />}</li>
        <li><a className='anchor-link' href='#about'><p onClick={() => { setMenu("About"); setMobileMenuOpen(false); }}>About Me</p></a>{menu === "About" && <img src={infity} alt='' />}</li>
        <li><a className='anchor-link' href='#Skills'><p onClick={() => { setMenu("Skills"); setMobileMenuOpen(false); }}>Skills</p></a>{menu === "Skills" && <img src={infity} alt='' />}</li>
        <li><a className='anchor-link' href='#Project'><p onClick={() => { setMenu("Project"); setMobileMenuOpen(false); }}>Project</p></a>{menu === "Project" && <img src={infity} alt='' />}</li>
        <li><a className='anchor-link' href='#Contact'><p onClick={() => { setMenu("Contact"); setMobileMenuOpen(false); }}>Contact</p></a>{menu === "Contact" && <img src={infity} alt='' />}</li>
      </ul>

      <div className="nav-connect">
        <a className='anchor-link' href='#Contact'>Connect with me</a>
      </div>
    </div>
  )
}

export default Navbar;
