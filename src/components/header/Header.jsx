import React, { useState } from 'react';
import "./header.css";
import Darkmode from '../dark/Darkmode';

const Header = () => {
  window.addEventListener("scroll", function(){
    const header= this.document.querySelector(".header");
    if(this.scrollY >80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const[Toggle, showMenu] = useState(false);
  const[activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
        <nav className="nav container">
          <a href="#home" onClick={() => setActiveNav ('#home')} className="nav-logo">A.L.S</a>
          <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list grid">
              <li className="nav-item">
                <a href="#about" onClick={() => setActiveNav ('#about')} className = {activeNav ==='#about' ? 'nav-link active-link ' : 'nav-link'}>
                  <i className="uil uil-user nav-icon"></i>About
                </a>
              </li>
              <li className="nav-item">
                <a href="#project" onClick={() => setActiveNav ('#project')} className = {activeNav ==='#project' ? 'nav-link active-link ' : 'nav-link'}>
                  <i className="uil uil-scenery nav-icon"></i>Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" onClick={() => setActiveNav ('#contact')} className = {activeNav ==='#contact' ? 'nav-link active-link ' : 'nav-link'}>
                  <i className="uil uil-message nav-icon"></i>Contact
                </a>
              </li>
              <Darkmode />
            </ul>
              <i className="uil uil-times nav-close" onClick={() => showMenu (!Toggle)}></i>
          </div>
              <div className="nav-toggle" onClick={() => showMenu (!Toggle)}>
                <i className="bx bxs-home"></i>
              </div>
      </nav>
    </header>
  )
}

export default Header