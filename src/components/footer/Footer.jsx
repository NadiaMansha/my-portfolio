import React from 'react'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoGithub} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import './Footer.css'

export const Footer = () => {
  return (
   <div className="footer">
        <div className="navbar__center">
                <ul className="navbar__center__list">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                  
                    <li><a href="">Works</a></li>
                    <li><a href="">Testimonials</a></li>
                    
                    </ul>
                </div>
          
                <div className="home_social__icons">
                    <BiLogoFacebookCircle className="home_social__icons__icon"/>
                    <BiLogoInstagramAlt className="home_social__icons__icon"/>
                    <BiLogoLinkedin className="home_social__icons__icon"/>
                    <BiLogoGithub className="home_social__icons__icon"/>
                    <BiLogoTwitter className="home_social__icons__icon"/>
                    </div>
                    
            
        
     
   </div>
  )
}
