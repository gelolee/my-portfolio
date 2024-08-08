import React from 'react'
import "./about.css";
import AboutImg from '../../assets/aboutme1.JPG'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-container container grid">
            <img src={AboutImg} alt='' className='about-img' />
            <div className="about-data">
                <p className="about-description">
                Hello, I'm Angelo, a passionate and creative web developer ready to embark on an exciting journey in the world of technology. As a recent graduate with a degree in Bachelor of Science in Computer Engineering, I am enthusiastic about harnessing the power of code to build innovative and user-friendly web experiences.
                </p>
            </div>
        </div>
    </section>
    
  )
}

export default About