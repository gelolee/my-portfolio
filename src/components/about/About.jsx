import React from 'react'
import "./about.css";
import AboutImg from '../../assets/aboutme1.JPG'

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="about-container container grid">
            <img src={AboutImg} alt='' className='about-img' />
            <div className="about-data">
                <h2 className="about-section-title">About</h2>
                <p className="about-description">
                I’m a passionate Web Developer who loves bringing ideas to life through clean code, thoughtful design, and seamless user experiences. With hands-on experience in WordPress, Drupal, and Laravel, I’ve built and maintained websites that are not only functional but also engaging and performance-driven. Skilled in HTML, CSS, JavaScript, and PHP, I enjoy turning complex requirements into simple, effective digital solutions that help businesses stand out online.
                </p>
                <div>
                  <h2 className='about-section-title'>Tech Stacks</h2>
                  <div className='skills-title'>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>PHP</span>
                    <span>MySql</span>
                    <span>Wordpress</span>
                    <span>Drupal</span>
                    <span>Laravel</span>
                    <span>ReactJS</span>
                  </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default About