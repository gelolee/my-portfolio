import React from 'react'
import './project.css'
import ProjectImg from '../../assets/wesite.png'
import ProjectImg1 from '../../assets/booking.png'
import ProjectImg2 from '../../assets/ecommerce.png'
import ProjectImg3 from '../../assets/powercity_web.png'

const Work = () => {
return (
    <div className="work-container container">
        <div className="work-card">
            <div className="zoom">
            <img src={ProjectImg3} alt='' className='project-img' />
            </div>
                <div className='desc-btn'>
                <h3 className="work-title">Product Catalog Website</h3>
                <a href='https://powercity.ph/' target="_blank" rel="noopener noreferrer" className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                </a>
                </div>
        </div>
        <div className="work-card">
            <div className="zoom">
            <img src={ProjectImg2} alt='' className='project-img' />
            </div>
                <div className='desc-btn'>
                <h3 className="work-title">Ecommerce Website</h3>
                <a href='https://evsupreme.net/' target="_blank" rel="noopener noreferrer" className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                </a>
                </div>
        </div>
        <div className="work-card">
            <div className="zoom">
            <img src={ProjectImg} alt='' className='project-img' />
            </div>
                <div className='desc-btn'>
                <h3 className="work-title">Manuscript Management System</h3>
                <a href='https://gelolee.github.io/library-online/?fbclid=IwAR13YBvV3ykn09YE4lZFoi3kFFT0l05jd1gfIKIIWExCuq4omU3qnIcByhY' target='_blank' rel="noopener noreferrer" className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                </a>
                </div>
        </div>
        <div className="work-card">
            <div className="zoom">
            <img src={ProjectImg1} alt='' className='project-img' />
            </div>
                <div className='desc-btn'>
                <h3 className="work-title">Booking System</h3>
                <a href='https://gelolee.github.io/b00king-system/?fbclid=IwAR1kJ816nNFJwjdWHNxEsg6oIlln5K589vTOPIqEkdMmJa1G2Jwr1fe8DB0' target='_blank' rel="noopener noreferrer" className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                </a>
                </div>
        </div>
    </div>
)
}

export default Work