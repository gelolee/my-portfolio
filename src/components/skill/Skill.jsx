import React from 'react'
import "./skill.css";
import SkillImg from '../../assets/html.png'
import SkillImg1 from '../../assets/css.png'
import SkillImg2 from '../../assets/js.png'
import SkillImg3 from '../../assets/php.png'
import SkillImg4 from '../../assets/mysql.png'
import SkillImg5 from '../../assets/react-logo-7B3CE81517-seeklogo.com.png'

const Skill = () => {
  return (
    <div className="skill-container container">
        <div className="skill-content">
            <h3 className="skill-title">Technology Stacks</h3>
             <div className="box-container">
               <div className="box-prog">
               <img src={SkillImg} alt='' className='img' />
                </div> 

                <div className="box-prog">
               <img src={SkillImg1} alt='' className='img' />
                </div> 

                <div className="box-prog">
               <img src={SkillImg2} alt='' className='img' />
                </div> 

                <div className="box-prog">
               <img src={SkillImg3} alt='' className='img' />
                </div> 

                <div className="box-prog">
               <img src={SkillImg4} alt='' className='img' />
                </div> 

                <div className="box-prog">
               <img src={SkillImg5} alt='' className='img' />
                </div> 
            <div className="skill-box">
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skill