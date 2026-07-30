import React from 'react'
import './project.css'
import ProjectImg from '../../assets/manuscript.png'
import ProjectImg1 from '../../assets/travel.png'
import ProjectImg2 from '../../assets/evsupreme.png'
import ProjectImg3 from '../../assets/powercity.png'

const Work = () => {
return (
    <div className="container">
        <div className="work-card">
            <div className="zoom">
                <img src={ProjectImg3} alt='' className='project-img' />
            </div>
                <div className='desc-btn'>
                    <h3 className="work-title">Product Catalog Website</h3>
                    <p className='mb-2'>For business or residential use, you can rely on Powercity® generators. Manufactured to meet applicable international standards including ISO 8528, NEMA 250, NFPA 110, IEC, European and British Standards.</p>
                    <a href='https://powercity.ph/' target="_blank" rel="noopener noreferrer" className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                    </a>
                </div>
        </div>
        <div className="work-card work-card-reverse">
                <div className='desc-btn'>
                    <h3 className="work-title">Ecommerce Website</h3>
                    <p className='mb-2'>EV Supreme (EVS) is a wholesaler and retailer of electric bikes, electric scooters, and electric motorcycles. It is formerly known as “Skoot”. The company also offers repair, upgrade, maintenance and customization services of its electric vehicles. Its products are based from popular and established brands such as Tromox, Coswheel, and GoBoard.</p>
                    <a href='https://evsupreme.net/' target="_blank" rel="noopener noreferrer" className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                    </a>
                </div>
                <div className="zoom">
                    <img src={ProjectImg2} alt='' className='project-img' />
                </div>
        </div>
        <div className="work-card">
            <div className="zoom">
                <img src={ProjectImg} alt='' className='project-img' />
            </div>
                <div className='desc-btn'>
                    <h3 className="work-title">Manuscript Management System</h3>
                    <p className='mb-2'>A full-stack web application built with PHP, MySQL, JavaScript, and HTML/CSS that serves as a digital thesis repository. Designed to replace physical library visits, it allows students to search, view, and access archived academic research papers online.</p>
                    <a href='https://gelolee.github.io/library-online/?fbclid=IwAR13YBvV3ykn09YE4lZFoi3kFFT0l05jd1gfIKIIWExCuq4omU3qnIcByhY' target='_blank' rel="noopener noreferrer" className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                </a>
                </div>
        </div>
        <div className="work-card work-card-reverse">
                <div className='desc-btn'>
                <h3 className="work-title">Booking System</h3>
                <p className='mb-2'>A full-stack web application built with PHP, MySQL, JavaScript, and HTML/CSS that automates travel bookings, itinerary creation, and schedule management, allowing users to search, reserve, and manage trip details online.</p>
                <a href='https://gelolee.github.io/b00king-system/?fbclid=IwAR1kJ816nNFJwjdWHNxEsg6oIlln5K589vTOPIqEkdMmJa1G2Jwr1fe8DB0' target='_blank' rel="noopener noreferrer" className='work-button'>
                    View Project<i className='bx bx-right-arrow-alt work-button-icon'></i>
                </a>
                </div>
                <div className="zoom">
                    <img src={ProjectImg1} alt='' className='project-img' />
                </div>
        </div>
    </div>
)
}

export default Work