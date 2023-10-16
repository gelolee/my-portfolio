import React from 'react'
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
                <div className="footer-social">
                    <a href='https://www.facebook.com/im.angelolee' className='' target><i className='uil uil-facebook-f'></i> </a>
                    <a href='https://www.instagram.com/gelo_lee/' className='' target><i className='uil uil-instagram-alt'></i> </a>
                    <a href='https://web.telegram.org/a/' className='' target><i className='uil uil-telegram-alt'></i> </a>
                </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Footer