import React from 'react'
import CV from'../../assets/MyCV.pdf'

const Data = () => {
  return (
        <div className="home-data">
            <h1 className="home-title">Angelo Lee Salenga</h1>
            <h2 className="home-sub ">Front-End Developer</h2>
            <p className="home-desc ">I'm a Web Developer based on Pampanga, and I'm passionate and dedicated to my work.</p>
            <a download="" href={CV} className='button button--flex'>Download CV
            <svg class = "button__icon"xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="download-alt" width="22"
                height="24"
                fill="none">
<path fill="var(--text-color)" d="M18,9h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1,0.4,1,1v7c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h2c0.6,0,1-0.4,1-1S8.6,9,8,9H6c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h12c1.7,0,3-1.3,3-3v-7C21,10.3,19.7,9,18,9z M8.3,14.7l3,3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L13,14.6V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v11.6l-1.3-1.3c-0.4-0.4-1-0.4-1.4,0C7.9,13.7,7.9,14.3,8.3,14.7z">
</path></svg>
            </a>
            <div className='socmed'>
            <a href='https://www.facebook.com/im.angelolee' className='home-soc-icon' target='_blank'  rel="noopener noreferrer">
                <i className="uil uil-facebook-f"></i>
            </a>

            <a href='https://www.linkedin.com/in/angelo-salenga-a7032428a/' className='home-soc-icon' target='_blank' rel="noopener noreferrer">
                <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href='https://github.com/gelolee' className='home-soc-icon' target='_blank'  rel="noopener noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
            </div>
        </div>
  )
}

export default Data