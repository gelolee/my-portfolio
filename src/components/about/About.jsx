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
                Dynamic and creative Front End Developer / WordPress Developer with over 6 months of experience designing, developing, and maintaining user-friendly and responsive websites. Proficient in HTML, CSS, JavaScript, and PHP, with a strong focus on WordPress development. Adept at translating client requirements into functional, aesthetically pleasing digital solutions. Passionate about clean code, web performance, and user experience (UX).
                </p>
            </div>
        </div>
    </section>
    
  )
}

export default About