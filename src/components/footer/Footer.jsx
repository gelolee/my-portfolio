import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faViber } from "@fortawesome/free-brands-svg-icons";
import './footer.css'

const Footer = () => {
return (
    <div className='footer'>
        <div className="footer-sec section-padding">
            <div className="footer-links">
                <hr></hr>
            <div className="footer-below">
                <div className="footer-logo">
                    <h2 className='footer-logo'> A.L.S </h2>
                </div>
                <div className="footer-social d-flex">
                    <a href='https://www.facebook.com/im.angelolee' className='' target='_blank' rel="noopener noreferrer"><i className='uil uil-facebook-f'></i></a>
                    <a href='https://www.instagram.com/gelo_lee/' className='' target='_blank' rel="noopener noreferrer"><i className='uil uil-instagram-alt'></i></a>
                    <a href='viber://chat?number=%2B639502462397' className='' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faViber} /></a>
                </div>
                </div> 
            </div>
        </div>
    </div>
)
}

export default Footer