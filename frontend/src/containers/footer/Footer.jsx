import React from 'react';
import './footer.css';
import slicelogo from '../../assets/LOGOS-05.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import { FaPhone } from 'react-icons/fa'; 
import { FaMailBulk} from 'react-icons/fa'; 

const Footer = () => {
  return  (
    <div>
      <div className="slice__footer section__padding bg-gray-700">
        <div className="slice__footer-links">
          <div className="slice__footer-links_logo">
            <img src={slicelogo} alt ="slice-logo"/>
          </div>
         <div className="slice__footer-links_div">
         <h4>  +44 7780 600224  </h4> 
            <h4> slice.boro@gmail.com </h4>
            <h4> 25 Bedford St, Middlesbrough TS1 2LL </h4>
            <h4> 7 Leven Rd, Norton, Stockton-on-Tees TS20 1BQ </h4>
         </div>
         <div className="slice__footer-links_div">
            <h3> OPENING TIMES </h3>
            <h4> THURSDAY - SATURDAY: 5-10PM </h4>
            <h4> SUNDAY: 4-9:00PM</h4>
         </div>
         <div className="slice__footer-links_div">
            <h3> OUR SOCIALS: </h3>
            <div className="slice__footer-links_social">
            <div className="slice__footer-facebookicon" >
       <a href="https://www.facebook.com/slice.boro/" > <FontAwesomeIcon icon={faFacebook} /> </a> 
        </div>
        <div className="slice__footer-instagramicon" >
         <a href="https://www.instagram.com/slice.boro/?hl=en"><FontAwesomeIcon icon={faInstagram} /> </a> 
        </div>
          </div>
         </div>
        </div>
      </div>
    </div>

  )
  
 
}

export default Footer;
