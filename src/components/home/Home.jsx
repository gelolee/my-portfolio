import React from 'react'
import "./home.css";
import Data from './Data';
import Scroll from './Scroll';

const Home = () => {
  return (
    <section className="section" id="home">
        <div className="home-container container grid">
            <div className="home-content grid">

                <div className="home-img"></div>
                
                <Data />
            </div>
            <Scroll />
        </div>
    </section>
  )
}

export default Home