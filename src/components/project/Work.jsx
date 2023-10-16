import React from 'react'
import './project.css'
import ProjectImg from '../../assets/wesite.png'
import ProjectImg1 from '../../assets/booking.png'

const Work = () => {
  return (

    <div className="work-container container grid">
        <div className="work-card">
            <div className="zoom">
            <img src={ProjectImg} alt='' className='project-img' />
            </div>
                <h3 className="work-title">Manuscript Management System</h3>
                    <a href='https://gelolee.github.io/library-online/?fbclid=IwAR13YBvV3ykn09YE4lZFoi3kFFT0l05jd1gfIKIIWExCuq4omU3qnIcByhY' className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                    </a>
        </div>

        <div className="work-card">
            <div className="zoom">
            <img src={ProjectImg1} alt='' className='project-img' />
            </div>
                <h3 className="work-title">Booking System</h3>
                    <a href='https://gelolee.github.io/b00king-system/?fbclid=IwAR1kJ816nNFJwjdWHNxEsg6oIlln5K589vTOPIqEkdMmJa1G2Jwr1fe8DB0' className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                    </a>
        </div>
    </div>
  )
}

export default Work